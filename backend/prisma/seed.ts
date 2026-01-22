import { PrismaClient, MeasurementType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create default exercises
  const exercises = [
    {
      name: 'Barbell Bench Press',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'chest',
      iconUrl: '/exercise-icons/barbell-bench-press.png',
      isSystemDefault: true,
      notes: 'Lie flat on bench, lower bar to chest, press up',
    },
    {
      name: 'Incline Dumbbell Press',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'chest',
      iconUrl: '/exercise-icons/incline-dumbbell-press.png',
      isSystemDefault: true,
      notes: 'Set bench to 30-45 degrees, press dumbbells up',
    },
    {
      name: 'Triceps Pushdown',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'triceps',
      iconUrl: '/exercise-icons/triceps-pushdown.png',
      isSystemDefault: true,
      notes: 'Keep elbows tucked, push down until arms are straight',
    },
    {
      name: 'Running',
      measurementType: MeasurementType.DISTANCE_TIME,
      muscleGroup: 'cardio',
      iconUrl: '/exercise-icons/running.png',
      isSystemDefault: true,
      notes: 'Outdoor or treadmill running',
    },
    {
      name: 'Barbell Back Squat',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'legs',
      isSystemDefault: true,
      notes: 'Bar on back, squat down to parallel, drive up',
    },
    {
      name: 'Conventional Deadlift',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'back',
      isSystemDefault: true,
      notes: 'Hip-width stance, pull bar up while keeping back straight',
    },
    {
      name: 'Pull-ups',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'back',
      isSystemDefault: true,
      notes: 'Hang from bar, pull yourself up until chin over bar. Add weight if needed.',
    },
    {
      name: 'Overhead Press',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'shoulders',
      isSystemDefault: true,
      notes: 'Press barbell or dumbbells overhead from shoulder level',
    },
    {
      name: 'Barbell Row',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'back',
      isSystemDefault: true,
      notes: 'Bent over, pull bar to lower chest',
    },
    {
      name: 'Plank',
      measurementType: MeasurementType.TIME,
      muscleGroup: 'abs',
      isSystemDefault: true,
      notes: 'Hold plank position, keep core tight',
    },
    {
      name: 'Push-ups',
      measurementType: MeasurementType.REPS,
      muscleGroup: 'chest',
      isSystemDefault: true,
      notes: 'Standard push-up form, chest to ground',
    },
    {
      name: 'Burpees',
      measurementType: MeasurementType.REPS,
      muscleGroup: 'full-body',
      isSystemDefault: true,
      notes: 'Full body cardio exercise: squat, plank, push-up, jump',
    },
    {
      name: 'Dumbbell Bicep Curl',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'biceps',
      isSystemDefault: true,
      notes: 'Keep elbows stationary, curl dumbbells up',
    },
    {
      name: 'Leg Press',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'legs',
      isSystemDefault: true,
      notes: 'Push weight away with legs on machine',
    },
    {
      name: 'Romanian Deadlift',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'legs',
      isSystemDefault: true,
      notes: 'Hamstring focused variation, slight knee bend',
    },
    {
      name: 'Lat Pulldown',
      measurementType: MeasurementType.WEIGHT_REPS,
      muscleGroup: 'back',
      isSystemDefault: true,
      notes: 'Pull bar down to upper chest',
    },
    {
      name: 'Steps Machine',
      measurementType: MeasurementType.COUNT_TIME,
      muscleGroup: 'cardio',
      isSystemDefault: true,
      notes: 'Stair stepper machine, count steps in time',
    },
    {
      name: 'Cycling',
      measurementType: MeasurementType.DISTANCE_TIME,
      muscleGroup: 'cardio',
      isSystemDefault: true,
      notes: 'Indoor bike or outdoor cycling',
    },
  ];

  for (const exercise of exercises) {
    await prisma.exercise.upsert({
      where: {
        id: exercise.name.toLowerCase().replace(/\s+/g, '-')
      },
      update: {},
      create: {
        ...exercise,
        id: exercise.name.toLowerCase().replace(/\s+/g, '-'),
      },
    });
  }

  console.log(`✅ Created ${exercises.length} default exercises`);
  console.log('🎉 Database seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
