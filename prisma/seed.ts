import { PrismaClient, UserRole, EventType, EventStatus, OfferType, OfferStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clear existing data
  await prisma.vote.deleteMany();
  await prisma.matchup.deleteMany();
  await prisma.bracket.deleteMany();
  await prisma.eventParticipant.deleteMany();
  await prisma.event.deleteMany();
  await prisma.offer.deleteMany();
  await prisma.evaluation.deleteMany();
  await prisma.rating.deleteMany();
  await prisma.socialLink.deleteMany();
  await prisma.video.deleteMany();
  await prisma.performanceStat.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.coach.deleteMany();
  await prisma.athlete.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await bcrypt.hash('password123', 12);

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      email: 'admin@overall99.com',
      name: 'Overall 99 Admin',
      password: hashedPassword,
      role: UserRole.ADMIN,
    },
  });

  // Create athletes
  const athletes = await Promise.all([
    prisma.user.create({
      data: {
        email: 'john.doe@example.com',
        name: 'John Doe',
        password: hashedPassword,
        role: UserRole.ATHLETE,
        athlete: {
          create: {
            sport: 'Basketball',
            position: 'Point Guard',
            bio: 'Elite point guard with exceptional court vision and scoring ability.',
            school: 'Lincoln High School',
            classYear: 2025,
            city: 'Los Angeles',
            state: 'CA',
            height: 74, // 6'2"
            weight: 185,
            gpa: 3.8,
            satScore: 1350,
            dateOfBirth: new Date('2007-03-15'),
          },
        },
      },
      include: { athlete: true },
    }),
    prisma.user.create({
      data: {
        email: 'jane.smith@example.com',
        name: 'Jane Smith',
        password: hashedPassword,
        role: UserRole.ATHLETE,
        athlete: {
          create: {
            sport: 'Soccer',
            position: 'Forward',
            bio: 'Fast and technical forward with a knack for scoring goals.',
            school: 'Riverside Academy',
            classYear: 2026,
            city: 'Miami',
            state: 'FL',
            height: 66, // 5'6"
            weight: 135,
            gpa: 3.9,
            actScore: 32,
            dateOfBirth: new Date('2008-07-22'),
          },
        },
      },
      include: { athlete: true },
    }),
    prisma.user.create({
      data: {
        email: 'mike.johnson@example.com',
        name: 'Michael Johnson',
        password: hashedPassword,
        role: UserRole.ATHLETE,
        athlete: {
          create: {
            sport: 'Football',
            position: 'Quarterback',
            bio: 'Strong-armed quarterback with excellent decision making.',
            school: 'Central High School',
            classYear: 2025,
            city: 'Dallas',
            state: 'TX',
            height: 76, // 6'4"
            weight: 220,
            gpa: 3.5,
            satScore: 1280,
            dateOfBirth: new Date('2007-01-10'),
          },
        },
      },
      include: { athlete: true },
    }),
    prisma.user.create({
      data: {
        email: 'sarah.williams@example.com',
        name: 'Sarah Williams',
        password: hashedPassword,
        role: UserRole.ATHLETE,
        athlete: {
          create: {
            sport: 'Basketball',
            position: 'Shooting Guard',
            bio: 'Deadly shooter with range beyond the arc.',
            school: 'Valley High School',
            classYear: 2026,
            city: 'Phoenix',
            state: 'AZ',
            height: 70, // 5'10"
            weight: 155,
            gpa: 4.0,
            satScore: 1420,
            dateOfBirth: new Date('2008-05-08'),
          },
        },
      },
      include: { athlete: true },
    }),
    prisma.user.create({
      data: {
        email: 'david.chen@example.com',
        name: 'David Chen',
        password: hashedPassword,
        role: UserRole.ATHLETE,
        athlete: {
          create: {
            sport: 'Baseball',
            position: 'Pitcher',
            bio: 'Dominant pitcher with a 95mph fastball and nasty slider.',
            school: 'Pacific Academy',
            classYear: 2025,
            city: 'San Francisco',
            state: 'CA',
            height: 75, // 6'3"
            weight: 200,
            gpa: 3.7,
            actScore: 30,
            dateOfBirth: new Date('2007-09-12'),
          },
        },
      },
      include: { athlete: true },
    }),
  ]);

  // Add performance stats for athletes
  for (const user of athletes) {
    if (!user.athlete) continue;

    const stats = [
      { name: '40-yard dash', value: 4.4 + Math.random() * 0.8, unit: 'seconds', category: 'Speed' },
      { name: 'Vertical jump', value: 28 + Math.random() * 12, unit: 'inches', category: 'Vertical' },
      { name: 'Bench press', value: 180 + Math.random() * 100, unit: 'lbs', category: 'Strength' },
      { name: 'Pro agility', value: 4.0 + Math.random() * 0.6, unit: 'seconds', category: 'Agility' },
    ];

    await Promise.all(
      stats.map((stat) =>
        prisma.performanceStat.create({
          data: {
            athleteId: user.athlete!.id,
            ...stat,
            value: Math.round(stat.value * 100) / 100,
            verified: Math.random() > 0.3,
          },
        })
      )
    );

    // Add social links
    await Promise.all([
      prisma.socialLink.create({
        data: {
          athleteId: user.athlete.id,
          platform: 'Instagram',
          url: `https://instagram.com/${user.name?.toLowerCase().replace(' ', '')}`,
          followers: Math.floor(1000 + Math.random() * 50000),
        },
      }),
      prisma.socialLink.create({
        data: {
          athleteId: user.athlete.id,
          platform: 'Twitter',
          url: `https://twitter.com/${user.name?.toLowerCase().replace(' ', '')}`,
          followers: Math.floor(500 + Math.random() * 25000),
        },
      }),
    ]);

    // Add videos
    await prisma.video.create({
      data: {
        athleteId: user.athlete.id,
        title: 'Season Highlights 2024',
        url: 'https://example.com/highlights',
        thumbnailUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc',
        duration: 180,
        category: 'Highlights',
        description: 'Best plays from the 2024 season',
        featured: true,
        viewCount: Math.floor(100 + Math.random() * 5000),
      },
    });

    // Create rating
    await prisma.rating.create({
      data: {
        athleteId: user.athlete.id,
        performanceScore: 70 + Math.random() * 25,
        physicalScore: 65 + Math.random() * 30,
        academicScore: 75 + Math.random() * 20,
        socialScore: 40 + Math.random() * 40,
        evaluationScore: 60 + Math.random() * 30,
        overallScore: 65 + Math.random() * 25,
        percentile: Math.random() * 100,
      },
    });
  }

  // Create coaches
  const coaches = await Promise.all([
    prisma.user.create({
      data: {
        email: 'coach.smith@example.com',
        name: 'Coach Robert Smith',
        password: hashedPassword,
        role: UserRole.COACH,
        coach: {
          create: {
            sport: 'Basketball',
            school: 'State University',
            team: "Men's Basketball",
            position: 'Head Coach',
            yearsExp: 15,
            bio: '3x Conference Champion coach with a focus on player development.',
            verified: true,
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        email: 'coach.jones@example.com',
        name: 'Coach Maria Jones',
        password: hashedPassword,
        role: UserRole.COACH,
        coach: {
          create: {
            sport: 'Soccer',
            school: 'Elite Soccer Academy',
            team: "Women's First Team",
            position: 'Head Coach',
            yearsExp: 10,
            bio: 'Former pro player turned successful youth coach.',
            verified: true,
          },
        },
      },
    }),
  ]);

  // Create brands
  const brands = await Promise.all([
    prisma.user.create({
      data: {
        email: 'contact@sportswear.com',
        name: 'SportWear Co',
        password: hashedPassword,
        role: UserRole.BRAND,
        brand: {
          create: {
            companyName: 'SportWear Co',
            industry: 'Athletic Apparel',
            website: 'https://sportwear.example.com',
            description: 'Premium athletic apparel for young athletes.',
            verified: true,
          },
        },
      },
      include: { brand: true },
    }),
    prisma.user.create({
      data: {
        email: 'contact@energydrink.com',
        name: 'PowerUp Energy',
        password: hashedPassword,
        role: UserRole.BRAND,
        brand: {
          create: {
            companyName: 'PowerUp Energy',
            industry: 'Beverages',
            website: 'https://powerup.example.com',
            description: 'Energy drinks designed for peak athletic performance.',
            verified: true,
          },
        },
      },
      include: { brand: true },
    }),
  ]);

  // Create NIL offers
  for (const brandUser of brands) {
    if (!brandUser.brand) continue;

    for (const athleteUser of athletes.slice(0, 3)) {
      if (!athleteUser.athlete) continue;

      await prisma.offer.create({
        data: {
          brandId: brandUser.brand.id,
          athleteId: athleteUser.athlete.id,
          title: `${brandUser.brand.companyName} Athlete Partnership`,
          description: `Exciting opportunity to partner with ${brandUser.brand.companyName} for social media promotion and product endorsement.`,
          value: 1000 + Math.floor(Math.random() * 9000),
          type: Math.random() > 0.5 ? OfferType.SPONSORSHIP : OfferType.SOCIAL_MEDIA,
          status: OfferStatus.PENDING,
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        },
      });
    }
  }

  // Create CAM CAMP event
  const event = await prisma.event.create({
    data: {
      name: 'CAM CAMP Football Championship',
      description: 'The ultimate high school football showcase. Elite players compete for the Player of the Year award in Las Vegas. Fan voting determines the finalists!',
      type: EventType.TOURNAMENT,
      sport: 'Football',
      location: 'Las Vegas, NV',
      startDate: new Date('2025-01-13'),
      endDate: new Date('2025-01-15'),
      maxParticipants: 64,
      status: EventStatus.UPCOMING,
      imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390',
    },
  });

  // Add participants to event
  const basketballAthletes = athletes.filter((a) => a.athlete?.sport === 'Basketball');
  for (const athleteUser of basketballAthletes) {
    if (!athleteUser.athlete) continue;

    await prisma.eventParticipant.create({
      data: {
        eventId: event.id,
        athleteId: athleteUser.athlete.id,
        status: 'REGISTERED',
        seedRank: Math.floor(Math.random() * 16) + 1,
      },
    });
  }

  // Create bracket for event
  const bracket = await prisma.bracket.create({
    data: {
      eventId: event.id,
      name: 'Main Bracket',
      round: 1,
    },
  });

  console.log('Seed completed successfully!');
  console.log({
    users: await prisma.user.count(),
    athletes: await prisma.athlete.count(),
    coaches: await prisma.coach.count(),
    brands: await prisma.brand.count(),
    events: await prisma.event.count(),
    offers: await prisma.offer.count(),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
