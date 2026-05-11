import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Megaphone,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const chairmanAvatar = new URL('../../image/chairman.jpeg', import.meta.url).href;
const footballGalleryImage = new URL('../../image/team emp.jpeg', import.meta.url).href;
const onuEmmaAvatar = new URL('../../image/onu emma.jpeg', import.meta.url).href;
const nellyAvatar = new URL('../../image/nelly.jpeg', import.meta.url).href;
const dominicAvatar = new URL('../../image/dominic.jpeg', import.meta.url).href;
const julietGalleryImage = new URL('../../image/juliet.jpeg', import.meta.url).href;
const vectaGalleryImage = new URL('../../image/Vecta.jpeg', import.meta.url).href;

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Members', href: '#members' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '150+', label: 'Alumni Members' },
  { value: '2015', label: 'Graduation Year' },
  { value: '9+', label: 'Years Together' },
  { value: '5+', label: 'Reunion Events' },
];

export const values = [
  { title: 'Excellence', icon: GraduationCap, text: 'Committed to academic and professional growth.' },
  { title: 'Unity', icon: HeartHandshake, text: 'Strengthening bonds among alumni members.' },
  { title: 'Integrity', icon: ShieldCheck, text: 'Upholding ethical standards in all endeavors.' },
  { title: 'Service', icon: Handshake, text: 'Contributing positively to society.' },
  { title: 'Innovation', icon: Lightbulb, text: 'Embracing modern approaches in education.' },
  { title: 'Growth', icon: Sparkles, text: 'Supporting personal and professional development.' },
];

export const services = [
  {
    title: 'Alumni Networking',
    icon: Network,
    text: 'A living network for mentorship, professional opportunities, and lifelong connection.',
  },
  {
    title: 'Events & Reunions',
    icon: CalendarDays,
    text: 'Periodic reunions, seminars, announcements, and moments that keep the EMP 2015 set active.',
  },
  {
    title: 'Member Visibility',
    icon: Users,
    text: 'Profile features for alumni members, current roles, locations, and contact pathways.',
  },
  {
    title: 'Gallery Contributions',
    icon: Camera,
    text: 'A shared archive for matriculation, class activities, final year moments, graduation, and reunions.',
  },
  {
    title: 'Career Opportunities',
    icon: BriefcaseBusiness,
    text: 'A channel for sharing job opportunities and professional updates across the alumni network.',
  },
  {
    title: 'Community Announcements',
    icon: Megaphone,
    text: 'Important news, milestones, achievements, and updates from the EMP 2015 family.',
  },
];

export const projects = [
  {
    title: 'Matriculation Archive',
    category: 'matriculation',
    text: 'The beginning of our academic journey and official welcome into the university community.',
    stack: ['Archive', 'Campus', '2011'],
    gradient: 'from-cyan-300/30 via-blue-500/20 to-slate-900',
  },
  {
    title: 'Lectures & Class Activities',
    category: 'classes',
    text: 'Classroom discussions, collaborative learning, study sessions, and academic milestones.',
    stack: ['Learning', 'Research', 'Policy'],
    gradient: 'from-gold/35 via-emerald-400/20 to-slate-900',
  },
  {
    title: 'Final Year Moments',
    category: 'finalyear',
    text: 'Projects, seminars, presentations, and the closing chapter of the campus experience.',
    stack: ['Seminars', 'Projects', 'Final Year'],
    gradient: 'from-violet-300/30 via-sky-500/20 to-slate-900',
  },
  {
    title: 'Graduation Day',
    category: 'graduation',
    text: 'Convocation memories, family celebrations, and the move into professional life.',
    stack: ['Convocation', 'Celebration', '2015'],
    gradient: 'from-amber-300/35 via-rose-400/20 to-slate-900',
  },
];

export const galleryItems = [
  { id: 1, title: 'Matriculation Football', category: 'matriculation', image: footballGalleryImage },
  { id: 2, title: 'Matriculation Ceremony', category: 'matriculation' },
  { id: 3, title: 'Vecta', category: 'matriculation', image: vectaGalleryImage },
  { id: 4, title: 'Juliet', category: 'matriculation', image: julietGalleryImage },
  { id: 5, title: 'Class Lecture', category: 'classes' },
  { id: 6, title: 'Group Work Session', category: 'classes' },
  { id: 7, title: 'Final Year Project', category: 'finalyear' },
  { id: 8, title: 'Final Year Seminar', category: 'finalyear' },
  { id: 9, title: 'Graduation Ceremony', category: 'graduation' },
  { id: 10, title: 'Celebration Day', category: 'graduation' },
];

export const members = [
  {
    name: 'Onu Johnbosco',
    position: 'Chairman',
    role: 'Entrepreneur',
    location: 'Abuja, Nigeria',
    phone: '+233262114538',
    avatar: chairmanAvatar,
    facebook: 'https://www.facebook.com/JohnboscoMicheal',
    socialHandle: 'Johnbosco Micheal',
  },
  { name: 'Amara Dubem', position: 'Vice President', role: 'Policy Consultant', location: 'USA, Nigeria', phone: '234' },
  { name: 'Dominic Chigbo', position: 'Secretary', role: 'Realtor', location: 'Anambra, Nigeria', phone: '234', avatar: dominicAvatar },
  { name: 'Dominic Chigboo', position: 'Treasurer', role: 'Educational Researcher', location: 'Port Harcourt, Nigeria', phone: '234' },
  { name: 'Onu Emmanuel', position: 'Social Director', role: 'Techprenuer', location: 'Lagos, Nigeria', phone: '2347067797360', avatar: onuEmmaAvatar },
  { name: 'Eluma Chinelo', position: 'Public Relations Officer', role: 'Chef', location: 'Abuja, Nigeria', phone: '2348065454940', avatar: nellyAvatar },
  { name: 'Nwaneka', position: 'Member', role: 'NGO Director', location: 'Kano, Nigeria', phone: '234', specialty: 'Education Policy' },
  { name: 'Ekowin Apochi', position: 'Member', role: 'Education Consultant', location: 'Anambra, Nigeria', phone: '234', specialty: 'School Management' },
];

export const testimonials = [
  {
    quote:
      'Being part of the EMP 2015 Set has been one of the most transformative experiences of my life. The bonds we formed on campus continue to strengthen us in our professional careers.',
    name: 'Onuh Johnbosco',
    role: 'Class President',
  },
  {
    quote:
      "The EMP 2015 set represents excellence, unity, and the pursuit of knowledge. I'm proud to be part of this distinguished group of educational professionals.",
    name: 'Ndupu Ozioma',
    role: 'Vice President',
  },
  {
    quote:
      'Our EMP family has remained my network for professional opportunities, mentorship, and personal growth long after we graduated. This connection is invaluable.',
    name: 'Nwaneka Ozioma',
    role: 'Secretary',
  },
];

export const faqs = [
  {
    q: 'How do I join the EMP 2015 alumni association?',
    a: "If you're a member of the 2015 EMP set, you're already part of our community. Contact us via email or WhatsApp to be added to official updates.",
  },
  {
    q: 'How often do we have reunions?',
    a: 'We organize reunions and get-togethers periodically. Follow the WhatsApp group and social channels for announcements.',
  },
  {
    q: 'Can I update my profile information?',
    a: 'Yes. Contact the executive members with your updated name, current role, location, and contact details.',
  },
  {
    q: 'How can I contribute to the website?',
    a: 'You can share photos, news, or information about yourself or fellow alumni through email or the contact form.',
  },
];

export const contactLinks = [
  { label: 'emmybasil@gmail.com', href: 'mailto:emmybasil@gmail.com', icon: MessageCircle },
  { label: '+234 706 779 7360', href: 'https://wa.me/2347067797360', icon: MessageCircle },
  { label: 'Umunze Branch, Nnamdi Azikiwe University, Awka', href: '#contact', icon: MapPin },
];

export const departmentTopics = [
  'Educational Administration and Management',
  'Educational Policy Development and Implementation',
  'School Leadership and Governance',
  'Educational Planning and Resource Management',
  'Research Methods in Education',
  'Curriculum Development and Evaluation',
];

export const alumniObjectives = [
  'Connect alumni for lifelong relationships',
  'Facilitate professional networking',
  'Support educational programs',
  'Promote excellence and innovation',
];

export const socialLinks = [
  { label: 'Facebook', href: 'https://web.facebook.com/groups/404344863043079/about' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'WhatsApp', href: 'https://wa.me/2347067797360' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'X', href: 'https://twitter.com' },
];

export const IconBook = BookOpen;
export const IconAward = Award;
