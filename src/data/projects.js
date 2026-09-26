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
    id: 'devpilot',
    title: 'DevPilot',
    subtitle: 'AI-Powered Codebase Assistant (RAG)',
    kind: 'Full-Stack AI Application',
    year: 'Personal project',
    featured: true,
    description:
      'A Retrieval-Augmented Generation application built with Spring Boot and Next.js that lets developers chat with their own public and private GitHub repositories.',
    problem:
      'Understanding an unfamiliar codebase usually means grepping through files and reading code out of context. I wanted an assistant that actually indexes a repository\'s real content and answers questions grounded in that code, with citations back to the source, instead of a generic chatbot bolted onto GitHub.',
    built: [
      'GitHub OAuth2 authentication with Spring Security, using HttpOnly session cookies and encrypted access-token storage.',
      'An asynchronous indexing pipeline that filters, chunks and embeds repository files into PostgreSQL (pgvector) using OpenAI embeddings, with live progress tracking.',
      'A Spring AI chat service with repository-scoped vector search, streaming responses over Server-Sent Events (SSE) with file-level citations.',
      'Next.js frontend with Tailwind CSS, shadcn/ui and TanStack Query for repo browsing, indexing status and the chat interface.',
    ],
    challenge:
      'Filtering and chunking arbitrary repositories at scale — skipping noise like node_modules and lockfiles, splitting code into embedding-sized chunks without losing context — while keeping chat responses grounded with accurate file-level citations instead of hallucinated answers.',
    impact: [
      'Chat interface over any indexed GitHub repo, public or private',
      'Live indexing progress with streamed, cited AI answers',
      'Secure GitHub OAuth2 login with encrypted token storage',
      'End-to-end RAG pipeline: GitHub API → pgvector → Spring AI → SSE',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring AI',
      'Spring Data JPA',
      'PostgreSQL',
      'pgvector',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'OpenAI API',
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
