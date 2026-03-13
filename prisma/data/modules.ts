export interface ModuleData {
  id: string;
  sectionId: string;
  title: string;
  deTitle: string;
  order: number;
  visaType?: 'STUDENT' | 'FAMILY' | 'VISIT' | null;
  specialization?: 'CS' | 'BBA' | 'ENGINEER' | 'SOCIAL' | 'MPCB' | null;
}

export const modules: ModuleData[] = [
  // --- A1-S1 Modules: Student -----
  // A1 - S1 - M1
  {
    id: 'a1-s1-st-m1',
    sectionId: 'a1-s1-st',
    title: 'German Foundation',
    deTitle: 'Deutsche Stiftung',
    order: 1,
    visaType: 'STUDENT',
    specialization: null,
  },

  // A1 - S1 - M2
  {
    id: 'a1-s1-st-m2',
    sectionId: 'a1-s1-st',
    title: 'Introduce Yourself',
    deTitle: 'Stell Dich Vor',
    order: 2,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A1 - S1 - M3
  {
    id: 'a1-s1-st-m3',
    sectionId: 'a1-s1-st',
    title: 'At Berlin Airport',
    deTitle: 'Am Berliner Flughafen',
    order: 3,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A1 - S1 - M4
  {
    id: 'a1-s1-st-m4',
    sectionId: 'a1-s1-st',
    title: 'To University',
    deTitle: 'Zur Universität',
    order: 4,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A1 - S1 - M5
  {
    id: 'a1-s1-st-m5',
    sectionId: 'a1-s1-st',
    title: 'Arrived At University',
    deTitle: 'An der Universität angekommen',
    order: 5,
    visaType: 'STUDENT',
    specialization: null,
  },
  // --- A1-S2 Modules: Student -----
  // A1 - S2 - M1
  {
    id: 'a1-s2-st-m1',
    sectionId: 'a1-s2-st',
    title: 'Grocery',
    deTitle: 'Lebensmittelgeschäft',
    order: 1,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A1 - S2 - M2
  {
    id: 'a1-s2-st-m2',
    sectionId: 'a1-s2-st',
    title: 'Restaurants & Winter Shopping',
    deTitle: 'Restaurants & Wintereinkäufe',
    order: 2,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A1 - S2 - M3
  {
    id: 'a1-s2-st-m3',
    sectionId: 'a1-s2-st',
    title: 'Health Insurance',
    deTitle: 'Gesundheit & Versicherung',
    order: 3,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A1 - S2 - M4
  {
    id: 'a1-s2-st-m4',
    sectionId: 'a1-s2-st',
    title: 'Banking & Administration',
    deTitle: 'Bankwesen & Verwaltung',
    order: 4,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A1 - S2 - M5
  {
    id: 'a1-s2-st-m5',
    sectionId: 'a1-s2-st',
    title: 'Renting a Room',
    deTitle: 'Ein Zimmer Mieten',
    order: 5,
    visaType: 'STUDENT',
    specialization: null,
  },
  // --- A2-S1 Modules: Student -----
  // A2 - S1 - M1
  {
    id: 'a2-s1-st-m1',
    sectionId: 'a2-s1-st',
    title: 'Hobbies & Family',
    deTitle: 'Hobbys & Familie',
    order: 1,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A2 - S1 - M2
  {
    id: 'a2-s1-st-m2',
    sectionId: 'a2-s1-st',
    title: 'Classroom & Presentation',
    deTitle: 'Klassenzimmer & Präsentation',
    order: 2,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A2 - S1 - M3
  {
    id: 'a2-s1-st-m3',
    sectionId: 'a2-s1-st',
    title: 'Project & Seminars',
    deTitle: 'Projekt & Seminare',
    order: 3,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A2 - S1 - M4
  {
    id: 'a2-s1-st-m4',
    sectionId: 'a2-s1-st',
    title: 'Emails & Student Job',
    deTitle: 'E-Mails & Studentenjob',
    order: 4,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A2 - S1 - M5
  {
    id: 'a2-s1-st-m5',
    sectionId: 'a2-s1-st',
    title: 'Socializing',
    deTitle: 'Sozialisieren',
    order: 5,
    visaType: 'STUDENT',
    specialization: null,
  },

  // --- A2-S2 Modules: Student -----
  // --- COMPUTER SCIENCE
  // A2 - S2 - M1
  {
    id: 'a2-s2-st-m1-cs',
    sectionId: 'a2-s2-st',
    title: 'CV & Profile',
    deTitle: 'Lebenslauf & Profil',
    order: 1,
    visaType: 'STUDENT',
    specialization: 'CS',
  },
  // A2 - S2 - M2
  {
    id: 'a2-s2-st-m2-cs',
    sectionId: 'a2-s2-st',
    title: 'Interview',
    deTitle: 'Interview',
    order: 2,
    visaType: 'STUDENT',
    specialization: 'CS',
  },
  // A2 - S2 - M3
  {
    id: 'a2-s2-st-m3-cs',
    sectionId: 'a2-s2-st',
    title: 'Meeting & Email',
    deTitle: 'Besprechung & E-Mail',
    order: 3,
    visaType: 'STUDENT',
    specialization: 'CS',
  },
  // A2 - S2 - M4
  {
    id: 'a2-s2-st-m4-cs',
    sectionId: 'a2-s2-st',
    title: 'Colleagues & Networking',
    deTitle: 'Kollegen & Netzwerken',
    order: 4,
    visaType: 'STUDENT',
    specialization: 'CS',
  },
  // A2 - S2 - M5
  {
    id: 'a2-s2-st-m5-cs',
    sectionId: 'a2-s2-st',
    title: 'Agile Workflows & Team Collaboration',
    deTitle: 'Agile Arbeitsabläufe & Teamzusammenarbeit',
    order: 5,
    visaType: 'STUDENT',
    specialization: 'CS',
  },

  // --- A2-S3 Modules: Student -----
  // --- COMPUTER SCIENCE
  // A2 - S3 - M1
  {
    id: 'a2-s3-st-m1-cs',
    sectionId: 'a2-s3-st',
    title: 'Troubleshooting & Feedback',
    deTitle: 'Fehlerbehebung & Feedback',
    order: 1,
    visaType: 'STUDENT',
    specialization: 'CS',
  },
  // A2 - S3 - M2
  {
    id: 'a2-s3-st-m2-cs',
    sectionId: 'a2-s3-st',
    title: 'Technical Systems & Requirements',
    deTitle: 'Technische Systeme & Anforderungen',
    order: 2,
    visaType: 'STUDENT',
    specialization: 'CS',
  },
  // A2 - S3 - M3
  {
    id: 'a2-s3-st-m3-cs',
    sectionId: 'a2-s3-st',
    title: 'Documentation & Data Management',
    deTitle: 'Dokumentation & Datenmanagement',
    order: 3,
    visaType: 'STUDENT',
    specialization: 'CS',
  },
  // A2 - S3 - M4
  {
    id: 'a2-s3-st-m4-cs',
    sectionId: 'a2-s3-st',
    title: 'Employment & Insurance',
    deTitle: 'Beschäftigung & Versicherung',
    order: 4,
    visaType: 'STUDENT',
    specialization: 'CS',
  },
  // A2 - S3 - M5
  {
    id: 'a2-s3-st-m5-cs',
    sectionId: 'a2-s3-st',
    title: 'Future Vision & Career Growth',
    deTitle: 'Zukunftsvision & Karriereentwicklung',
    order: 5,
    visaType: 'STUDENT',
    specialization: 'CS',
  },
  // --- A2-S2 Modules: Student -----
  // --- Business Management
  // A2 - S2 - M1
  {
    id: 'a2-s2-st-m1-biz',
    sectionId: 'a2-s2-st',
    title: 'CV & Profile',
    deTitle: 'Lebenslauf & Profil',
    order: 1,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },
  // A2 - S2 - M2
  {
    id: 'a2-s2-st-m2-biz',
    sectionId: 'a2-s2-st',
    title: 'Interview',
    deTitle: 'Interview',
    order: 2,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },
  // A2 - S2 - M3
  {
    id: 'a2-s2-st-m3-biz',
    sectionId: 'a2-s2-st',
    title: 'Meeting & Email',
    deTitle: 'Besprechung & E-Mail',
    order: 3,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },
  // A2 - S2 - M4
  {
    id: 'a2-s2-st-m4-biz',
    sectionId: 'a2-s2-st',
    title: 'Colleagues & Networking',
    deTitle: 'Kollegen & Netzwerken',
    order: 4,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },
  // A2 - S2 - M5
  {
    id: 'a2-s2-st-m5-biz',
    sectionId: 'a2-s2-st',
    title: 'Agile Workflows & Team Collaboration',
    deTitle: 'Agile Arbeitsabläufe & Teamzusammenarbeit',
    order: 5,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },

  // --- A2-S3 Modules: Student -----
  // --- Business
  // A2 - S3 - M1
  {
    id: 'a2-s3-st-m1-biz',
    sectionId: 'a2-s3-st',
    title: 'Process Optimization & Feedback',
    deTitle: 'Prozessoptimierung & Feedback',
    order: 1,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },
  // A2 - S3 - M2
  {
    id: 'a2-s3-st-m2-biz',
    sectionId: 'a2-s3-st',
    title: 'Business Systems & Key Metrics KPIs',
    deTitle: 'Geschäftssysteme & Kennzahlen',
    order: 2,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },
  // A2 - S3 - M3
  {
    id: 'a2-s3-st-m3-biz',
    sectionId: 'a2-s3-st',
    title: 'Reporting & Compliance',
    deTitle: 'Berichterstattung & Compliance',
    order: 3,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },
  // A2 - S3 - M4
  {
    id: 'a2-s3-st-m4-biz',
    sectionId: 'a2-s3-st',
    title: 'Employment & Social Security',
    deTitle: 'Beschäftigung & Soziale Sicherheit',
    order: 4,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },
  // A2 - S3 - M5
  {
    id: 'a2-s3-st-m5-biz',
    sectionId: 'a2-s3-st',
    title: 'Future Vision & Leadership',
    deTitle: 'Zukunftsvision & Führung',
    order: 5,
    visaType: 'STUDENT',
    specialization: 'BBA',
  },
  //----------------------------------
  // --- A1-S1 Modules: Family
  //----------------------------------
  // A1 - S1 - M1
  {
    id: 'a1-s1-fm-m1',
    sectionId: 'a1-s1-fm',
    title: 'German Foundation',
    deTitle: 'Deutsche Stiftung',
    order: 1,
    visaType: 'FAMILY',
    specialization: null,
  },
  // A1 - S1 - M2
  {
    id: 'a1-s1-fm-m2',
    sectionId: 'a1-s1-fm',
    title: 'Introduce Yourself',
    deTitle: 'Stell Dich Vor',
    order: 2,
    visaType: 'FAMILY',
    specialization: null,
  },
  // A1 - S1 - M3
  {
    id: 'a1-s1-fm-m3',
    sectionId: 'a1-s1-fm',
    title: 'At Berlin Airport',
    deTitle: 'Am Berliner Flughafen',
    order: 3,
    visaType: 'FAMILY',
    specialization: null,
  },
  // A1 - S1 - M4
  {
    id: 'a1-s1-fm-m4',
    sectionId: 'a1-s1-fm',
    title: 'To Home',
    deTitle: 'Zur Heim',
    order: 4,
    visaType: 'FAMILY',
    specialization: null,
  },
  // A1 - S1 - M5
  {
    id: 'a1-s1-fm-m5',
    sectionId: 'a1-s1-fm',
    title: 'Residential Registration',
    deTitle: 'Anmeldung',
    order: 5,
    visaType: 'FAMILY',
    specialization: null,
  },
  //----------------------------------
  // --- A1-S2 Modules: Family
  //----------------------------------
  // A1 - S2 - M1
];
