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
          url: "#",
        },
        {
          title: "TextArea",
          url: "#",
        },
        {
          title: "Form",
          url: "#",
        },
        {
          title: "Checkbox",
          url: "#",
        },
        {
          title: "Select",
          url: "#",
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
          url: "#",
        },
        {
          title: "Footer",
          url: "#",
        },
        {
          title: "Container",
          url: "#",
        },
        {
          title: "Grid",
          url: "#",
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
                url: "#",
            },
            {
                title: "Toast",
                url: "#",
            },
            {
                title: "Spinner",
                url: "#",
            },
            {
                title: "Skeleton",
                url: "#"
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
                url: "#",
            },
            {
                title: "Badge",
                url: "#",
            },
            {
                title: "Card",
                url: "#",
            },
            {
                title: "Table",
                url: "#",
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
                title: "Modal",
                url: "#",
            },
            {
                title: "Tooltip",
                url: "#",
            },
            {
                title: "Popover",
                url: "#",
            }
        ]
    }
  ],
};