/**
 * Dicionário para mapear caminhos de rota (pathnames) para nomes amigáveis.
 * A chave é o pathname que vem do `usePathname`, e o valor é o texto que será exibido.
 * * Adicione todas as suas rotas personalizadas aqui.
 */
const routeNames: { [key: string]: string } = {
	"/": "Página Inicial",
	"/get-starter": "Primeiros passos",
	"/themes": "Temas",
  "/animations": "Animações",

  // componentes
	"/forms": "Formulários",
	"/layout": "Layouts",
	"/feedback": "Feedbacks",
	"/data-display": "Exibição de dados",
	"/overlays": "Sobreposições",
	// Adicione outras rotas conforme necessário...
};

/**
 * Recebe um pathname bruto (ex: '/settings/profile') e retorna um nome amigável.
 * Primeiro, tenta encontrar o nome em um dicionário de rotas conhecidas.
 * Se não encontrar, formata o último segmento da URL como um fallback.
 * * @param path - O pathname da URL (ex: retornado por `usePathname`).
 * @returns Uma string com o nome amigável da rota.
 */
export const getFriendlyRouteName = (path: string): string => {
	// 1. Procura pelo caminho completo no dicionário de nomes
	if (routeNames[path]) {
		return routeNames[path];
	}

	// 2. Se não encontrou, implementa a lógica de fallback
	// Pega apenas o último segmento da URL (ex: 'profile' de '/settings/profile')
	const lastSegment = path.split("/").filter(Boolean).pop() || "";

	// Formata o segmento (remove hifens, capitaliza)
	const formattedSegment = lastSegment
		.replace(/-/g, " ")
		.replace(/^\w/, (c) => c.toUpperCase());

	// Retorna o segmento formatado ou um nome padrão se tudo falhar
	return formattedSegment || "Página";
};