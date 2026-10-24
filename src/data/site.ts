export const site = {
  name: 'PROINN',
  phone: '+91 89513 59774',
  phoneHref: 'tel:+918951359774',
  email: 'contact@proinnconsultancy.com',
  address: 'Bengaluru, Karnataka 560093, India',
  // ponytail: replace with your Formspree endpoint before launch (see README)
  formAction: 'https://formspree.io/f/YOUR_FORM_ID',
};

export const nav = [
  ['Programs', '/programs'],
  ['About', '/about'],
  ['Testimonials', '/testimonials'],
  ['Contact', '/contact'],
];

export const clients = [
  ['21', 'Tata'], ['04', 'General Electric'], ['19', 'Siemens'], ['18', 'Schlumberger'],
  ['16', 'LM Wind Power'], ['09', 'General Motors'], ['12', 'Mahindra'], ['15', 'Ashok Leyland'],
  ['13', 'RPG Group'], ['14', 'Honeywell'], ['03', 'Shell'], ['11', 'Philips Healthcare'],
  ['10', 'Vestas'], ['20', 'SKF'], ['07', 'Saint-Gobain'], ['05', 'SABIC'],
].map(([n, alt]) => ({ src: `/images/client-${n}.png`, alt }));

export type Level = {
  id: string; name: string; tag: string;
  learn: string; after: string;
  triz: string; dfp: string; aip: string; hours: string;
  book: string; students: string;
};

export const levels: Level[] = [
  {
    id: 'beginner', name: 'Beginner', tag: 'Invent in a product',
    learn: 'TRIZ level 1 and DFP level 1. How to model a problem as a contradiction, break psychological inertia, and find several competing solutions for a physical or digital product. Then how to strengthen a patent and circumvent one.',
    after: 'You file your first disclosures with confidence. You can take any product problem and return with three to five patentable concepts.',
    triz: '3 days in person', dfp: '2 days online', aip: '24 hours over 6 weeks', hours: '64',
    book: 'State-of-the-Art TRIZ: Theory of Inventive Problem Solving', students: '2',
  },
  {
    id: 'advanced', name: 'Advanced', tag: 'Invent in a process',
    learn: 'TRIZ level 2 and DFP level 2. Substance-field analysis, how to disrupt a manufacturing process, an algorithm or a service, and how to develop hybrid products. Lean and agile improve a process; this is how to invent one.',
    after: 'You lead process innovation, not just process improvement. Teams bring you problems and you return with win-win solutions on a deadline.',
    triz: '5 days in person', dfp: '2 days in person', aip: '32 hours over 8 weeks', hours: '88',
    book: 'Training material, TRIZ level 2', students: '3',
  },
  {
    id: 'expert', name: 'Expert', tag: 'Invent at system level',
    learn: 'TRIZ level 3 and DFP level 3. ARIZ, the algorithm of inventive problem solving, trends of engineering system evolution, S-curve analysis and how to carry a solution from your domain to one that is nothing like it.',
    after: 'You set innovation and IP strategy for a business. You predict the next step of a system and build a patent portfolio around it.',
    triz: '10 days, two blocks of 5, six weeks apart', dfp: '2 days in person', aip: '32 hours over 8 weeks', hours: '128',
    book: 'Training material, TRIZ level 3', students: '4',
  },
];

// Open workshop dates. Leave empty when nothing is scheduled.
export const events: [string, string, string][] = [
  // ['TRIZ level 1', '14–16 Oct 2024', 'Bengaluru, in person'],
];

export const faq: [string, string][] = [
  ['Who certifies these programs?', 'TRIZ levels 1, 2 and 3 are certified by MATRIZ, the International TRIZ Association. DFP levels 1, 2 and 3 are certified by DFP-Institute. The-AIP is certified by Proinn.'],
  ['Does the certificate expire?', 'No. Certifications from MATRIZ, DFP-Institute and Proinn are valid for life.'],
  ['Can I invent in software?', 'Yes. Hundreds of software professionals have taken TRIZ level 1 and come back with inventions their business was looking for. Software performs functions, and we teach new ways to accomplish those functions.'],
  ['Why should I pay for this myself?', 'Most Indian professionals still expect their employer to take care of their learning. To lead in this century you need two skills: inventive thinking and the ability to drive change without authority. Companies now hire problem solvers who bring novelty. This is for people who want to grow faster, with predictability.'],
  ['Why now?', 'India is where growth is bound to happen over the next 15 years, in mobility, semiconductors, software and more. The people who can invent will lead that growth. Read the testimonials and decide.'],
  ['Are there success stories?', 'Yes. See the testimonials page. Several of the people quoted there have been recognised as prolific inventors by their companies, and others have been promoted.'],
  ['Why learn from Proinn?', 'Tito Kishan Vemuri is the only Indian with a MATRIZ accreditation, licence number 063/02-2024/1. With his mentor Dr Sergei Ikovenko he has led TRIZ deployment in India since 2015.'],
];

export type Quote = { name: string; role: string; org: string; note?: string; img: string; href: string; text: string };

export const featured: Quote = {
  name: 'Dr Saravanan N', role: 'Principal Engineer', org: 'Mahindra & Mahindra',
  note: '16 patents granted, 60 filed. Recognised as a prolific inventor by Mahindra & Mahindra. TRIZ level 3.',
  img: '/images/t-Dr.-Saravanan.jpg', href: 'https://www.linkedin.com/in/dr-saravanan-n-238a1430/',
  text: 'Based on the learning from the workshops and TRIZ methodologies, I am able to develop multiple inventions. The structured innovation learning imparted by him empowers everyone to invent.',
};

export const corporate = [
  { img: '/images/testi-mahindra.png', who: 'Dr Shankar Venugopal, Vice President, Mahindra & Mahindra', href: 'https://www.linkedin.com/in/shankarvenugopal/', sum: 'Four years of TRIZ-based innovation in farm product development. A strong patent portfolio for smart farm implements. Three senior engineers recognised as prolific inventors.' },
  { img: '/images/testi-rr.jpg', who: 'Jayaram Balasubrahmanyan, VP Engineering, Rolls-Royce India', sum: 'Structured Jugaad applied to real-time gas turbine engine problems. Multiple competing novel design solutions in a time-bound manner.' },
  { img: '/images/testi-tvs.jpg', who: 'Dr V Kovaichelvan, TVS Motor Company', href: 'https://in.linkedin.com/in/dr-v-kovaichelvan-465a0a12', sum: 'TRIZ training and mentoring for TVS Motor engineering teams.' },
];

export const individual: Quote[] = [
  featured,
  { name: 'Ishant Jain', role: 'Head R&D and Railways', org: 'Raychem RPG', note: '40+ patent applications filed, many granted. TRIZ level 2.', img: '/images/t-ishant.jpg', href: 'https://www.linkedin.com/in/ishantj/', text: 'I could develop multiple inventive solutions and filed multiple patent applications. The structured innovation learning imparted by him empowers everyone to invent.' },
  { name: 'S S Narayan', role: 'Engineer', org: '', img: '/images/Narayan.jpg', href: 'https://in.linkedin.com/in/narayan-ss-705ba722', text: 'The course enhanced my problem definition, formulation and solutioning skills. We filed a patent application and there are two more in the pipeline.' },
  { name: 'Mihir Soundalgekar', role: 'Director', org: 'Marathwada Autocompo', note: 'TRIZ level 2.', img: '/images/t-Mihir.jpg', href: 'https://www.linkedin.com/in/mihir-soundalgekar-5bb0003b/', text: 'Technology development is not a miracle but a systematic result. My team developed new inventions that are in the pipeline under his mentoring and coaching.' },
  { name: 'Ganesh Suryanarayanan', role: 'Co-founder and CTO', org: 'Myelin Foundry', img: '/images/t-ganesh.jpg', href: 'https://www.linkedin.com/in/ganeshsuryanarayanan/', text: 'A structured, live, problem-centric approach to innovation. We kept applying the concepts as we learnt them.' },
  { name: 'Saravana Rajan S', role: 'Deputy Manager', org: 'TVS Motor Company', img: '/images/t-Saravan-ranjan.jpg', href: 'https://www.linkedin.com/in/saravana-rajan-s-1871a478/', text: 'Our thought process has completely changed. Our team is now able to increase quality IP for our function many times over compared to the last several years.' },
];

export const linkedin: Quote[] = [
  { name: 'Jairaj (Jay) Ramachandran', role: 'Former Chief Consulting Engineer', org: 'GE Energy', img: '/images/Jai.jpg', href: 'https://www.linkedin.com/in/jairaj-jay-ramachandran-64000266/', text: 'Kishan was the IP leader for GE Energy’s India Engineering Operation. He conducted innovation workouts for 750+ engineers, groomed one gold patent holder (25 patents) and about 20 silver patent holders (10 patents each), and facilitated the filing of 850+ US patents in roughly six years. A monumental task.' },
  { name: 'Ram Sitaraman', role: 'IP Head', org: 'Tata Technologies', note: 'TRIZ level 2.', img: '/images/t-ram-sitaraman.jpg', href: 'https://www.linkedin.com/in/ram-sitaraman-0420411/', text: 'It forever changed the way I looked at innovation and how to go about creating IP. Break the problem down to its functional essence, then find alternatives that bypass existing IP and create your own.' },
  { name: 'Krishna Rao', role: 'Manager, Intellectual Property', org: 'Schaeffler Group', note: 'TRIZ levels 1 and 2.', img: '/images/t-Krishna-rao.jpg', href: 'https://www.linkedin.com/in/krishnacgrao/', text: 'As a patent professional, TRIZ let me shift from reactive to proactive solution provider, with the added benefit of a couple of patent applications in my name.' },
  { name: 'Gopalakrishnan Ramakrishnan', role: 'Regional IP Manager, India', org: 'Valeo', img: '/images/t-Gopal.jpg', href: 'https://www.linkedin.com/in/gopalakrishnan-ramakrishnan-76062a14/', text: 'For a beginner TRIZ can be a fairly complex subject. It was made easy and interesting by Kishan’s experience and pedagogy.' },
  { name: 'Debasish Mishra', role: 'Technology Leader, Non-destructive Evaluation', org: 'GE Global Research', img: '/images/t-Debasish.jpg', href: 'https://www.linkedin.com/in/debasish-mishra-27113017/', text: 'He defined the goal clearly and kept the organisation informed at every stage. The team delivered several concepts as potential solutions to the problems they were working on.' },
  { name: 'Kanakavel Saminathan', role: 'Global Mechanics Competency Leader', org: 'Saint-Gobain Research India', note: 'TRIZ level 1.', img: '/images/t-kanakavel.jpg', href: 'https://www.linkedin.com/in/kanakavel-saminathan-47924222/', text: 'I came out with outstanding design concepts using the TRIZ framework. They were widely accepted and appreciated in my organisation.' },
  { name: 'Prasanna Bhagwan', role: 'Director', org: 'Leidenfrost Innovations', note: 'TRIZ level 2.', img: '/images/t-Prasanna.jpg', href: 'https://www.linkedin.com/in/prasanna-bhagwan/', text: 'I waited seven years for a good TRIZ trainer. I finally can say I had the best TRIZ teacher ever.' },
  { name: 'Ashutosh Prachand', role: 'Engineer', org: '', img: '/images/Ashutosh.jpg', href: 'https://www.linkedin.com/in/ashutoshprachand/', text: 'From a technology enthusiast to an inventor. I will see you around till level 5 and beyond.' },
  { name: 'Jishnu Saurabh Iyengar', role: 'Founder', org: 'B2B HealthTech startup', img: '/images/1665170310584.png', href: 'https://www.linkedin.com/in/jishnusaurabh/', text: 'After my TRIZ certification I moved into a leading design and technology firm, then founded my own startup.' },
  { name: 'Jeff Heslop', role: 'GE Aviation', org: '', img: '/images/1595857753467.png', href: 'https://www.linkedin.com/in/jeffheslop/', text: 'He trained and coached over 100 Green and Black Belts for one of our key customers and helped produce large quantifiable savings. Not many technical experts are also accomplished with executives. Tito is one.' },
  { name: 'Hasri Hasan', role: 'AirAsia', org: '', img: '/images/1656560960383.png', href: 'https://www.linkedin.com/in/hasri-hasan-01b86b23/', text: 'Instrumental in setting up the Cost Out and Avoidance program at AirAsia with GE Aviation. He designed the governance and structure that made it sustainable.' },
];
