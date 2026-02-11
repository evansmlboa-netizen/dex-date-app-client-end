import profile1 from '@/assets/profile-1.jpg';
import profile2 from '@/assets/profile-2.jpg';
import profile3 from '@/assets/profile-3.jpg';
import profile4 from '@/assets/profile-4.jpg';
import profile5 from '@/assets/profile-5.jpg';
import profile6 from '@/assets/profile-6.jpg';

export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  bio: string;
  image: string;
  gallery: string[];
  tags: string[];
  verified: boolean;
  about: string;
}

export const profiles: Profile[] = [
  {
    id: '1',
    name: 'Amara',
    age: 23,
    city: 'Nairobi',
    bio: 'Creative soul who loves sunsets and good conversation ✨',
    image: profile1,
    gallery: [profile1, profile3, profile5],
    tags: ['Nairobi', '23', 'Verified'],
    verified: true,
    about: 'I\'m a photographer and graphic designer based in Nairobi. I love exploring the city, trying new coffee shops, and meeting genuine people. Looking for someone who values honesty and good vibes.',
  },
  {
    id: '2',
    name: 'Zara',
    age: 25,
    city: 'Lagos',
    bio: 'Fashion designer by day, foodie by night 🍕',
    image: profile2,
    gallery: [profile2, profile4, profile6],
    tags: ['Lagos', '25', 'Verified'],
    verified: true,
    about: 'Fashion is my passion — I run a small boutique and love creating unique pieces. When I\'m not designing, you\'ll find me trying every restaurant in Lagos. Let\'s grab dinner sometime!',
  },
  {
    id: '3',
    name: 'Lina',
    age: 22,
    city: 'Dar es Salaam',
    bio: 'Music lover & beach girl 🌊',
    image: profile3,
    gallery: [profile3, profile1, profile5],
    tags: ['Dar es Salaam', '22'],
    verified: false,
    about: 'Life\'s better with a soundtrack. I play guitar and sing whenever I can. On weekends, you\'ll find me at the beach or at a live music venue. Looking for someone who loves adventure.',
  },
  {
    id: '4',
    name: 'Keza',
    age: 24,
    city: 'Kigali',
    bio: 'Tech enthusiast building the future 💻',
    image: profile4,
    gallery: [profile4, profile2, profile6],
    tags: ['Kigali', '24', 'Verified'],
    verified: true,
    about: 'Software developer working on exciting startups. I believe in building things that matter. Love hiking, board games, and deep conversations over coffee.',
  },
  {
    id: '5',
    name: 'Nia',
    age: 26,
    city: 'Accra',
    bio: 'Teacher with a love for travel and storytelling 📚',
    image: profile5,
    gallery: [profile5, profile3, profile1],
    tags: ['Accra', '26', 'Verified'],
    verified: true,
    about: 'I teach literature and I\'m passionate about education. Traveled to 8 countries so far and counting. Looking for someone kind, curious, and ready for new experiences.',
  },
  {
    id: '6',
    name: 'Farah',
    age: 23,
    city: 'Mombasa',
    bio: 'Bookworm & coffee addict ☕',
    image: profile6,
    gallery: [profile6, profile4, profile2],
    tags: ['Mombasa', '23'],
    verified: false,
    about: 'Give me a good book and a cup of coffee and I\'m happy. I work in marketing and love creative writing on the side. Looking for genuine connections and meaningful conversations.',
  },
];

export interface Request {
  id: string;
  profileId: string;
  name: string;
  city: string;
  image: string;
  status: 'pending' | 'approved' | 'rejected';
  telegramHandle?: string;
  submittedAt: string;
}

export const initialRequests: Request[] = [
  {
    id: 'r1',
    profileId: '5',
    name: 'Nia',
    city: 'Accra',
    image: profile5,
    status: 'approved',
    telegramHandle: '@nia_accra',
    submittedAt: '2 hours ago',
  },
  {
    id: 'r2',
    profileId: '2',
    name: 'Zara',
    city: 'Lagos',
    image: profile2,
    status: 'pending',
    submittedAt: '5 hours ago',
  },
  {
    id: 'r3',
    profileId: '3',
    name: 'Lina',
    city: 'Dar es Salaam',
    image: profile3,
    status: 'rejected',
    submittedAt: '1 day ago',
  },
];
