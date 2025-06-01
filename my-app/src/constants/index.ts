export const projectsData = [
  {
    id: 0,
    name: "AI-Powered Chat Application",
    description: "A real-time chat application with AI integration using RAG architecture for intelligent responses and context-aware conversations.",
    shortDescription: "Intelligent chat app with RAG integration for context-aware AI responses",
    technologies: [
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "TypeScript", icon: "📘", color: "#3178C6" },
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "LangChain", icon: "🔗", color: "#00D4AA" },
      { name: "OpenAI", icon: "🤖", color: "#412991" },
      { name: "Node.js", icon: "🟢", color: "#339933" }
    ],
    image: "/api/placeholder/600/400",
    githubUrl: "https://github.com/yourusername/ai-chat-app",
    liveUrl: "https://ai-chat-app.vercel.app",
    category: "AI Integration",
    featured: true,
    completionDate: "2024",
    details: {
      overview: "This project demonstrates the integration of modern web technologies with AI capabilities, creating an intelligent chat application that can understand context and provide meaningful responses.",
      features: [
        "Real-time messaging with WebSocket integration",
        "RAG (Retrieval-Augmented Generation) for context-aware responses",
        "User authentication and session management",
        "Message history and conversation persistence",
        "Responsive design for mobile and desktop"
      ],
      challenges: [
        "Implementing efficient vector search for RAG",
        "Managing real-time state across multiple users",
        "Optimizing AI response times"
      ],
      learnings: [
        "Advanced React patterns for real-time applications",
        "Vector database integration and optimization",
        "AI model fine-tuning and prompt engineering"
      ]
    }
  },
  {
    id: 1,
    name: "E-Commerce Analytics Dashboard",
    description: "A comprehensive analytics dashboard for e-commerce platforms with real-time data visualization, performance metrics, and predictive analytics.",
    shortDescription: "Real-time analytics dashboard with predictive insights for e-commerce",
    technologies: [
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "TypeScript", icon: "📘", color: "#3178C6" },
      { name: "Go", icon: "🔷", color: "#00ADD8" },
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "Redis", icon: "🔴", color: "#DC382D" },
      { name: "Chart.js", icon: "📊", color: "#FF6384" }
    ],
    image: "/api/placeholder/600/400",
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard.vercel.app",
    category: "Full Stack",
    featured: true,
    completionDate: "2024",
    details: {
      overview: "A powerful analytics platform that helps e-commerce businesses make data-driven decisions through comprehensive metrics, real-time monitoring, and predictive analytics.",
      features: [
        "Real-time sales and traffic monitoring",
        "Customer behavior analytics and segmentation",
        "Inventory management with predictive restocking",
        "Revenue forecasting using machine learning",
        "Customizable dashboard widgets"
      ],
      challenges: [
        "Handling large datasets with optimal performance",
        "Implementing real-time data streaming",
        "Creating intuitive data visualizations"
      ],
      learnings: [
        "Advanced data processing techniques in Go",
        "Real-time data streaming with WebSockets",
        "Performance optimization for large datasets"
      ]
    }
  }
];