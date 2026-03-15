import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { levels } from './data/levels';
import { sections } from './data/sections';
import { modules } from './data/modules';
import { parts } from './data/parts';
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
  console.log('🌱 Starting Seed Engine...');

  // 1. SEED LEVELS
  for (const level of levels) {
    await prisma.level.upsert({
      where: { id: level.id },
      update: { slug: level.slug, title: level.title, order: level.order },
      create: level,
    });
  }
  console.log('✅ Levels synced.');

  // 2. SEED SECTIONS (No more searching for Level ID!)
  for (const s of sections) {
    await prisma.section.upsert({
      where: { id: s.id },
      update: {
        title: s.title,
        deTitle: s.deTitle,
        order: s.order,
        visaType: s.visaType,
        specialization: s.specialization,
        levelId: s.levelId, // Using the direct link
      },
      create: {
        id: s.id,
        title: s.title,
        deTitle: s.deTitle,
        order: s.order,
        visaType: s.visaType,
        specialization: s.specialization,
        levelId: s.levelId,
      },
    });
  }
  console.log('✅ Sections synced.');

  // 3. SEED MODULES
  for (const m of modules) {
    await prisma.module.upsert({
      where: { id: m.id },
      update: {
        title: m.title,
        deTitle: m.deTitle,
        order: m.order,
        visaType: m.visaType,
        specialization: m.specialization,
        sectionId: m.sectionId,
      },
      create: {
        id: m.id,
        sectionId: m.sectionId,
        title: m.title,
        deTitle: m.deTitle,
        order: m.order,
        visaType: m.visaType,
        specialization: m.specialization,
      },
    });
  }
  console.log('✅ All Modules processed.');

  // 4. SEED PARTS
  for (const p of parts) {
    await prisma.part.upsert({
      where: { id: p.id },
      update: {
        title: p.title,
        deTitle: p.deTitle,
        order: p.order,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        content: p.content,
      },
      create: {
        id: p.id,
        moduleId: p.moduleId,
        title: p.title,
        deTitle: p.deTitle,
        order: p.order,
        contentId: p.contentId,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        content: p.content,
      },
    });
  }
  console.log('✅ All Parts Processed.');

  console.log('🏁 Seeding Completed Successfully!');
}
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
