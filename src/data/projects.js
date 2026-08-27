export const projects = [
  {
    id: 'aurelia-residences',
    title: 'The Aurelia Penthouses',
    type: 'Luxury Residential',
    location: 'Chennai, India',
    year: '2026',
    area: '15,000 sq. ft.',
    status: 'Completed 2026',
    services: ['Space Planning', 'Premium Interiors', 'Custom Millwork'],
    description: 'A refined collection of private penthouse interiors designed around light and enduring materials.',
    fullDescription: 'The Aurelia Penthouses represent a shift in high-end living. Our interior approach focused on precision joinery, high-performance acoustics, carefully coordinated lighting, and a refined material palette. Every phase was planned to protect the design intent while maintaining strict control over quality and execution.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    technicalDetails: {
      flooring: 'Italian Marble & Engineered Oak',
      lighting: 'Custom Lutron Automation System',
      materials: 'Fair-faced concrete accents, natural stone, brushed brass',
      sustainability: 'Low VOC finishes, energy efficient lighting',
      timeline: '12 months'
    },
    featured: true,
    review: {
      text: 'Dazzy Interiors brought an incredible level of precision to The Aurelia Penthouses. The attention to detail in the finishes and complex joinery exceeded our highest expectations.',
      author: 'MEERA SHARMA',
      role: 'Lead Architect, Studio Inscape'
    },
    related: ['verde-house', 'casa-terra']
  },
  {
    id: 'nexus-business-district',
    title: 'Nexus Corporate HQ',
    type: 'Commercial',
    location: 'Coimbatore, India',
    year: '2025',
    area: '120,000 sq. ft.',
    status: 'Completed 2025',
    services: ['Workspace Design', 'Interior Build-out', 'Project Management'],
    description: 'A high-performance commercial interior built for the evolving needs of modern collaborative work.',
    fullDescription: 'Nexus Corporate HQ represents a shift in workspace interiors, prioritizing flexibility, wellness, and human-centric design. We managed the complex coordination of multiple trade contractors to deliver this flagship office on schedule.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    images: [],
    technicalDetails: {
      workstations: 'Ergonomic modular desking',
      acoustics: 'Acoustic cloud ceilings and fabric paneling',
      materials: 'Glass partitions, exposed ceiling services, warm wood accents',
      sustainability: 'WELL Building Standard compliant',
      timeline: '8 months'
    },
    featured: true,
    review: {
      text: 'Delivering a 120,000 square foot facility on an aggressive schedule requires a contractor with profound logistical expertise. Dazzy navigated every challenge flawlessly.',
      author: 'VIKRAM PATEL',
      role: 'Director of Development, Nexus Group'
    },
    related: ['horizon-campus', 'meridian-towers']
  },
  {
    id: 'verde-house',
    title: 'The Verde Apartment',
    type: 'Private Residence',
    location: 'Bengaluru, India',
    year: '2026',
    area: '4,500 sq. ft.',
    status: 'Completed 2026',
    services: ['Design & Build', 'Premium Interiors'],
    description: 'A contemporary residence where interior space and natural light exist as one continuous experience.',
    fullDescription: 'The Verde Apartment brings the outside in. Our team worked closely with the clients to execute complex ceiling details and seamless floor transitions that define the spatial experience, utilizing indoor planters and organic textures.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    images: [],
    technicalDetails: {
      walls: 'Venetian Plaster',
      lighting: 'Concealed LED coves and feature pendants',
      materials: 'Teak wood, slate, indoor landscaping',
      sustainability: 'Locally sourced materials',
      timeline: '6 months'
    },
    featured: true,
    review: {
      text: 'The execution of the complex millwork was nothing short of brilliant. Dazzy team took our boldest design elements and made them a reality without compromise.',
      author: 'SANJAY REDDY',
      role: 'Homeowner'
    },
    related: ['aurelia-residences', 'solace-retreat']
  },
  {
    id: 'meridian-towers',
    title: 'Meridian Retail Flagship',
    type: 'Retail',
    location: 'Hyderabad, India',
    year: '2024',
    area: '25,000 sq. ft.',
    status: 'Completed 2024',
    services: ['Retail Fit-out', 'Project Management'],
    description: 'A landmark retail space integrating immersive brand experiences and luxury displays.',
    fullDescription: 'Meridian Retail Flagship is a defining commercial space in the heart of Hyderabad. The project required deep coordination of display lighting, security systems, and high-end finishes, resulting in a seamlessly integrated luxury environment.',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'A highly complex retail project that demanded rigorous coordination of custom fixtures and lighting. The final quality is exceptional.',
      author: 'ARJUN MENON',
      role: 'Managing Director, Meridian Group'
    },
    related: ['nexus-business-district', 'horizon-campus']
  },
  {
    id: 'solace-retreat',
    title: 'Solace Spa & Wellness',
    type: 'Hospitality',
    location: 'Pondicherry, India',
    year: '2023',
    area: '15,000 sq. ft.',
    status: 'Completed 2023',
    services: ['Design & Build', 'Premium Interiors'],
    description: 'A boutique wellness interior focused on serenity and localized tactile materials.',
    fullDescription: 'Designed as a sanctuary, Solace Spa incorporates local vernacular crafts and sustainable materials. The interior features bespoke timber joinery, custom-cast terrazzo floors, and extensive indoor water features for acoustic tranquility.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'Dazzy captured the exact serene, grounded aesthetic we wanted for Solace. Their understanding of traditional materials applied in a modern context is unmatched.',
      author: 'PRIYA NAIR',
      role: 'Founder, Solace Wellness Resorts'
    },
    related: ['verde-house', 'casa-terra']
  },
  {
    id: 'casa-terra',
    title: 'Casa Terra Interiors',
    type: 'Private Residence',
    location: 'Chennai, India',
    year: '2022',
    area: '8,500 sq. ft.',
    status: 'Completed 2022',
    services: ['Design Coordination', 'Interior Execution'],
    description: 'An earth-toned interior utilizing traditional textures in a modern living context.',
    fullDescription: 'Casa Terra stands as a testament to sustainable luxury interiors. Executed using clay plasters and locally sourced laterite features, the home naturally breathes while presenting a breathtaking monolithic aesthetic.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'Working with raw, natural textures requires immense patience and skill. The team from Dazzy delivered an interior that feels like an organic extension of the earth.',
      author: 'DR. KARTIK IYER',
      role: 'Homeowner'
    },
    related: ['verde-house', 'aurelia-residences']
  },
  {
    id: 'horizon-campus',
    title: 'Horizon Co-working Space',
    type: 'Commercial',
    location: 'Bengaluru, India',
    year: '2025',
    area: '45,000 sq. ft.',
    status: 'In Progress',
    services: ['Project Management', 'Interior Build-out'],
    description: 'A sprawling agile workspace designed for collaborative work and creative thinking.',
    fullDescription: 'The Horizon Co-working Space redefines the shared environment, weaving high-tech desks seamlessly through a network of indoor plants, lounges, and open-air collaborative zones.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'Managing a complex multi-zone fit-out requires monumental organizational capability. Dazzy has kept us ahead of schedule without sacrificing an inch of quality.',
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
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    images: [],
    technicalDetails: {},
    featured: false,
    review: {
      text: 'The precision required for our brass detailing and custom millwork was extreme. Dazzy Interiors delivered a flawless space that perfectly reflects our brand\'s commitment to craftsmanship.',
      author: 'ROHIT BAL',
      role: 'Creative Director, Atelier 19'
    },
    related: ['solace-retreat', 'aurelia-residences']
  }
];
