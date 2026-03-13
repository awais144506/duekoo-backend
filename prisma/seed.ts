import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma';
import { levels } from './data/levels';
import { sections } from './data/sections';
import { modules } from './data/modules';

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
  console.log('🌱 Starting Duekoo Master Seed Engine...');

  // 1. SEED LEVELS (Using Hardcoded IDs)
  for (const levelData of levels) {
    await prisma.level.upsert({
      where: { id: levelData.id },
      update: {
        slug: levelData.slug,
        title: levelData.title,
        order: levelData.order,
      },
      create: {
        id: levelData.id,
        slug: levelData.slug,
        title: levelData.title,
        order: levelData.order,
      },
    });
  }
  console.log('✅ Levels processed (Hardcoded IDs synced).');

  // 2. SEED SECTIONS
  for (const sectionData of sections) {
    const parentLevel = await prisma.level.findUnique({
      where: { slug: sectionData.levelSlug },
    });

    if (!parentLevel) {
      console.error(
        `❌ Level ${sectionData.levelSlug} not found for section ${sectionData.id}`,
      );
      continue;
    }

    await prisma.section.upsert({
      where: { id: sectionData.id },
      update: {
        title: sectionData.title,
        deTitle: sectionData.deTitle,
        order: sectionData.order,
        visaType: sectionData.visaType,
        specialization: sectionData.specialization,
        levelId: parentLevel.id,
      },
      create: {
        id: sectionData.id,
        title: sectionData.title,
        deTitle: sectionData.deTitle,
        order: sectionData.order,
        visaType: sectionData.visaType,
        specialization: sectionData.specialization,
        levelId: parentLevel.id,
      },
    });
  }
  console.log('✅ All Sections processed.');

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
  console.log('🏁 Seeding completed successfully!');
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
