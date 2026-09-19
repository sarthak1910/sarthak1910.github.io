// `links` is intentionally empty where no public URL exists — add real URLs here and the
// buttons will appear automatically. Nothing is invented.
export const projects = [
  {
    id: 'dealermatix-sfa',
    title: 'DealerMatix SFA',
    subtitle: 'Sales Force Automation Platform',
    kind: 'Enterprise Mobile Application',
    year: '2025 — Present',
    featured: true,
    description:
      'A cross-platform Sales Force Automation app for Android and iOS, built with React Native and the Salesforce Mobile SDK, used daily by field sales teams.',
    problem:
      'Field sales reps place orders from locations with unreliable connectivity, under pricing rules that change per scheme, customer and region. A connected-only app simply stops being usable at the moment it matters most.',
    built: [
      'Scheme management, manual schemes, dynamic pricing, discounts and a tax calculator driving accurate order totals.',
      'Offline-first data layer on SmartStore with SmartSync / Mobile Sync against Salesforce Apex.',
      'Real-time GPS tracking and automated background synchronization.',
      'Complete order workflows, production support and a steady stream of change requests.',
      'Build, release and deployment pipeline for the Google Play Store and Apple App Store.',
    ],
    challenge:
      'Keeping local and server state correct across offline edits and sync conflicts, while keeping large record sets fast on mid-range devices — solved with pagination, lazy loading, polling and tuned SOQL queries.',
    impact: [
      '500+ active users on the production application',
      '~30% improvement in application performance',
      'Shipped and maintained on both app stores',
    ],
    stack: [
      'React Native',
      'JavaScript',
      'Redux',
      'Context API',
      'Salesforce Mobile SDK',
      'Apex',
      'SmartStore',
      'Mobile Sync',
      'Android',
      'iOS',
    ],
    visual: 'mobile',
    note: 'Proprietary — implementation details, source and customer data are confidential.',
    links: [],
  },
  {
    id: 'smartcart',
    title: 'SmartCart',
    subtitle: 'Full-Stack E-Commerce Application',
    kind: 'Full-Stack Web Application',
    year: 'Personal project',
    featured: true,
    description:
      'A full-stack e-commerce application with a React frontend and a Java Spring Boot backend — built to take what I knew from mobile and apply it across the whole stack.',
    problem:
      'I wanted to own an application end to end rather than consume someone else\'s API: model the domain, expose it over HTTP, and then build the interface on top of my own contract.',
    built: [
      'React frontend for product browsing and purchasing workflows with responsive, interactive UI components.',
      'Spring Boot services with Spring Data JPA for persistence and business logic.',
      'Secure REST APIs covering products, users and orders.',
      'A Spring AI powered chatbot that answers product-related questions.',
      'Dockerized backend for consistent deployment across environments.',
    ],
    challenge:
      'Designing a clean REST contract and JPA entity model that the frontend could consume without leaking database structure into the UI — and keeping the backend reproducible with Docker.',
    impact: [
      'End-to-end ownership: data model → API → UI',
      'AI-assisted product search via Spring AI',
      'Reproducible backend builds via Docker',
      'The bridge from mobile-only into full-stack work',
    ],
    stack: [
      'React',
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'REST APIs',
      'Spring AI',
      'Docker',
      'MySQL',
    ],
    visual: 'stack',
    links: [],
  },
  {
    id: 'crm-engineering',
    title: 'Enterprise CRM & Business Applications',
    subtitle: 'Ongoing professional work',
    kind: 'Domain / Practice Area',
    year: '2025 — Present',
    featured: false,
    description:
      'The category most of my professional work falls into: CRM-oriented systems where the hard part is the business logic, not the framework.',
    problem:
      'Business applications fail quietly — a discount applied in the wrong order, a record that syncs twice, a workflow that assumes a perfect network. Getting these right matters more than any particular stack.',
    built: [
      'Data-driven business workflows built on CRM platforms and mobile clients.',
      'API integration between mobile applications and CRM backends.',
      'Offline-capable data synchronization for field operations.',
      'Ongoing production support, change requests and performance work.',
    ],
    challenge:
      'Translating rules that live in spreadsheets and stakeholder conversations into logic that behaves predictably for every user, every time.',
    impact: [
      'Workflows running in day-to-day business operations',
      'CRM and mobile systems kept in sync',
    ],
    stack: ['Salesforce', 'React Native', 'REST APIs', 'Java', 'Spring Boot', 'SQL'],
    visual: 'flow',
    note: 'Client and implementation specifics are kept private.',
    links: [],
  },
];
