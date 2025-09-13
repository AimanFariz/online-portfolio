export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  export const personalProjects = [
    {
      id: 1,
      title:"Chelsea FC 2025 Viz a Thon",
      category:"Design",
      image:"/assets/chelsea.png",
      link:"https://www.figma.com/proto/aeWLfoo0bYma3h7tQoOOaR/Chelsea-2025-Viz-a-thon---Aiman?page-id=2%3A5&node-id=36-633&viewport=178%2C60%2C0.19&t=mB4Fg6MFVdTThpOe-1&scaling=contain&content-scaling=fixed"
    },
    {
      id: 2,
      title:"Tulsa Athletics Mobile App",
      category:"Design",
      image:"/assets/tulsa-athletics.jpg",
      link:"https://www.figma.com/proto/HuXqbeMQNAQzjiVUdgNTYG/Tulsa-Hurricane-Mobile-App?page-id=95%3A6492&node-id=1006-1142&starting-point-node-id=1006%3A1142&t=eAmMJqAH8BlCs7L9-1"
    },
    {
      id: 3,
      title:"Pickoff Probability Model",
      category:"Sports Analytics",
      image:"/assets/baseball.jpg",
      link:"https://drive.google.com/file/d/1BLgyWDHDEcheHo4JaXUp1A8RMdXFVbQU/view?usp=sharing"
    },
    {
      id: 4,
      title:"MLS Drafts Analysis",
      category:"Sports Analytics",
      image:"/assets/mls.webp",
      link: "https://medium.com/@aimanfarizz/mls-draft-analysis-which-position-has-the-best-odds-in-the-drafts-74950c83adfe"
    },
    {
      id: 5,
      title:"Oopsie Daisy",
      category:"Web Development",
      image:"/assets/oopsie.png",
      link:"https://oopsiedaisy.vercel.app/"
    },
    {
      id: 6,
      title:"Don Pollo Quiz",
      category:"Web Development",
      image:"/assets/don-quiz.jpg",
      link:"https://don-pollo-quiz.vercel.app/"
    },
    
    
    {
      id: 7,
      title:"CareerCrisp",
      category:"Web Development",
      image:"/assets/career-crisp.png",
      link:"https://careercrisp.vercel.app/"
    },
    {
      id: 8,
      title:"Copa America Shot Analysis",
      category:"Sports Analytics",
      image:"/assets/copa.webp",
      link:"https://medium.com/@aimanfarizz/copa-america-2024-shot-analysis-7c51193e161f"
    },
    
  ]
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };


export const articles = [
  {
    id:1,
    title:"",
    link:"",
    image:""
  }
]