// Mock data for Kidney Connect MVP

export const patients = [
  {
    id: 1,
    name: "Maria Garcia",
    age: 34,
    avatar: "https://i.pravatar.cc/150?img=5",
    diagnosis: "Chronic Kidney Disease - Stage 4",
    story:
      "I was diagnosed with CKD three years ago. At first, I felt completely alone and overwhelmed. Dialysis sessions became my new routine — three times a week, four hours each. But through connecting with others who understand this journey, I found the strength to keep fighting. I'm now on the transplant waiting list and hopeful for a new beginning.",
    date: "2025-02-15",
    likes: 128,
    comments: 23,
  },
  {
    id: 2,
    name: "Pedro Alvarez",
    age: 61,
    avatar: "https://i.pravatar.cc/150?img=12",
    diagnosis: "Chronic Kidney Disease - Stage 3",
    story:
      "I'm a data analyst in Barcelona, married with two kids and a grandchild. When I got diagnosed, I was devastated. I didn't want to be hooked up to a machine. My family convinced me to start treatment, but I also faced workplace discrimination — my boss wanted to let me go because of my condition. Through ADER Foundation, I found legal support and a community that truly cares.",
    date: "2025-01-20",
    likes: 95,
    comments: 41,
  },
  {
    id: 3,
    name: "Ana Torres",
    age: 28,
    avatar: "https://i.pravatar.cc/150?img=9",
    diagnosis: "Polycystic Kidney Disease",
    story:
      "Being diagnosed at 25 felt like the world stopped. I was a fitness instructor — my body was my tool. Now I navigate between doctor visits and treatment sessions. What keeps me going is sharing my story with young people. If my experience can convince even one person to become an organ donor, it's worth every difficult moment.",
    date: "2025-03-01",
    likes: 210,
    comments: 56,
  },
  {
    id: 4,
    name: "Carlos Mendez",
    age: 45,
    avatar: "https://i.pravatar.cc/150?img=15",
    diagnosis: "End-Stage Renal Disease",
    story:
      "Five years on dialysis taught me patience I never knew I had. I've watched friends receive transplants while I waited. Last month, I got the call — a compatible donor was found. I'm writing this from my recovery bed, grateful beyond words. Organ donation saves lives. Mine is proof.",
    date: "2024-12-10",
    likes: 342,
    comments: 89,
  },
];

export const fundraisers = [
  {
    id: 1,
    title: "Help Maria Get Her Transplant",
    patient: "Maria Garcia",
    avatar: "https://i.pravatar.cc/150?img=5",
    goal: 25000,
    raised: 18750,
    donors: 142,
    description:
      "Maria needs financial support to cover her kidney transplant surgery and post-operative care. Every contribution brings her closer to a new life.",
    daysLeft: 23,
  },
  {
    id: 2,
    title: "Pedro's Treatment & Legal Fund",
    patient: "Pedro Alvarez",
    avatar: "https://i.pravatar.cc/150?img=12",
    goal: 15000,
    raised: 9200,
    donors: 78,
    description:
      "Pedro is fighting both his kidney disease and workplace discrimination. This fund supports his medical treatment and legal proceedings to protect his employment rights.",
    daysLeft: 45,
  },
  {
    id: 3,
    title: "Dialysis Equipment for Local Clinic",
    patient: "Barcelona Community Hospital",
    avatar: "https://i.pravatar.cc/150?img=60",
    goal: 50000,
    raised: 31000,
    donors: 256,
    description:
      "Our local clinic needs new dialysis machines to serve the growing number of kidney disease patients in the community. Help us upgrade our facilities.",
    daysLeft: 60,
  },
  {
    id: 4,
    title: "Ana's Recovery Journey",
    patient: "Ana Torres",
    avatar: "https://i.pravatar.cc/150?img=9",
    goal: 10000,
    raised: 7800,
    donors: 93,
    description:
      "After her diagnosis, Ana needs support for ongoing treatment and to continue her awareness campaigns in schools. Help her heal while she helps others.",
    daysLeft: 15,
  },
];

export const articles = [
  {
    id: 1,
    title: "Understanding Chronic Kidney Disease",
    category: "Education",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop",
    summary:
      "Learn about the stages of CKD, early warning signs, and why early detection is crucial for better outcomes.",
    content:
      "Chronic Kidney Disease (CKD) is a condition where the kidneys gradually lose their ability to filter waste and excess fluids from the blood. It progresses through five stages, from mild damage (Stage 1) to kidney failure (Stage 5). Early detection through regular blood and urine tests can slow progression significantly.",
    author: "Dr. Elena Ruiz",
    date: "2025-02-28",
  },
  {
    id: 2,
    title: "How Organ Donation Works: A Complete Guide",
    category: "Organ Donation",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop",
    summary:
      "Everything you need to know about becoming an organ donor — the process, myths vs facts, and how to register.",
    content:
      "Organ donation is the process of surgically removing an organ or tissue from one person (the donor) to place it into another person (the recipient). A single donor can save up to 8 lives. Both living and deceased donations are possible for kidneys.",
    author: "Dr. Marc Fernandez",
    date: "2025-01-15",
  },
  {
    id: 3,
    title: "Living with Dialysis: Tips for Daily Life",
    category: "Patient Support",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=250&fit=crop",
    summary:
      "Practical advice for managing your daily routine, diet, and mental health while on dialysis treatment.",
    content:
      "Dialysis can feel overwhelming at first, but many patients learn to adapt and maintain a fulfilling life. Key tips include maintaining a kidney-friendly diet, staying active within your limits, attending all scheduled sessions, and connecting with support groups.",
    author: "Nurse Sofia Bernal",
    date: "2025-03-05",
  },
  {
    id: 4,
    title: "Kidney Health for Young People",
    category: "Education",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=250&fit=crop",
    summary:
      "Why kidney health matters even when you're young, and simple habits to protect your kidneys for life.",
    content:
      "Many young people think kidney disease only affects older adults, but that's a myth. Staying hydrated, limiting processed foods, avoiding excessive pain medication use, and getting regular checkups are simple steps to protect your kidneys.",
    author: "Dr. Barbora Dobrovolska",
    date: "2025-02-10",
  },
  {
    id: 5,
    title: "The Emotional Journey of Organ Donation",
    category: "Stories",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    summary:
      "Real stories from donors and recipients about the emotional impact of giving and receiving the gift of life.",
    content:
      "Behind every transplant is a deeply human story. Donors describe a profound sense of purpose, while recipients speak of gratitude that words can't capture. These stories remind us that organ donation isn't just a medical procedure — it's an act of love.",
    author: "Elena Costa",
    date: "2025-01-30",
  },
];

export const userProfile = {
  name: "Diego Ramirez",
  age: 21,
  email: "diego.ramirez@email.com",
  role: "Student / Potential Donor",
  avatar: "https://i.pravatar.cc/150?img=33",
  joinDate: "2025-01-10",
  donorStatus: "Registered",
  bio: "College student passionate about raising awareness for organ donation. I believe every young person should understand the importance of giving the gift of life.",
  stats: {
    storiesRead: 24,
    donations: 3,
    totalDonated: 150,
    eventsAttended: 2,
  },
  badges: [
    { name: "Early Adopter", description: "Joined in the first month" },
    { name: "Story Reader", description: "Read 20+ patient stories" },
    { name: "Donor Hero", description: "Made 3+ donations" },
  ],
};

export const stats = {
  patientsHelped: 1247,
  totalDonations: 89500,
  organDonorsRegistered: 3421,
  storiesShared: 456,
};
