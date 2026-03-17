export interface SectionData {
  id: string;
  levelId: 'L1' | 'L2' | 'L3';
  title: string;
  deTitle: string;
  order: number;
  visaType?: 'STUDENT' | 'FAMILY' | 'VISIT' | null;
  specialization?: 'CS' | 'BBA' | 'ENGINEER' | 'SOCIAL' | 'NATURAL' | null;
}

export const sections: SectionData[] = [
  /*
    ----- Category: Student ---------
  */
  // --- LEVEL A1: BEGINNER ---
  // A1-S1
  {
    id: 'a1-s1-st',
    levelId: 'L1',
    title: 'Airport to University',
    deTitle: 'Flughafen zur Universität',
    order: 1,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A1-S2
  {
    id: 'a1-s2-st',
    levelId: 'L1',
    title: 'Shopping & Registration',
    deTitle: 'Einkaufen & Registrierung',
    order: 2,
    visaType: 'STUDENT',
    specialization: null,
  },
  // --- LEVEL A2: ELEMENTARY ---
  // A2-S1
  {
    id: 'a2-s1-st',
    levelId: 'L2',
    title: 'University Life',
    deTitle: 'Universitätsleben',
    order: 1,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A2-S2
  {
    id: 'a2-s2-st',
    levelId: 'L2',
    title: 'Job/Workplace',
    deTitle: 'Job/Arbeitsplatz',
    order: 2,
    visaType: 'STUDENT',
    specialization: null,
  },
  // A2-S3
  {
    id: 'a2-s3-st',
    levelId: 'L2',
    title: 'Field Job',
    deTitle: 'Feldarbeit',
    order: 3,
    visaType: 'STUDENT',
    specialization: null,
  },

  /*
    ----- Category: Family ---------
  */
  // --- LEVEL A1: BEGINNER ---
  // A1-S1
  {
    id: 'a1-s1-fm',
    levelId: 'L1',
    title: 'Airport to Home',
    deTitle: 'Flughafen zur Heim',
    order: 1,
    visaType: 'FAMILY',
    specialization: null,
  },
  // A1-S2
  {
    id: 'a1-s2-fm',
    levelId: 'L1',
    title: 'Shopping',
    deTitle: 'Einkaufen',
    order: 2,
    visaType: 'FAMILY',
    specialization: null,
  },
];
