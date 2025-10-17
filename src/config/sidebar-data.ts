import {
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  Frame,
  PieChart,
  MessageSquareWarning, // Adicionado para Feedback
  AppWindow, // Adicionado para Sobreposições
  Table, // Adicionado para Exibição de Dados
} from "lucide-react";

// Este é o seu array de dados, agora mais completo.
export const data = {
  user: {
    name: "Juliano Santos",
    email: "dossantosdevoficial@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/119906141?v=4",
  },
  navDocs: [
    {
      title: "Documentação",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Primeiros passos",
          url: "#",
        },
        {
          title: "Temas",
          url: "#",
        },
        {
          title: "Animações",
          url: "#",
        },
      ],
    },
  ],
  navComps: [
    // Seção de Formulários
    {
      title: "Formulários",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "Input",
          slug: "input",
          url: "/components/input",
        },
        {
          title: "TextArea",
          slug: "textarea",
          url: "/components/textarea",
        },
        {
          title: "Form",
           slug: "form",
          url: "/components/form",
        },
        {
          title: "Checkbox",
          slug: "checkbox",
          url: "/components/checkbox",
        },
        {
          title: "Select",
          slug: "select",
          url: "/components/select",
        },
      ],
    },
    // Seção de Layout
    {
      title: "Layout",
      url: "#",
      icon: Frame, // Ícone mais apropriado
      items: [
        {
          title: "Header",
          url: "/components/header",
        },
        {
          title: "Footer",
          url: "/components/footer",
        },
        {
          title: "Container",
          url: "/components/container",
        },
        {
          title: "Grid",
          url: "/components/grid",
        },
      ],
    },
    // Seção de Feedback (NOVO)
    {
        title: "Feedback",
        url: "#",
        icon: MessageSquareWarning,
        items: [
            {
                title: "Alert",
                url: "/components/alert",
            },
            {
                title: "Alert Dialog",
                url: "/components/alert-dialog",
            },
            {
                title: "Toast",
                url: "/components/toast",
            },
            {
                title: "Spinner",
                url: "/components/spinner",
            },
            {
                title: "Skeleton",
                url: "/components/skeleton"
            }
        ]
    },
    // Seção de Exibição de Dados (NOVO)
    {
        title: "Exibição de Dados",
        url: "#",
        icon: PieChart,
        items: [
            {
                title: "Avatar",
                url: "/components/avatar",
            },
            {
                title: "Badge",
                url: "/components/badge",
            },
            {
                title: "Card",
                url: "/components/card",
            },
            {
                title: "Table",
                url: "/components/table",
            },
            {
                title: "Accordion",
                slug: "accordion",
                url: "/components/accordion",
            },
        ]
    },
    // Seção de Sobreposições (NOVO)
    {
        title: "Sobreposições",
        url: "#",
        icon: AppWindow,
        items: [
            {
                title: "Dialog",
                url: "/components/dialog",
            },
            {
                title: "Tooltip",
                url: "/components/tooltip",
            },
            {
                title: "Popover",
                url: "/components/popover",
            }
        ]
    }
  ],
};