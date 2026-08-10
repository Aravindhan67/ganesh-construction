export const projects = [
  {
    id: 'aurelia-residences',
    title: 'The Aurelia Residences',
    type: 'Luxury Residential',
    location: 'Chennai, India',
    year: '2026',
    area: '245,000 sq. ft.',
    status: 'Completed 2026',
    services: ['Design Coordination', 'Construction', 'Project Management', 'Interior Execution'],
    description: 'A refined collection of private residences designed around light, landscape and enduring materials.',
    fullDescription: 'The Aurelia Residences is a collection of contemporary homes designed to create a stronger relationship between architecture, natural light and the surrounding landscape.\n\nOur construction approach focused on precision concrete work, high-performance glazing, carefully coordinated services and a refined material palette. Every phase was planned to protect the architectural intent while maintaining strict control over quality and execution.',
    image: '/images/projects/aurelia.png',
    images: [
      '/images/projects/aurelia.png',
      '/images/projects/aurelia.png',
      '/images/projects/aurelia.png'
    ],
    technicalDetails: {
      structure: 'Reinforced concrete frame with post-tensioned slabs',
      facade: 'High-performance low-E glazing with anodized aluminum mullions',
      materials: 'Fair-faced concrete, natural stone, engineered oak',
      sustainability: 'LEED Gold certified, rainwater harvesting, solar integration',
      timeline: '24 months'
    },
    featured: true,
    review: {
      text: 'Ganesh Construction brought an incredible level of precision to The Aurelia Residences. The attention to detail in the concrete finishes and complex joinery exceeded our highest expectations.',
      author: 'MEERA SHARMA',
      role: 'Lead Architect, Studio Inscape'
    },
    related: ['verde-house', 'casa-terra']
  },
  {
    id: 'nexus-business-district',
    title: 'Nexus Business District',
    type: 'Commercial',
    location: 'Coimbatore, India',
    year: '2025',
    area: '1.2M sq. ft.',
    status: 'Completed 2025',
    services: ['General Contracting', 'Project Management'],
    description: 'A high-performance commercial destination built for the evolving needs of modern business.',
    fullDescription: 'Nexus Business District represents a shift in commercial architecture, prioritizing flexibility, sustainability, and human-centric design. We managed the complex coordination of multiple trade contractors to deliver this flagship project on schedule.',
    image: '/images/projects/nexus.png',
    images: [],
    technicalDetails: {
      structure: 'Steel frame with composite floor decks',
      facade: 'Unitized curtain wall system',
      materials: 'Steel, glass, precast concrete',
      sustainability: 'IGBC Platinum rating',
      timeline: '36 months'
    },
    featured: true,
    review: {
      text: 'Delivering a 1.2 million square foot facility on an aggressive schedule requires a contractor with profound logistical expertise. Ganesh navigated every challenge flawlessly.',
      author: 'VIKRAM PATEL',
      role: 'Director of Development, Nexus Group'
    },
    related: ['horizon-campus', 'meridian-towers']
  },
  {
    id: 'verde-house',
    title: 'The Verde House',
    type: 'Private Villa',
    location: 'Bengaluru, India',
    year: '2026',
    area: '12,000 sq. ft.',
    status: 'Completed 2026',
    services: ['Design & Build', 'Premium Interiors'],
    description: 'A contemporary residence where architecture and landscape exist as one continuous experience.',
    fullDescription: 'The Verde House blurs the line between indoor and outdoor living. Our team worked closely with the architects to execute complex cantilevers and seamless floor transitions that define the spatial experience.',
    image: '/images/projects/verde.png',
    images: [],
    technicalDetails: {
      structure: 'Load-bearing masonry with structural steel cantilevers',
      facade: 'Exposed concrete, structural glazing',
      materials: 'Teak wood, slate, exposed concrete',
      sustainability: 'Passive cooling, greywater recycling',
      timeline: '18 months'
    },
    featured: true,
    review: {
      text: 'The execution of the massive cantilevers was nothing short of brilliant. Ganesh builders took our boldest design elements and made them a structural reality without compromise.',
      author: 'SANJAY REDDY',
      role: 'Homeowner'
    },
    related: ['aurelia-residences', 'solace-retreat']
  },
  {
    id: 'meridian-towers',
    title: 'Meridian Towers',
    type: 'Mixed Use',
    location: 'Hyderabad, India',
    year: '2024',
    area: '850,000 sq. ft.',
    status: 'Completed 2024',
    services: ['General Contracting'],
    description: 'A landmark mixed-use development integrating retail, office, and residential spaces.',
    fullDescription: 'Meridian Towers is a defining vertical development in the heart of Hyderabad. The project required deep foundation work and high-rise structural expertise, resulting in a seamlessly integrated multi-use tower.',
    image: '/images/projects/meridian.png',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'A highly complex mixed-use project that demanded rigorous coordination between residential, retail, and corporate zones. The final quality is exceptional.',
      author: 'ARJUN MENON',
      role: 'Managing Director, Meridian Group'
    },
    related: ['nexus-business-district', 'horizon-campus']
  },
  {
    id: 'solace-retreat',
    title: 'Solace Retreat',
    type: 'Hospitality',
    location: 'Pondicherry, India',
    year: '2023',
    area: '150,000 sq. ft.',
    status: 'Completed 2023',
    services: ['Design & Build', 'Premium Interiors'],
    description: 'A boutique coastal resort focused on wellness and localized materials.',
    fullDescription: 'Constructed directly on the coastline, Solace Retreat incorporates local vernacular architecture and sustainable materials. The resort features bespoke timber joinery, custom-cast terrazzo floors, and extensive water features.',
    image: '/images/projects/solace.png',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'Ganesh captured the exact serene, grounded aesthetic we wanted for Solace. Their understanding of traditional materials applied in a modern context is unmatched.',
      author: 'PRIYA NAIR',
      role: 'Founder, Solace Wellness Resorts'
    },
    related: ['verde-house', 'casa-terra']
  },
  {
    id: 'casa-terra',
    title: 'Casa Terra',
    type: 'Private Residence',
    location: 'Chennai, India',
    year: '2022',
    area: '8,500 sq. ft.',
    status: 'Completed 2022',
    services: ['Design Coordination', 'Construction'],
    description: 'An earth-toned residence utilizing traditional building techniques in a modern context.',
    fullDescription: 'Casa Terra stands as a testament to sustainable luxury. Built using rammed earth and locally sourced laterite, the home naturally regulates temperature while presenting a breathtaking monolithic aesthetic.',
    image: '/images/projects/casa.png',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'Building with rammed earth requires immense patience and skill. The team from Ganesh delivered a home that feels like it organically grew from the soil itself.',
      author: 'DR. KARTIK IYER',
      role: 'Homeowner'
    },
    related: ['verde-house', 'aurelia-residences']
  },
  {
    id: 'horizon-campus',
    title: 'Horizon Corporate Campus',
    type: 'Commercial',
    location: 'Bengaluru, India',
    year: '2025',
    area: '2.5M sq. ft.',
    status: 'In Progress',
    services: ['Project Management'],
    description: 'A sprawling tech campus designed for collaborative work and ecological integration.',
    fullDescription: 'The Horizon Campus redefines the corporate environment, weaving high-tech workspaces seamlessly through a network of urban forests and open-air collaborative zones.',
    image: '/images/projects/horizon.png',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'Managing a 2.5 million square foot build requires monumental organizational capability. Ganesh has kept us ahead of schedule without sacrificing an inch of quality.',
      author: 'SARAH JENKINS',
      role: 'VP Real Estate, Horizon Tech'
    },
    related: ['nexus-business-district', 'meridian-towers']
  },
  {
    id: 'atelier-19',
    title: 'Atelier 19',
    type: 'Premium Interiors',
    location: 'Mumbai, India',
    year: '2024',
    area: '25,000 sq. ft.',
    status: 'Completed 2024',
    services: ['Premium Interiors'],
    description: 'A high-end fashion design studio and gallery space.',
    fullDescription: 'A meticulous interior fit-out for a leading fashion house, featuring custom brass fixtures, fluted glass partitions, and specialized lighting systems designed to highlight fabric textures and colors accurately.',
    image: '/images/projects/atelier.png',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'The precision required for our brass detailing and custom millwork was extreme. Ganesh Construction delivered a flawless space that perfectly reflects our brand\'s commitment to craftsmanship.',
      author: 'ROHIT BAL',
      role: 'Creative Director, Atelier 19'
    },
    related: ['solace-retreat', 'aurelia-residences']
  }
];
