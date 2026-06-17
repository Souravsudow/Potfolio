export type AchievementCategory = 'certification';

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  expiry?: string;
  category: AchievementCategory;
  description: string;
  icon: string;
  logoSrc?: string;
  certImageSrc?: string;
  credentialId?: string;
  link?: string;
  linkLabel?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'gemini-google-workspace',
    title: 'Gemini for Google Workspace',
    issuer: 'Google',
    date: 'Feb 2025',
    category: 'certification',
    description: 'Mastered integrating Gemini AI capabilities into Google Workspace to enhance productivity and collaboration.',
    icon: '🧠',
    logoSrc: '/images/logo/Google.png',
    certImageSrc: '/images/certificates/Gemini%20for%20Google%20Workspace.jpeg',
    credentialId: '7910699',
  },
  {
    id: 'google-play-store-listing',
    title: 'Google Play Store Listing Certificate',
    issuer: 'Google',
    date: 'Jan 2025',
    expiry: 'Jan 2028',
    category: 'certification',
    description: 'Certified expertise in optimizing app listings on Google Play Store for maximum visibility and conversions.',
    icon: '📱',
    logoSrc: '/images/logo/Google.png',
    certImageSrc: '/images/certificates/%20Google%20Play%20store%20Listing%20Certificate.jpeg',
    credentialId: '129735032',
  },
  {
    id: 'ibm-certified-data-engineer',
    title: 'IBM Certified Data Engineer – Big Data',
    issuer: 'IBM',
    date: 'Apr 2025',
    category: 'certification',
    description: 'Validated expertise in designing, building, and managing big data solutions using IBM data technologies.',
    icon: '💾',
    logoSrc: '/images/logo/IBM.png',
    certImageSrc: '/images/certificates/IBM%20Certified%20Data%20Engineer%20%E2%80%93%20Big%20Data.jpeg',
  },
  {
    id: 'opswat-critical-infrastructure',
    title: 'Introduction to Critical Infrastructure Protection',
    issuer: 'OPSWAT Academy',
    date: 'Jan 2025',
    category: 'certification',
    description: 'Gained foundational knowledge in securing critical infrastructure systems against cyber threats.',
    icon: '🔒',
    logoSrc: '/images/logo/OPSWAT%20Academy.jpg',
    certImageSrc: '/images/certificates/Introduction%20to%20Critical%20Infrastructure%20Protection.jpeg',
    credentialId: '9t58BsJuEQ',
  },
  {
    id: 'unesco-seek',
    title: 'SEEK: Self-directed Emotional Learning for Empathy and Kindness',
    issuer: 'UNESCO MGIEP',
    date: 'Apr 2024',
    category: 'certification',
    description: 'Developed social-emotional learning skills focusing on empathy, kindness, and self-directed emotional growth.',
    icon: '❤️',
    logoSrc: '/images/logo/UNESCO%20MGIEP.png',
    certImageSrc: '/images/certificates/SEEK%20-%20Self-directed%20Emotional%20Learning%20for%20Empathy%20and%20Kindness.jpeg',
    credentialId: '7524405e-0878-49f8-b245-5172595de7ae',
  },
  {
    id: 'coding-ninjas-campus-hero',
    title: 'Campus Hero Webinar',
    issuer: 'Coding Ninjas',
    date: 'May 2024',
    category: 'certification',
    description: 'Participated in an exclusive webinar on career growth strategies and industry insights for aspiring developers.',
    icon: '🎓',
    logoSrc: '/images/logo/Coding%20Ninjas.jpg',
    certImageSrc: '/images/certificates/Campus%20Hero%20Webinar.jpeg',
    credentialId: '389126',
  },
];
