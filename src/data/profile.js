export const profile = {
  name: 'Sarthak Verma',
  role: 'Software Engineer',
  tagline: 'React Native • React • Java • Spring Boot',
  statement:
    'Building reliable mobile and full-stack applications for real-world business workflows.',
  experienceYears: '1.8+',
  location: 'Chandigarh, Punjab, India',
  email: 'sarthak21verma@gmail.com',
  // Kept out of the UI on purpose. Add it to `contactMethods` below if you ever want it public.
  phone: '+91 9695360514',
  resume: '/Sarthak_Verma_Resume.pdf',
  currentRole: {
    title: 'Software Engineer',
    company: 'DealerMatix Technologies',
  },
};

/**
 * Contact form delivery.
 *
 * The form only renders once `accessKey` is filled in — an unconfigured form on a
 * live portfolio is worse than no form at all.
 *
 * To switch it on:
 *   1. Go to https://web3forms.com, enter the inbox you want messages delivered to,
 *      and they email you an access key. No account or password needed.
 *   2. Paste the key below and redeploy.
 *
 * The key is safe to keep in client-side code and commit — it only allows sending
 * to the address you verified, nothing else.
 */
export const contactForm = {
  accessKey: 'b2b54aae-f9b5-4a10-af76-20c34c1ecab9',
  endpoint: 'https://api.web3forms.com/submit',
};

export const socials = [
  {
    label: 'LinkedIn',
    handle: '/in/sarthakverma01',
    href: 'https://www.linkedin.com/in/sarthakverma01/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    handle: '@sarthak1910',
    href: 'https://github.com/sarthak1910',
    icon: 'github',
  },
  {
    label: 'LeetCode',
    handle: '@sarthak21verma',
    href: 'https://leetcode.com/u/sarthak21verma/',
    icon: 'code',
  },
  {
    label: 'Code360',
    handle: '@sarthakverma',
    href: 'https://www.naukri.com/code360/profile/sarthakverma',
    icon: 'terminal',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recommendations', href: '#recommendations' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  intro: [
    "I'm a Software Engineer with 1.8+ years of experience building mobile and full-stack applications. I started my professional journey in React Native and enterprise mobile development, working with Salesforce and offline-first architectures.",
    'Over time I expanded into React.js and Java Spring Boot, which let me work across the complete application stack — from the screen a sales rep taps in the field to the API and database behind it.',
    'Most of my day-to-day work sits close to real business problems: pricing rules, order workflows, data that has to stay correct when the network drops. That context shapes how I build — I care more about software that holds up in production than software that demos well.',
  ],
  enjoys: [
    'Scalable applications',
    'Clean user experiences',
    'Reliable APIs',
    'Business workflows',
    'Mobile applications',
    'Full-stack systems',
  ],
  quickFacts: [
    { label: 'Currently', value: 'Software Engineer @ DealerMatix Technologies' },
    { label: 'Based in', value: 'Chandigarh, Punjab, India' },
    { label: 'Focus', value: 'React Native · React · Java · Spring Boot' },
    { label: 'Education', value: 'B.E. Computer Science, SLIET (CGPA 8.9/10)' },
  ],
};
