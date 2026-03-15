import { a1_s1_m1_parts } from './content_student/A1/S1/M1';
import { a1_s1_m2_parts } from './content_student/A1/S1/M2';
import { a1_s1_m3_parts } from './content_student/A1/S1/M3';
import { a1_s1_m4_parts } from './content_student/A1/S1/M4';
import { a1_s1_m5_parts } from './content_student/A1/S1/M5';
import { a1_s2_m1_parts } from './content_student/A1/S2/M1';
import { a1_s2_m2_parts } from './content_student/A1/S2/M2';
import { a1_s2_m3_parts } from './content_student/A1/S2/M3';
import { a1_s2_m4_parts } from './content_student/A1/S2/M4';
import { a1_s2_m5_parts } from './content_student/A1/S2/M5';
export interface PartData {
  id: string;
  moduleId: string;
  title: string;
  deTitle: string;
  contentId: string;
  order: number;
  content: any;
}

export const parts: PartData[] = [
  ...a1_s1_m1_parts,
  ...a1_s1_m2_parts,
  ...a1_s1_m3_parts,
  ...a1_s1_m4_parts,
  ...a1_s1_m5_parts,
  ...a1_s2_m1_parts,
  ...a1_s2_m2_parts,
  ...a1_s2_m3_parts,
  ...a1_s2_m4_parts,
  ...a1_s2_m5_parts,
];
