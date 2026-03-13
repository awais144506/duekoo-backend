// Add the extension .json
import a1_s1_m1_p1_content from './content_student/A1/a1_s1_m1_st_p1.json';

export interface PartData {
  id: string;
  moduleId: string;
  title: string;
  deTitle: string;
  contentId: string;
  order: number;
  content: any; // We'll cast this below
}

export const parts: PartData[] = [
  {
    id: 'a1-s1-st-m1-p1',
    moduleId: 'a1-s1-st-m1',
    title: 'German Foundation',
    deTitle: 'Deutsche Stiftung',
    contentId: 'ger_a1_foundation_vocab',
    order: 1,
    // Use casting to satisfy the 'Unsafe Assignment' rule
    content: a1_s1_m1_p1_content as Record<string, unknown>,
  },
];
