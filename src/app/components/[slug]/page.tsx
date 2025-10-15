import { promises as fs } from 'fs';
import path from 'path';
import { ComponentClientPage } from '@/components/global/component-client-page'; // O nosso novo componente de cliente
import { notFound } from 'next/navigation';

// Função para carregar dinamicamente os dados do componente
async function getComponentData(slug: string) {
  try {
    const basePath = path.join(process.cwd(), 'src', 'components', 'ui-kit', slug);

    // 1. Lê o código fonte real do componente
    const code = await fs.readFile(path.join(basePath, 'index.tsx'), 'utf-8');

    // 2. Importa dinamicamente os metadados
    const { docs } = await import(`@/components/ui-kit/${slug}/${slug}.docs.ts`);

    // 3. Importa dinamicamente o componente de preview
    const { default: PreviewComponent } = await import(`@/components/ui-kit/${slug}/${slug}.preview.tsx`);

    return {
      code,
      docs,
      PreviewComponent,
    };
  } catch (error) {
    return null; // Componente não encontrado
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const componentData = await getComponentData(params.slug);

  if (!componentData) {
    notFound(); // Mostra uma página 404 se o componente não existir
  }

  const { code, docs, PreviewComponent } = componentData;

  // Passa todos os dados para o componente de cliente que lida com a interatividade
  return (
    <ComponentClientPage
      title={docs.title}
      description={docs.description}
      dependencies={docs.dependencies}
      code={code}
      PreviewComponent={PreviewComponent}
    />
  );
}