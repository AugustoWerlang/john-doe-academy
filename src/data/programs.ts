export interface Program {
  readonly slug: string;
  readonly num: string;
  readonly title: string;
  readonly tagline: string;
  readonly detail: string;
  readonly duration: string;
  readonly hours: string;
  readonly price: string;
  readonly offerPriceUsd: string;
  readonly overview: readonly string[];
  readonly requirements: readonly string[];
  readonly steps: readonly ProgramStep[];
  readonly aircraft: string;
  readonly certification: string;
}

interface ProgramStep {
  readonly num: string;
  readonly title: string;
  readonly text: string;
}

export const programs = [
  {
    slug: "private-pilot",
    num: "01",
    title: "Private Pilot",
    tagline: "Your first certificate — the foundation of everything",
    detail:
      "The Private Pilot Certificate is where every aviator begins. Over 40+ hours of flight training, you'll master takeoffs, landings, navigation, and airspace. Ground school covers aerodynamics, weather, regulations, and flight planning. Most students complete the program in 3–6 months.",
    duration: "3–6 months",
    hours: "40+ flight hours",
    price: "Starting at $12,000",
    offerPriceUsd: "12000",
    overview: [
      "The Private Pilot Certificate is where most pilots begin. It gives you legal privileges to fly single-engine aircraft with passengers in day and night VFR conditions, and it builds the baseline skill every advanced rating depends on.",
      "Training combines one-on-one flight instruction with structured ground sessions. You will learn normal and crosswind takeoffs and landings, stalls, emergency procedures, navigation, radio work, weather judgment, and aeronautical decision-making.",
      "Most students finish in 3 to 6 months when flying consistently. We recommend 2 to 3 flights each week so skills compound quickly and your checkride prep stays efficient.",
    ],
    requirements: [
      "Be at least 17 years old (16 to solo)",
      "Read, speak, and understand English",
      "Hold at least a Third Class FAA Medical Certificate",
      "Pass the FAA Knowledge Test",
      "Complete required flight experience and training",
      "Pass the FAA practical test (checkride)",
    ],
    steps: [
      {
        num: "01",
        title: "Complete medical and enrollment",
        text: "Meet with an FAA Aviation Medical Examiner, submit onboarding details, and lock your weekly flight cadence with your instructor.",
      },
      {
        num: "02",
        title: "Build your ground-school foundation",
        text: "Cover aerodynamics, weather, regulations, aircraft systems, and performance planning while preparing for the FAA written exam.",
      },
      {
        num: "03",
        title: "Master core maneuvers",
        text: "Train takeoffs, landings, climbs, descents, turns, stalls, and emergency scenarios until each maneuver is smooth and repeatable.",
      },
      {
        num: "04",
        title: "Fly solo and cross-country",
        text: "After instructor signoff, complete solo pattern work and required cross-country flights to build real-world command confidence.",
      },
      {
        num: "05",
        title: "Finish written and checkride prep",
        text: "Complete oral prep, refine weak areas, and run full mock checkrides with scenario-based decision-making practice.",
      },
      {
        num: "06",
        title: "Pass your FAA checkride",
        text: "Take the oral and practical test with a Designated Pilot Examiner and earn your Private Pilot Certificate.",
      },
    ],
    aircraft: "Cessna 172, Piper PA-28",
    certification: "FAA Part 61",
  },
  {
    slug: "instrument-rating",
    num: "02",
    title: "Instrument Rating",
    tagline: "Fly through clouds with confidence and precision",
    detail:
      "The Instrument Rating trains you to fly solely by reference to instruments — essential for bad weather and professional flying. You'll log 40 hours of simulated or actual instrument time, learning approaches, holds, and ATC communication at a deeper level.",
    duration: "2–4 months",
    hours: "40+ instrument hours",
    price: "Starting at $14,000",
    offerPriceUsd: "14000",
    overview: [
      "The Instrument Rating teaches you to control and navigate the aircraft solely by instruments when outside references are limited. It is the rating that turns a fair-weather pilot into an all-conditions decision-maker.",
      "You will train in attitude instrument flying, holding patterns, precision and non-precision approaches, missed approaches, IFR departures, and structured ATC communication under workload.",
      "Most students complete instrument training in 2 to 4 months with consistent scheduling. The rating dramatically improves safety margins and is required for most professional pilot paths.",
    ],
    requirements: [
      "Hold at least a Private Pilot Certificate",
      "Hold current FAA medical eligibility",
      "Log required instrument training and cross-country time",
      "Pass the FAA Instrument Rating Knowledge Test",
      "Receive instructor endorsement for practical test",
      "Pass the FAA Instrument Rating practical test",
    ],
    steps: [
      {
        num: "01",
        title: "Set IFR training baseline",
        text: "Review prior experience, logbook requirements, and avionics familiarity, then build a targeted training schedule.",
      },
      {
        num: "02",
        title: "Train attitude and scan discipline",
        text: "Develop reliable instrument scan technique and precise aircraft control in climbs, descents, turns, and unusual-attitude recovery.",
      },
      {
        num: "03",
        title: "Learn holds and procedures",
        text: "Practice holding entries, course intercepts, and procedure execution while managing workload and communication.",
      },
      {
        num: "04",
        title: "Execute full IFR flights",
        text: "Fly complete IFR cross-countries with clearances, route amendments, approaches, missed approaches, and alternates.",
      },
      {
        num: "05",
        title: "Complete written and oral prep",
        text: "Finalize knowledge-test completion and rehearse instrument systems, regulations, weather interpretation, and risk decisions.",
      },
      {
        num: "06",
        title: "Pass the instrument checkride",
        text: "Demonstrate IFR proficiency to a DPE and add the Instrument Rating to your pilot certificate.",
      },
    ],
    aircraft: "Cessna 172 (G1000), Piper PA-28",
    certification: "FAA Part 61",
  },
  {
    slug: "commercial-pilot",
    num: "03",
    title: "Commercial Pilot",
    tagline: "Turn your passion into a career",
    detail:
      "The Commercial Pilot Certificate allows you to fly for compensation. Training focuses on complex maneuvers, advanced systems, and the higher standards required of professional pilots. 250 total hours minimum, with emphasis on precision and decision-making.",
    duration: "3–6 months",
    hours: "250 total hours",
    price: "Starting at $18,000",
    offerPriceUsd: "18000",
    overview: [
      "The Commercial Pilot Certificate is the credential that allows you to fly for compensation or hire. It raises standards from safe private flying to professional-level accuracy, planning, and judgment.",
      "Training emphasizes commercial maneuvers, power-off 180 accuracy landings, chandelles, lazy eights, steep spirals, and advanced systems management while maintaining tighter tolerances.",
      "Students usually complete in 3 to 6 months depending on total time at enrollment and training frequency. This stage prepares you for instructing, charter pathways, and the next professional ratings.",
    ],
    requirements: [
      "Be at least 18 years old",
      "Hold at least a Private Pilot Certificate",
      "Meet FAA aeronautical experience minimums",
      "Pass the FAA Commercial Pilot Knowledge Test",
      "Receive practical-test endorsement",
      "Pass the FAA Commercial Pilot practical test",
    ],
    steps: [
      {
        num: "01",
        title: "Audit time and eligibility",
        text: "Review current logbook totals, identify experience gaps, and build a commercial completion plan tied to FAA minimums.",
      },
      {
        num: "02",
        title: "Sharpen precision fundamentals",
        text: "Refine energy management, stabilized approaches, and configuration control to commercial standards.",
      },
      {
        num: "03",
        title: "Train commercial maneuvers",
        text: "Develop repeatable performance in chandelles, lazy eights, steep spirals, and eights on pylons.",
      },
      {
        num: "04",
        title: "Master power-off 180s and scenarios",
        text: "Build consistency in high-consequence landing profiles and scenario-based decision making under pressure.",
      },
      {
        num: "05",
        title: "Finalize oral and written prep",
        text: "Complete knowledge-test requirements and rehearse systems, regulations, weather, and operational case studies.",
      },
      {
        num: "06",
        title: "Complete commercial checkride",
        text: "Pass the FAA oral and flight evaluation and earn your Commercial Pilot Certificate.",
      },
    ],
    aircraft: "Cessna 172, Piper PA-28",
    certification: "FAA Part 61",
  },
  {
    slug: "multi-engine",
    num: "04",
    title: "Multi-Engine Rating",
    tagline: "Master twin-engine aircraft for advanced operations",
    detail:
      "The Multi-Engine Rating prepares you for complex, high-performance aircraft with two engines. You'll learn engine-out procedures, Vmc demonstrations, and the systems management required for professional multi-engine operations.",
    duration: "2–4 weeks",
    hours: "10–15 flight hours",
    price: "Starting at $6,000",
    offerPriceUsd: "6000",
    overview: [
      "The Multi-Engine Rating adds twin-engine privileges and introduces higher-performance aircraft systems. It is a key step for pilots targeting charter, corporate, and airline career tracks.",
      "Training focuses on asymmetric thrust control, Vmc awareness, single-engine climb performance, engine-out procedures, and disciplined checklist management under time pressure.",
      "Because it is concentrated and skills-driven, many pilots complete this rating in 2 to 4 weeks with focused scheduling and strong pre-brief preparation.",
    ],
    requirements: [
      "Hold at least a Private Pilot Certificate",
      "Maintain FAA medical eligibility",
      "Complete required dual instruction in multi-engine aircraft",
      "Demonstrate engine-out and emergency proficiency",
      "Receive instructor endorsement",
      "Pass FAA practical test for multi-engine privileges",
    ],
    steps: [
      {
        num: "01",
        title: "Systems and performance briefing",
        text: "Learn twin-engine systems, limitations, and performance planning differences before first flight.",
      },
      {
        num: "02",
        title: "Normal multi-engine operations",
        text: "Build baseline proficiency in takeoffs, climbs, cruise management, descents, and landing profiles.",
      },
      {
        num: "03",
        title: "Engine-out procedure training",
        text: "Practice failure recognition, directional control, identify-verify-feather flow, and single-engine approach strategy.",
      },
      {
        num: "04",
        title: "Vmc and safety envelope mastery",
        text: "Train Vmc demonstrations and margin management to stay inside safe controllability limits.",
      },
      {
        num: "05",
        title: "Mock checkride and oral review",
        text: "Rehearse full oral and flight profiles with emphasis on systems knowledge and emergency decision quality.",
      },
      {
        num: "06",
        title: "Add multi-engine rating",
        text: "Complete the FAA practical test and add multi-engine privileges to your certificate.",
      },
    ],
    aircraft: "Piper Seminole, Beechcraft Duchess",
    certification: "FAA Part 61",
  },
] satisfies readonly Program[];

interface DiscoveryFlight {
  readonly title: string;
  readonly tagline: string;
  readonly detail: string;
  readonly price: string;
  readonly duration: string;
}

export const discoveryFlight = {
  title: "Discovery Flight",
  tagline: "30 minutes that might change your life",
  detail:
    "Not sure if flying is for you? A Discovery Flight puts you in the left seat with an instructor by your side. You'll taxi, take off, fly over Austin, and land — all in about 30 minutes. No experience needed, no commitment required.",
  price: "$199",
  duration: "~30 minutes",
} satisfies DiscoveryFlight;
