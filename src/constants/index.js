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
      title:"Stonks",
      category:"Full Stack Web Dev",
      image:"/assets/stonks.jpg",
      link:"https://stonks-amber.vercel.app/"
    },
    {
      id: 2,
      title:"Oopsie Daisy",
      category:"Full Stack Web Dev",
      image:"/assets/oopsie.png",
      link:"https://oopsiedaisy.vercel.app/"
    },
    {
      id: 3,
      title:"Tulsa Athletics Mobile App",
      category:"UI/UX",
      image:"/assets/tulsa-athletics.jpg",
      link:"https://www.figma.com/proto/HuXqbeMQNAQzjiVUdgNTYG/Tulsa-Hurricane-Mobile-App?page-id=95%3A6492&node-id=1006-1142&starting-point-node-id=1006%3A1142&t=eAmMJqAH8BlCs7L9-1"
    },
    {
      id: 4,
      title:"Don Pollo Quiz",
      category:"Full Stack Web Dev",
      image:"/assets/don-quiz.jpg",
      link:"https://don-pollo-quiz.vercel.app/"
    },
    {
      id: 5,
      title:"BeautifulSoup Web Scraping",
      category:"Data Analysis",
      image:"/assets/beautifulsoup.webp",
      link:"https://medium.com/@aimanfarizz/how-to-use-beautifulsoup-for-simple-web-scraping-93df3c309ee6"
    },
    {
      id: 6,
      title:"Lockedin.tech",
      category:"AI",
      image:"/assets/lockedin.tech.webp",
      link:"some_link.com"
    },
    {
      id: 7,
      title:"CareerCrisp",
      category:"Full Stack Web Dev | AI",
      image:"/assets/career-crisp.png",
      link:"https://careercrisp.vercel.app/"
    },
    {
      id: 8,
      title:"Copa America Shot Analysis",
      category:"Data Analysis",
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