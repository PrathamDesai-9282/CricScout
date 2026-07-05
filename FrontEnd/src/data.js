export const PLAYERS = [
  {
    id: 'rashid-khan',
    name: 'Rashid Khan',
    shortName: 'Rashid Khan',
    role: 'Bowler',
    detailRole: 'Bowler • Leg Spin',
    country: 'AFG',
    age: 27,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Leg Spin',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChc6GlMTSXBYN9cK3DIW8Xf9oGxeM0e3SPM2-SJemPv2U6jLDXFx4jd34bqbGANo_z5o-gicmFhMcsKxqFPk0_aIMG-3Cj9LbFyYR9sptWiwXDPrhUFRIdN-v49MZTEVw_8ljOMmSirgAGe-k5zFCPbELhJ3ytKe37BHB-iuQg2bo6s2wM1PJUoJ_4ekSnYvmqe2rWljDeKsdBOeQrtCROs_FZXRPhrQEd_9J4mJXvCWzf1mde0HsFl169P_9LNBQ6kUaEQ-39sDPT',
    scoutScore: 96.8,
    aiConfidence: 88,
    cluster: 'Finishers',
    consistencyScore: 41,
    runRate: 6.2,
    stats: {
      T20: { matches: 110, runs: 420, wickets: 152, avg: 14.8, sr: 14.2, econ: 6.18, bpb: 4.8 },
      ODI: { matches: 94, runs: 1210, wickets: 172, avg: 18.5, sr: 22.1, econ: 4.15, bpb: 12.5 },
      Test: { matches: 5, runs: 120, wickets: 34, avg: 22.3, sr: 36.4, econ: 3.02, bpb: 20.0 }
    },
    skills: { rotation: 40, paceAcc: 92, power: 55, finishing: 45, spinAcc: 98 },
    similarityMetrics: { strikeRate: 110.5, boundaryPct: 11.2, spinEconRate: 6.18, avgEntryOver: 14.2 },
    recentForm: [
      { score: 10, isNotOut: true }, { score: 15 }, { score: 1 }, { score: 2 }, { score: 21 },
      { score: 0 }, { score: 18, isNotOut: true }, { score: 3 }, { score: 2 }, { score: 12 }
    ],
    auction: {
      estValue: 1.85,
      basePrice: 500,
      lastAuctionPrice: 1.90,
      keyDrivers: [
        { label: 'T20 Econ Rate (Career)', impact: 42 },
        { label: 'Wicket Taking Ability (Death)', impact: 28 },
        { label: 'International Experience', impact: 18 },
        { label: 'Batting Utility (Lower Order)', impact: 12 }
      ],
      franchiseFit: { mumbai: 85, chennai: 60, delhi: 15 },
      historicalTrend: [
        { year: 2020, value: 1.1 },
        { year: 2021, value: 1.4 },
        { year: 2022, value: 1.6 },
        { year: 2024, value: 1.85 }
      ]
    }
  },
  {
    id: 's-yadav',
    name: 'Suryakumar Yadav',
    shortName: 'S. Yadav',
    role: 'Batter',
    detailRole: 'Batter • RHB',
    country: 'IND',
    age: 33,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Off Spin',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg04YrbLY2vHcf1D12VnGkRs5SLco7b4kp6EcOvsuElXtWhLPBfc2tBfBcXm9mB67bMgN7eoLW6w2JtglX_uk_RrhX35KqIMVnn9FWhJdZp7krG1nC3UghHCRs5RKv7NIIFLyQPuv3lxM_R7P_UgyCw4nc8TwNjkeotlTUh11JXdjlpjymkm_MnPxy0I0lBeGobcYLaemLzgftOc0mTzl-Dt8l_Z0-TkyeJcO0cGntlUJ2wnttJyq_JjvHhZJcguzz5g0G0uUz8Lso',
    scoutScore: 95.5,
    aiConfidence: 89,
    cluster: 'Aggressive Openers',
    consistencyScore: 78,
    runRate: 9.1,
    stats: {
      T20: { matches: 60, runs: 2141, wickets: 0, avg: 43.3, sr: 171.5, econ: 0, bpb: 4.2 },
      ODI: { matches: 37, runs: 773, wickets: 0, avg: 25.8, sr: 105.0, econ: 0, bpb: 8.5 },
      Test: { matches: 1, runs: 8, wickets: 0, avg: 8.0, sr: 40.0, econ: 0, bpb: 15.0 }
    },
    skills: { rotation: 85, paceAcc: 98, power: 90, finishing: 95, spinAcc: 94 },
    similarityMetrics: { strikeRate: 171.5, boundaryPct: 24.5, spinEconRate: 0.0, avgEntryOver: 11.2 },
    recentForm: [
      { score: 35 }, { score: 82, isNotOut: true }, { score: 10 }, { score: 100 }, { score: 12 },
      { score: 54 }, { score: 0 }, { score: 26 }, { score: 76, isNotOut: true }, { score: 16 }
    ],
    auction: {
      estValue: 2.15,
      basePrice: 1000,
      lastAuctionPrice: 1.80,
      keyDrivers: [
        { label: 'PP & Middle Over Boundary Rate', impact: 45 },
        { label: '360-Degree Placement Zone', impact: 30 },
        { label: 'Spin Accrual Domination', impact: 15 },
        { label: 'International Leadership Experience', impact: 10 }
      ],
      franchiseFit: { mumbai: 95, chennai: 40, delhi: 50 },
      historicalTrend: [
        { year: 2020, value: 0.8 },
        { year: 2021, value: 1.5 },
        { year: 2022, value: 1.9 },
        { year: 2024, value: 2.15 }
      ]
    }
  },
  {
    id: 'virat-kohli',
    name: 'Virat Kohli',
    shortName: 'Virat Kohli',
    role: 'Batter',
    detailRole: 'Top Order Batter • Star Anchor',
    country: 'IND',
    age: 35,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Medium',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt22r8MNyTLLxQ6pXyARDFBH797pBKQseZfkhap6na3TZS6j2oXaR4LMayD-729Rx7ymlj43Jy8I4D3UBez5YwSyLlovlqmuWD8j_aL-jqnGU4xB1bqkCkhrVjYrkPMx-AxLcWfgGmqJMacKNN_-Xf9OTv8ieumGtSRZCB1eFCzJTzSGwojQI-u51B4ZCQYbIzIuOtlbzvz_bKLJ7KMUB9zGlhq8zL5oPOZj0zN1yu8vNBr-zZZvmsw1MM1DmSJYdHXrFlYBFyvsd0',
    scoutScore: 98.4,
    aiConfidence: 95,
    cluster: 'Anchor Middle Order',
    consistencyScore: 88,
    runRate: 8.2,
    stats: {
      T20: { matches: 117, runs: 4037, wickets: 4, avg: 51.75, sr: 138.15, econ: 8.0, bpb: 6.2 },
      ODI: { matches: 292, runs: 13848, wickets: 5, avg: 58.67, sr: 93.62, econ: 5.8, bpb: 11.4 },
      Test: { matches: 113, runs: 8848, wickets: 0, avg: 49.15, sr: 55.4, econ: 0, bpb: 24.5 }
    },
    skills: { rotation: 98, paceAcc: 95, power: 85, finishing: 92, spinAcc: 90 },
    similarityMetrics: { strikeRate: 138.15, boundaryPct: 18.0, spinEconRate: 0.0, avgEntryOver: 3.5 },
    recentForm: [
      { score: 12 }, { score: 82, isNotOut: true }, { score: 5 }, { score: 100 }, { score: 35 },
      { score: 54 }, { score: 0 }, { score: 22 }, { score: 76 }, { score: 16 }
    ],
    auction: {
      estValue: 2.30,
      basePrice: 1000,
      lastAuctionPrice: 2.10,
      keyDrivers: [
        { label: 'Chasing Conversion Record', impact: 40 },
        { label: 'Format Anchor Reliability', impact: 30 },
        { label: 'Visual Brand Synergy & Audience Reach', impact: 20 },
        { label: 'Captaincy Advisory Weight', impact: 10 }
      ],
      franchiseFit: { mumbai: 70, chennai: 88, delhi: 45 },
      historicalTrend: [
        { year: 2020, value: 2.0 },
        { year: 2021, value: 2.1 },
        { year: 2022, value: 2.2 },
        { year: 2024, value: 2.30 }
      ]
    }
  },
  {
    id: 'babar-azam',
    name: 'Babar Azam',
    shortName: 'Babar Azam',
    role: 'Batter',
    detailRole: 'Top Order Batter',
    country: 'PAK',
    age: 29,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Off Break',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiF429i_fJDInH6o0y6xcsC15fxrq6Sq_ihMavGQwJG1kM54b4eP2yGj9qib69SCpFcIF2TVa43SxzFexPCoiLa_gmIFQiht7vCvekADzVatlpTrFNhwKyzTPcmbBd29EQEK9Pm9FtZlCh83dfGiFl4uPiYIZw550NwO07FrjAsMmZCqKQu0QwqIx_Hyu9V1PFKg8ib5LcZcL6KXHj5BmcBH2UEqyKcCqK9kiIU3jS0OJszkCoSX5Dv8RbwjJahPyg_KJN81AQ_M4z',
    scoutScore: 97.2,
    aiConfidence: 92,
    cluster: 'Anchor Middle Order',
    consistencyScore: 85,
    runRate: 7.8,
    stats: {
      T20: { matches: 109, runs: 3485, wickets: 0, avg: 41.5, sr: 129.2, econ: 0, bpb: 7.2 },
      ODI: { matches: 114, runs: 5729, wickets: 0, avg: 56.7, sr: 88.7, econ: 0, bpb: 12.0 },
      Test: { matches: 52, runs: 3898, wickets: 0, avg: 45.8, sr: 54.8, econ: 0, bpb: 18.0 }
    },
    skills: { rotation: 96, paceAcc: 90, power: 75, finishing: 80, spinAcc: 92 },
    similarityMetrics: { strikeRate: 129.2, boundaryPct: 16.2, spinEconRate: 0.0, avgEntryOver: 1.5 },
    recentForm: [
      { score: 45 }, { score: 72 }, { score: 101, isNotOut: true }, { score: 13 }, { score: 4 },
      { score: 50 }, { score: 62 }, { score: 9 }, { score: 81 }, { score: 28 }
    ],
    auction: {
      estValue: 2.10,
      basePrice: 1000,
      lastAuctionPrice: 1.95,
      keyDrivers: [
        { label: 'Technical Solidity and Control', impact: 45 },
        { label: 'Innings Construction Mastery', impact: 25 },
        { label: 'Pace Acceleration Readiness', impact: 15 },
        { label: 'Subcontinent Lead Analytics', impact: 15 }
      ],
      franchiseFit: { mumbai: 60, chennai: 85, delhi: 40 },
      historicalTrend: [
        { year: 2020, value: 1.5 },
        { year: 2021, value: 1.8 },
        { year: 2022, value: 2.0 },
        { year: 2024, value: 2.10 }
      ]
    }
  },
  {
    id: 'jasprit-bumrah',
    name: 'Jasprit Bumrah',
    shortName: 'Jasprit Bumrah',
    role: 'Bowler',
    detailRole: 'Pace Bowler',
    country: 'IND',
    age: 30,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Fast',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdJ6EUPFx8SfM0xe-tkHzu_ovbTllLEj-1QtKCu6LfQ5VPOcFwjQdbQYJjUnXmvy7_cYErOAZyNMp0pKas_oENZ436k9cwWggUHoU4Y4rCTd6VeTPEj3MxE3FykwYYglgDWP6ksTb6-b2b_tL4JhTJ1_LT8LGxedfkSl6tQU_V9T6GBBHGhz0jd_PVnzU8FSFyFi4BKLy61rtVVkGSvj02oH31PiJAqXSFqNn_HUtIIhngE1_WXY8piEkN8O7WYXR-Ydb9eNTJ84xE',
    scoutScore: 95.9,
    aiConfidence: 96,
    cluster: 'Finishers',
    consistencyScore: 94,
    runRate: 5.6,
    stats: {
      T20: { matches: 62, runs: 8, wickets: 74, avg: 20.1, sr: 18.2, econ: 6.55, bpb: 5.2 },
      ODI: { matches: 89, runs: 79, wickets: 149, avg: 23.5, sr: 31.4, econ: 4.63, bpb: 14.2 },
      Test: { matches: 36, runs: 215, wickets: 159, avg: 20.2, sr: 44.8, econ: 2.74, bpb: 22.0 }
    },
    skills: { rotation: 20, paceAcc: 99, power: 40, finishing: 30, spinAcc: 10 },
    similarityMetrics: { strikeRate: 98.4, boundaryPct: 8.5, spinEconRate: 0.0, avgEntryOver: 16.5 },
    recentForm: [
      { score: 0 }, { score: 1 }, { score: 0 }, { score: 0 }, { score: 4 },
      { score: 1 }, { score: 0 }, { score: 0 }, { score: 2 }, { score: 0 }
    ],
    auction: {
      estValue: 2.50,
      basePrice: 1000,
      lastAuctionPrice: 2.20,
      keyDrivers: [
        { label: 'Death Over Decibel Control', impact: 50 },
        { label: 'Pace, Accuracy, and Yorker Rate', impact: 25 },
        { label: 'Opening Spell Breakthrough %', impact: 15 },
        { label: 'Fitness & Availability Telemetry', impact: 10 }
      ],
      franchiseFit: { mumbai: 96, chennai: 80, delhi: 70 },
      historicalTrend: [
        { year: 2020, value: 1.8 },
        { year: 2021, value: 2.0 },
        { year: 2022, value: 2.3 },
        { year: 2024, value: 2.50 }
      ]
    }
  },
  {
    id: 'smriti-mandhana',
    name: 'Smriti Mandhana',
    shortName: 'Smriti Mandhana',
    role: 'Batter',
    detailRole: 'Opening Batter',
    country: 'IND',
    age: 27,
    battingStyle: 'Left-Hand Bat',
    bowlingStyle: 'Right-Arm Medium',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfloLznULoJBmTjVNumF0RZP5C_qbxnIQC8T08UoROA-f-iR53pM7bnT724tkop6cv9SkHqmN6ZeMtSzxI1RZNgeUgwFRLZzr3v-m9FSlc1p9rxDmOs5DWUWsBZc8bOgSv5gNoVwbUFWU5EGZp1O5HYAQCJKsjfNHz87qx_PcfjYCbuXteidGbKmcbNqolD6067K5QPP2mY9ga62kWo2tjtE0K7CkpX96TPVyH0TeXb_H9hq27F8HIPkwJF1XB245EHrmd9p8pm4dD',
    scoutScore: 94.5,
    aiConfidence: 85,
    cluster: 'Aggressive Openers',
    consistencyScore: 82,
    runRate: 8.5,
    stats: {
      T20: { matches: 116, runs: 2802, wickets: 0, avg: 27.5, sr: 122.5, econ: 0, bpb: 5.5 },
      ODI: { matches: 77, runs: 3073, wickets: 0, avg: 43.3, sr: 83.9, econ: 0, bpb: 9.8 },
      Test: { matches: 4, runs: 325, wickets: 0, avg: 46.4, sr: 59.5, econ: 0, bpb: 18.2 }
    },
    skills: { rotation: 90, paceAcc: 88, power: 80, finishing: 75, spinAcc: 86 },
    similarityMetrics: { strikeRate: 122.5, boundaryPct: 15.0, spinEconRate: 0.0, avgEntryOver: 0.5 },
    recentForm: [
      { score: 18 }, { score: 45 }, { score: 12 }, { score: 80, isNotOut: true }, { score: 3 },
      { score: 26 }, { score: 104 }, { score: 8 }, { score: 42 }, { score: 19 }
    ],
    auction: {
      estValue: 1.65,
      basePrice: 500,
      lastAuctionPrice: 1.50,
      keyDrivers: [
        { label: 'Powerplay Exploitation Pct', impact: 45 },
        { label: 'Left-Hand Advantage Balance', impact: 25 },
        { label: 'Captaincy Advisory Potency', impact: 15 },
        { label: 'Consistency Matrix Ratings', impact: 15 }
      ],
      franchiseFit: { mumbai: 65, chennai: 82, delhi: 75 },
      historicalTrend: [
        { year: 2020, value: 1.0 },
        { year: 2021, value: 1.2 },
        { year: 2022, value: 1.4 },
        { year: 2024, value: 1.65 }
      ]
    }
  },
  {
    id: 'glenn-maxwell',
    name: 'Glenn Maxwell',
    shortName: 'Glenn Maxwell',
    role: 'All-rounder',
    detailRole: 'Off-Spinning Finisher',
    country: 'AUS',
    age: 35,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Off Break',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO9z5-0ncBHTCpWhJSmFepP50fQyI4VjbYpNzxhHcgd4_qnISo9dGDPucv8iqsMugcVoCYiEnFBoQccwMrvXep85BifOM0E6nMnCmquoKxw1GQOwrtGmuv2FT-4mLsG7asGa_mg9g7oZqjihS5Q3XSLT_1_l_V7MEfRdgb2g7jEhugA7B4s8VdvoQBghnbS2YnZk_Vqa9wwT6exGCcqy2F8SE4J1eWBByYy5geFtR-F_9_T0DUzQQWGAj9s-hBeFANoam-gMSBxdss',
    scoutScore: 94.0,
    aiConfidence: 91,
    cluster: 'Finishers',
    consistencyScore: 45,
    runRate: 9.4,
    stats: {
      T20: { matches: 98, runs: 2154, wickets: 39, avg: 29.5, sr: 153.4, econ: 7.42, bpb: 4.5 },
      ODI: { matches: 138, runs: 3895, wickets: 64, avg: 35.4, sr: 125.2, econ: 5.56, bpb: 7.2 },
      Test: { matches: 7, runs: 339, wickets: 8, avg: 26.1, sr: 70.2, econ: 3.45, bpb: 12.0 }
    },
    skills: { rotation: 80, paceAcc: 90, power: 98, finishing: 96, spinAcc: 92 },
    similarityMetrics: { strikeRate: 153.4, boundaryPct: 22.1, spinEconRate: 7.42, avgEntryOver: 11.2 },
    recentForm: [
      { score: 55, isNotOut: true }, { score: 12 }, { score: 104, isNotOut: true }, { score: 0 }, { score: 8 },
      { score: 41 }, { score: 16 }, { score: 1 }, { score: 49 }, { score: 32 }
    ],
    auction: {
      estValue: 1.95,
      basePrice: 1000,
      lastAuctionPrice: 1.85,
      keyDrivers: [
        { label: 'Exorbitant Death Power Factor', impact: 40 },
        { label: 'Economical Powerplay Off-Spin', impact: 30 },
        { label: 'Clutch Run-Chase Velocity', impact: 20 },
        { label: 'Fielding Athleticism Metric', impact: 10 }
      ],
      franchiseFit: { mumbai: 75, chennai: 85, delhi: 30 },
      historicalTrend: [
        { year: 2020, value: 1.5 },
        { year: 2021, value: 1.7 },
        { year: 2022, value: 1.85 },
        { year: 2024, value: 1.95 }
      ]
    }
  },
  {
    id: 'liam-livingstone',
    name: 'Liam Livingstone',
    shortName: 'L. Livingstone',
    role: 'All-rounder',
    detailRole: 'Batting All-Rounder',
    country: 'ENG',
    age: 30,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Leg Break / Off Break',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfloLznULoJBmTjVNumF0RZP5C_qbxnIQC8T08UoROA-f-iR53pM7bnT724tkop6cv9SkHqmN6ZeMtSzxI1RZNgeUgwFRLZzr3v-m9FSlc1p9rxDmOs5DWUWsBZc8bOgSv5gNoVwbUFWU5EGZp1O5HYAQCJKsjfNHz87qx_PcfjYCbuXteidGbKmcbNqolD6067K5QPP2mY9ga62kWo2tjtE0K7CkpX96TPVyH0TeXb_H9hq27F8HIPkwJF1XB245EHrmd9p8pm4dD',
    scoutScore: 92.4,
    aiConfidence: 86,
    cluster: 'Finishers',
    consistencyScore: 35,
    runRate: 9.8,
    stats: {
      T20: { matches: 38, runs: 650, wickets: 18, avg: 22.5, sr: 147.9, econ: 7.89, bpb: 4.8 },
      ODI: { matches: 25, runs: 550, wickets: 12, avg: 30.2, sr: 112.5, econ: 5.80, bpb: 8.0 },
      Test: { matches: 1, runs: 9, wickets: 0, avg: 9.0, sr: 60.0, econ: 0, bpb: 12.0 }
    },
    skills: { rotation: 75, paceAcc: 88, power: 96, finishing: 92, spinAcc: 90 },
    similarityMetrics: { strikeRate: 147.9, boundaryPct: 24.5, spinEconRate: 7.89, avgEntryOver: 10.8 },
    recentForm: [
      { score: 18 }, { score: 72 }, { score: 32 }, { score: 0 }, { score: 56, isNotOut: true },
      { score: 14 }, { score: 4 }, { score: 9 }, { score: 45 }, { score: 21 }
    ],
    auction: {
      estValue: 1.55,
      basePrice: 750,
      lastAuctionPrice: 1.40,
      keyDrivers: [
        { label: 'Boundary Percentage Output', impact: 45 },
        { label: 'Dual Spin Type Delivery Variant', impact: 25 },
        { label: 'Lower Middle Order Finisher Value', impact: 20 },
        { label: 'Aggressive Counter-Press Ratio', impact: 10 }
      ],
      franchiseFit: { mumbai: 60, chennai: 75, delhi: 45 },
      historicalTrend: [
        { year: 2020, value: 0.8 },
        { year: 2021, value: 1.1 },
        { year: 2022, value: 1.35 },
        { year: 2024, value: 1.55 }
      ]
    }
  },
  {
    id: 'marcus-stoinis',
    name: 'Marcus Stoinis',
    shortName: 'Marcus Stoinis',
    role: 'All-rounder',
    detailRole: 'Batting All-Rounder',
    country: 'AUS',
    age: 34,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Fast-Medium',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfloLznULoJBmTjVNumF0RZP5C_qbxnIQC8T08UoROA-f-iR53pM7bnT724tkop6cv9SkHqmN6ZeMtSzxI1RZNgeUgwFRLZzr3v-m9FSlc1p9rxDmOs5DWUWsBZc8bOgSv5gNoVwbUFWU5EGZp1O5HYAQCJKsjfNHz87qx_PcfjYCbuXteidGbKmcbNqolD6067K5QPP2mY9ga62kWo2tjtE0K7CkpX96TPVyH0TeXb_H9hq27F8HIPkwJF1XB245EHrmd9p8pm4dD',
    scoutScore: 88.7,
    aiConfidence: 81,
    cluster: 'Finishers',
    consistencyScore: 38,
    runRate: 8.8,
    stats: {
      T20: { matches: 57, runs: 934, wickets: 25, avg: 29.1, sr: 145.2, econ: 8.55, bpb: 5.1 },
      ODI: { matches: 70, runs: 1400, wickets: 44, avg: 27.5, sr: 95.0, econ: 5.92, bpb: 10.2 },
      Test: { matches: 0, runs: 0, wickets: 0, avg: 0, sr: 0, econ: 0, bpb: 0 }
    },
    skills: { rotation: 70, paceAcc: 85, power: 94, finishing: 89, spinAcc: 75 },
    similarityMetrics: { strikeRate: 145.2, boundaryPct: 20.8, spinEconRate: 8.55, avgEntryOver: 12.0 },
    recentForm: [
      { score: 22 }, { score: 45, isNotOut: true }, { score: 1 }, { score: 18 }, { score: 9 },
      { score: 34 }, { score: 62 }, { score: 0 }, { score: 15 }, { score: 3 }
    ],
    auction: {
      estValue: 1.35,
      basePrice: 500,
      lastAuctionPrice: 1.20,
      keyDrivers: [
        { label: 'Pace Bowling Utility', impact: 35 },
        { label: 'Brutal Lower Order Finisher Rate', impact: 35 },
        { label: 'Clutch Performance In Major Tourneys', impact: 20 },
        { label: 'Physicality & Match Endurance Metrics', impact: 10 }
      ],
      franchiseFit: { mumbai: 80, chennai: 50, delhi: 65 },
      historicalTrend: [
        { year: 2020, value: 0.9 },
        { year: 2021, value: 1.1 },
        { year: 2022, value: 1.25 },
        { year: 2024, value: 1.35 }
      ]
    }
  },
  {
    id: 'aiden-markram',
    name: 'Aiden Markram',
    shortName: 'Aiden Markram',
    role: 'Batter',
    detailRole: 'Batting All-Rounder',
    country: 'RSA',
    age: 29,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Off Break',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfloLznULoJBmTjVNumF0RZP5C_qbxnIQC8T08UoROA-f-iR53pM7bnT724tkop6cv9SkHqmN6ZeMtSzxI1RZNgeUgwFRLZzr3v-m9FSlc1p9rxDmOs5DWUWsBZc8bOgSv5gNoVwbUFWU5EGZp1O5HYAQCJKsjfNHz87qx_PcfjYCbuXteidGbKmcbNqolD6067K5QPP2mY9ga62kWo2tjtE0K7CkpX96TPVyH0TeXb_H9hq27F8HIPkwJF1XB245EHrmd9p8pm4dD',
    scoutScore: 85.1,
    aiConfidence: 80,
    cluster: 'Anchor Middle Order',
    consistencyScore: 72,
    runRate: 8.1,
    stats: {
      T20: { matches: 39, runs: 1150, wickets: 10, avg: 38.3, sr: 139.8, econ: 7.20, bpb: 6.5 },
      ODI: { matches: 65, runs: 2100, wickets: 18, avg: 36.5, sr: 92.4, econ: 5.40, bpb: 11.2 },
      Test: { matches: 37, runs: 2300, wickets: 2, avg: 35.8, sr: 59.8, econ: 3.10, bpb: 20.0 }
    },
    skills: { rotation: 92, paceAcc: 85, power: 82, finishing: 85, spinAcc: 88 },
    similarityMetrics: { strikeRate: 139.8, boundaryPct: 17.5, spinEconRate: 7.20, avgEntryOver: 5.5 },
    recentForm: [
      { score: 14 }, { score: 85 }, { score: 10 }, { score: 42 }, { score: 51, isNotOut: true },
      { score: 3 }, { score: 18 }, { score: 104 }, { score: 12 }, { score: 37 }
    ],
    auction: {
      estValue: 1.25,
      basePrice: 500,
      lastAuctionPrice: 1.15,
      keyDrivers: [
        { label: 'Captaincy Leadership Credentials', impact: 40 },
        { label: 'Anchor Integration Stability', impact: 30 },
        { label: 'Off-Spin Option Exploitation', impact: 20 },
        { label: 'Sustained Strike-Rate Multipliers', impact: 10 }
      ],
      franchiseFit: { mumbai: 55, chennai: 80, delhi: 45 },
      historicalTrend: [
        { year: 2020, value: 0.7 },
        { year: 2021, value: 0.95 },
        { year: 2022, value: 1.10 },
        { year: 2024, value: 1.25 }
      ]
    }
  },
  {
    id: 'moeen-ali',
    name: 'Moeen Ali',
    shortName: 'Moeen Ali',
    role: 'All-rounder',
    detailRole: 'All-Rounder',
    country: 'ENG',
    age: 36,
    battingStyle: 'Left-Hand Bat',
    bowlingStyle: 'Right-Arm Off Break',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfloLznULoJBmTjVNumF0RZP5C_qbxnIQC8T08UoROA-f-iR53pM7bnT724tkop6cv9SkHqmN6ZeMtSzxI1RZNgeUgwFRLZzr3v-m9FSlc1p9rxDmOs5DWUWsBZc8bOgSv5gNoVwbUFWU5EGZp1O5HYAQCJKsjfNHz87qx_PcfjYCbuXteidGbKmcbNqolD6067K5QPP2mY9ga62kWo2tjtE0K7CkpX96TPVyH0TeXb_H9hq27F8HIPkwJF1XB245EHrmd9p8pm4dD',
    scoutScore: 81.0,
    aiConfidence: 75,
    cluster: 'Anchor Middle Order',
    consistencyScore: 68,
    runRate: 7.9,
    stats: {
      T20: { matches: 82, runs: 1120, wickets: 45, avg: 22.1, sr: 133.5, econ: 7.90, bpb: 6.8 },
      ODI: { matches: 138, runs: 2350, wickets: 109, avg: 25.4, sr: 99.2, econ: 5.25, bpb: 10.5 },
      Test: { matches: 68, runs: 3094, wickets: 204, avg: 28.2, sr: 52.0, econ: 3.20, bpb: 22.0 }
    },
    skills: { rotation: 80, paceAcc: 78, power: 85, finishing: 78, spinAcc: 90 },
    similarityMetrics: { strikeRate: 133.5, boundaryPct: 15.5, spinEconRate: 7.90, avgEntryOver: 6.2 },
    recentForm: [
      { score: 5 }, { score: 18 }, { score: 12 }, { score: 33 }, { score: 45, isNotOut: true },
      { score: 0 }, { score: 26 }, { score: 8 }, { score: 1 }, { score: 12 }
    ],
    auction: {
      estValue: 1.05,
      basePrice: 500,
      lastAuctionPrice: 0.95,
      keyDrivers: [
        { label: 'Offespinner Strategic Exploits', impact: 40 },
        { label: 'Spin Accrual Match Setup Pct', impact: 25 },
        { label: 'Left Hand Utility Dispersion', impact: 20 },
        { label: 'Valued Experience Factor', impact: 15 }
      ],
      franchiseFit: { mumbai: 50, chennai: 92, delhi: 35 },
      historicalTrend: [
        { year: 2020, value: 0.6 },
        { year: 2021, value: 0.8 },
        { year: 2022, value: 0.95 },
        { year: 2024, value: 1.05 }
      ]
    }
  },
  {
    id: 'joe-root',
    name: 'Joe Root',
    shortName: 'Joe Root',
    role: 'Batter',
    detailRole: 'ENG • Top Order Anchor',
    country: 'ENG',
    age: 33,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Off Break',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdJ6EUPFx8SfM0xe-tkHzu_ovbTllLEj-1QtKCu6LfQ5VPOcFwjQdbQYJjUnXmvy7_cYErOAZyNMp0pKas_oENZ436k9cwWggUHoU4Y4rCTd6VeTPEj3MxE3FykwYYglgDWP6ksTb6-b2b_tL4JhTJ1_LT8LGxedfkSl6tQU_V9T6GBBHGhz0jd_PVnzU8FSFyFi4BKLy61rtVVkGSvj02oH31PiJAqXSFqNn_HUtIIhngE1_WXY8piEkN8O7WYXR-Ydb9eNTJ84xE',
    scoutScore: 88.0,
    aiConfidence: 89,
    cluster: 'Anchor Middle Order',
    consistencyScore: 92,
    runRate: 6.8,
    stats: {
      T20: { matches: 32, runs: 893, wickets: 6, avg: 35.7, sr: 126.3, econ: 6.8, bpb: 8.5 },
      ODI: { matches: 171, runs: 6522, wickets: 26, avg: 47.6, sr: 83.8, econ: 5.6, bpb: 12.8 },
      Test: { matches: 140, runs: 11737, wickets: 68, avg: 49.7, sr: 56.5, econ: 3.1, bpb: 25.2 }
    },
    skills: { rotation: 99, paceAcc: 94, power: 65, finishing: 78, spinAcc: 95 },
    similarityMetrics: { strikeRate: 126.3, boundaryPct: 12.8, spinEconRate: 6.8, avgEntryOver: 3.2 },
    recentForm: [
      { score: 45 }, { score: 103, isNotOut: true }, { score: 14 }, { score: 55 }, { score: 18 },
      { score: 72 }, { score: 1 }, { score: 50 }, { score: 37 }, { score: 26 }
    ],
    auction: {
      estValue: 1.15,
      basePrice: 500,
      lastAuctionPrice: 0.90,
      keyDrivers: [
        { label: 'Exceptional Anchoring Potential', impact: 45 },
        { label: 'Pace Acceleration & Stroke Play', impact: 25 },
        { label: 'Useful Offspin Delivery Option', impact: 15 },
        { label: 'Championship Leadership Stability', impact: 15 }
      ],
      franchiseFit: { mumbai: 45, chennai: 85, delhi: 60 },
      historicalTrend: [
        { year: 2020, value: 0.7 },
        { year: 2021, value: 0.82 },
        { year: 2022, value: 1.0 },
        { year: 2024, value: 1.15 }
      ]
    }
  },
  {
    id: 'kane-williamson',
    name: 'Kane Williamson',
    shortName: 'Kane Williamson',
    role: 'Batter',
    detailRole: 'NZ • Top Order Anchor',
    country: 'NZ',
    age: 33,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Off Break',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcW-h3O8t-mToeZ9000wu_fVQb2UPESZimLMyZZqR7dNaqivsyBuRsFziBcrl0_LYUFqQn_7GJ0q-TmvmgtBenpDUSLh3XMbAHwUDf4sa2Gz6yAmXisTwupuWogf4tC6Ymz4XamxEzohB9z0JgV1cA4MPhJ29b14SAKtsstvGVbNlZzzjxr75dutj2v7ASkpIMbi-lEKWrEHruK4vXnK1z5vIbMl5GW-Q-EsuZwr6ByAjSdozla6eKwUxh2mNB09gI4VQUbHYbjQdk',
    scoutScore: 85.0,
    aiConfidence: 87,
    cluster: 'Anchor Middle Order',
    consistencyScore: 90,
    runRate: 6.5,
    stats: {
      T20: { matches: 89, runs: 2547, wickets: 0, avg: 33.3, sr: 123.0, econ: 0, bpb: 8.8 },
      ODI: { matches: 165, runs: 6810, wickets: 7, avg: 48.6, sr: 81.2, econ: 5.4, bpb: 14.5 },
      Test: { matches: 100, runs: 8743, wickets: 30, avg: 54.4, sr: 51.2, econ: 2.9, bpb: 28.0 }
    },
    skills: { rotation: 97, paceAcc: 90, power: 60, finishing: 75, spinAcc: 93 },
    similarityMetrics: { strikeRate: 123.0, boundaryPct: 11.2, spinEconRate: 0, avgEntryOver: 1.8 },
    recentForm: [
      { score: 32 }, { score: 85, isNotOut: true }, { score: 14 }, { score: 72 }, { score: 45 },
      { score: 10 }, { score: 2 }, { score: 104, isNotOut: true }, { score: 18 }, { score: 55 }
    ],
    auction: {
      estValue: 1.10,
      basePrice: 500,
      lastAuctionPrice: 0.95,
      keyDrivers: [
        { label: 'Absolute Leadership Authority', impact: 45 },
        { label: 'Subcontinent Spin Neutralization', impact: 25 },
        { label: 'Middle Order Accumulator Score', impact: 15 },
        { label: 'Low Risk Execution Track Record', impact: 15 }
      ],
      franchiseFit: { mumbai: 40, chennai: 88, delhi: 55 },
      historicalTrend: [
        { year: 2020, value: 0.8 },
        { year: 2021, value: 0.95 },
        { year: 2022, value: 1.05 },
        { year: 2024, value: 1.10 }
      ]
    }
  },
  {
    id: 'jonny-bairstow',
    name: 'Jonny Bairstow',
    shortName: 'J. Bairstow',
    role: 'Batter',
    detailRole: 'Opening Aggressor / Wicketkeeper',
    country: 'ENG',
    age: 34,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'None',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfloLznULoJBmTjVNumF0RZP5C_qbxnIQC8T08UoROA-f-iR53pM7bnT724tkop6cv9SkHqmN6ZeMtSzxI1RZNgeUgwFRLZzr3v-m9FSlc1p9rxDmOs5DWUWsBZc8bOgSv5gNoVwbUFWU5EGZp1O5HYAQCJKsjfNHz87qx_PcfjYCbuXteidGbKmcbNqolD6067K5QPP2mY9ga62kWo2tjtE0K7CkpX96TPVyH0TeXb_H9hq27F8HIPkwJF1XB245EHrmd9p8pm4dD',
    scoutScore: 91.0,
    aiConfidence: 84,
    cluster: 'Aggressive Openers',
    consistencyScore: 82,
    runRate: 9.4,
    stats: {
      T20: { matches: 70, runs: 1475, wickets: 0, avg: 30.1, sr: 137.8, econ: 0, bpb: 5.2 },
      ODI: { matches: 107, runs: 3868, wickets: 0, avg: 42.5, sr: 103.5, econ: 0, bpb: 9.1 },
      Test: { matches: 100, runs: 6025, wickets: 0, avg: 36.4, sr: 58.0, econ: 0, bpb: 18.0 }
    },
    skills: { rotation: 80, paceAcc: 92, power: 90, finishing: 78, spinAcc: 85 },
    similarityMetrics: { strikeRate: 137.8, boundaryPct: 18.5, spinEconRate: 0, avgEntryOver: 0.4 },
    recentForm: [
      { score: 45 }, { score: 12 }, { score: 8 }, { score: 82 }, { score: 9 },
      { score: 35 }, { score: 104, isNotOut: true }, { score: 0 }, { score: 18 }, { score: 55 }
    ],
    auction: {
      estValue: 1.45,
      basePrice: 750,
      lastAuctionPrice: 1.30,
      keyDrivers: [
        { label: 'Opening Powerplay Blaster', impact: 45 },
        { label: 'Wicketkeeping Dual Capability', impact: 25 },
        { label: 'High Intensity Chasing Quotient', impact: 20 },
        { label: 'Engage and Counter pacers', impact: 10 }
      ],
      franchiseFit: { mumbai: 70, chennai: 65, delhi: 80 },
      historicalTrend: [
        { year: 2020, value: 0.9 },
        { year: 2021, value: 1.15 },
        { year: 2022, value: 1.30 },
        { year: 2024, value: 1.45 }
      ]
    }
  },
  {
    id: 'phil-salt',
    name: 'Phil Salt',
    shortName: 'P. Salt',
    role: 'Batter',
    detailRole: 'Opening Aggressor / Wicketkeeper',
    country: 'ENG',
    age: 27,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'None',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfloLznULoJBmTjVNumF0RZP5C_qbxnIQC8T08UoROA-f-iR53pM7bnT724tkop6cv9SkHqmN6ZeMtSzxI1RZNgeUgwFRLZzr3v-m9FSlc1p9rxDmOs5DWUWsBZc8bOgSv5gNoVwbUFWU5EGZp1O5HYAQCJKsjfNHz87qx_PcfjYCbuXteidGbKmcbNqolD6067K5QPP2mY9ga62kWo2tjtE0K7CkpX96TPVyH0TeXb_H9hq27F8HIPkwJF1XB245EHrmd9p8pm4dD',
    scoutScore: 92.0,
    aiConfidence: 82,
    cluster: 'Aggressive Openers',
    consistencyScore: 78,
    runRate: 10.1,
    stats: {
      T20: { matches: 21, runs: 639, wickets: 0, avg: 35.5, sr: 165.8, econ: 0, bpb: 4.1 },
      ODI: { matches: 19, runs: 620, wickets: 0, avg: 34.4, sr: 125.0, econ: 0, bpb: 6.5 },
      Test: { matches: 0, runs: 0, wickets: 0, avg: 0, sr: 0, econ: 0, bpb: 0 }
    },
    skills: { rotation: 75, paceAcc: 95, power: 92, finishing: 70, spinAcc: 82 },
    similarityMetrics: { strikeRate: 165.8, boundaryPct: 22.8, spinEconRate: 0, avgEntryOver: 0.2 },
    recentForm: [
      { score: 100, isNotOut: true }, { score: 12 }, { score: 5 }, { score: 38 }, { score: 119 },
      { score: 4 }, { score: 26 }, { score: 8 }, { score: 42 }, { score: 19 }
    ],
    auction: {
      estValue: 1.60,
      basePrice: 500,
      lastAuctionPrice: 1.10,
      keyDrivers: [
        { label: 'Brutal Powerplay Strike Rate', impact: 50 },
        { label: 'Wicketkeeping Acceleration', impact: 20 },
        { label: 'Rapid Century Conversion Odds', impact: 20 },
        { label: 'Fearless Backfoot Pull Speed', impact: 10 }
      ],
      franchiseFit: { mumbai: 75, chennai: 45, delhi: 90 },
      historicalTrend: [
        { year: 2020, value: 0.4 },
        { year: 2021, value: 0.7 },
        { year: 2022, value: 1.10 },
        { year: 2024, value: 1.60 }
      ]
    }
  },
  {
    id: 'travis-head',
    name: 'Travis Head',
    shortName: 'T. Head',
    role: 'Batter',
    detailRole: 'Opening Aggressor',
    country: 'AUS',
    age: 30,
    battingStyle: 'Left-Hand Bat',
    bowlingStyle: 'Right-Arm Off Break',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfloLznULoJBmTjVNumF0RZP5C_qbxnIQC8T08UoROA-f-iR53pM7bnT724tkop6cv9SkHqmN6ZeMtSzxI1RZNgeUgwFRLZzr3v-m9FSlc1p9rxDmOs5DWUWsBZc8bOgSv5gNoVwbUFWU5EGZp1O5HYAQCJKsjfNHz87qx_PcfjYCbuXteidGbKmcbNqolD6067K5QPP2mY9ga62kWo2tjtE0K7CkpX96TPVyH0TeXb_H9hq27F8HIPkwJF1XB245EHrmd9p8pm4dD',
    scoutScore: 94.8,
    aiConfidence: 93,
    cluster: 'Aggressive Openers',
    consistencyScore: 75,
    runRate: 10.2,
    stats: {
      T20: { matches: 26, runs: 654, wickets: 4, avg: 29.5, sr: 158.7, econ: 8.5, bpb: 4.3 },
      ODI: { matches: 64, runs: 2393, wickets: 18, avg: 41.5, sr: 101.5, econ: 5.5, bpb: 8.5 },
      Test: { matches: 49, runs: 3173, wickets: 6, avg: 42.8, sr: 64.5, econ: 3.2, bpb: 14.0 }
    },
    skills: { rotation: 80, paceAcc: 98, power: 96, finishing: 80, spinAcc: 85 },
    similarityMetrics: { strikeRate: 158.7, boundaryPct: 23.4, spinEconRate: 8.5, avgEntryOver: 0.1 },
    recentForm: [
      { score: 137, isNotOut: false }, { score: 12 }, { score: 45 }, { score: 80 }, { score: 0 },
      { score: 1 }, { score: 104, isNotOut: true }, { score: 28 }, { score: 55 }, { score: 19 }
    ],
    auction: {
      estValue: 2.20,
      basePrice: 1000,
      lastAuctionPrice: 1.50,
      keyDrivers: [
        { label: 'Brutal ICC Tournament Final Clutch', impact: 45 },
        { label: 'Opening Powerplay Boundary Pct', impact: 30 },
        { label: 'Left-Hand Explosive Advantage', impact: 15 },
        { label: 'Useful Finger Spin Deliveries', impact: 10 }
      ],
      franchiseFit: { mumbai: 80, chennai: 70, delhi: 85 },
      historicalTrend: [
        { year: 2020, value: 0.6 },
        { year: 2021, value: 0.9 },
        { year: 2022, value: 1.30 },
        { year: 2024, value: 2.20 }
      ]
    }
  },
  {
    id: 'rohit-sharma',
    name: 'Rohit Sharma',
    shortName: 'R. Sharma',
    role: 'Batter',
    detailRole: 'Opening Aggressor / captain',
    country: 'IND',
    age: 37,
    battingStyle: 'Right-Hand Bat',
    bowlingStyle: 'Right-Arm Off Break',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfloLznULoJBmTjVNumF0RZP5C_qbxnIQC8T08UoROA-f-iR53pM7bnT724tkop6cv9SkHqmN6ZeMtSzxI1RZNgeUgwFRLZzr3v-m9FSlc1p9rxDmOs5DWUWsBZc8bOgSv5gNoVwbUFWU5EGZp1O5HYAQCJKsjfNHz87qx_PcfjYCbuXteidGbKmcbNqolD6067K5QPP2mY9ga62kWo2tjtE0K7CkpX96TPVyH0TeXb_H9hq27F8HIPkwJF1XB245EHrmd9p8pm4dD',
    scoutScore: 95.1,
    aiConfidence: 94,
    cluster: 'Aggressive Openers',
    consistencyScore: 85,
    runRate: 8.8,
    stats: {
      T20: { matches: 151, runs: 3974, wickets: 1, avg: 31.5, sr: 139.9, econ: 8.0, bpb: 5.8 },
      ODI: { matches: 262, runs: 10709, wickets: 8, avg: 49.1, sr: 91.8, econ: 5.2, bpb: 10.4 },
      Test: { matches: 59, runs: 4137, wickets: 2, avg: 45.4, sr: 56.2, econ: 0, bpb: 22.0 }
    },
    skills: { rotation: 92, paceAcc: 94, power: 95, finishing: 88, spinAcc: 89 },
    similarityMetrics: { strikeRate: 139.9, boundaryPct: 18.2, spinEconRate: 0, avgEntryOver: 0.1 },
    recentForm: [
      { score: 121, isNotOut: true }, { score: 1 }, { score: 23 }, { score: 0 }, { score: 55 },
      { score: 40 }, { score: 13 }, { score: 4 }, { score: 87, isNotOut: false }, { score: 19 }
    ],
    auction: {
      estValue: 1.90,
      basePrice: 1000,
      lastAuctionPrice: 2.05,
      keyDrivers: [
        { label: 'Captaincy Advisory Authority', impact: 40 },
        { label: 'Innings Launchpad Powerplay SR', impact: 35 },
        { label: 'Pull and Hook Accuracy Quotient', impact: 15 },
        { label: 'Subcontinent Domination Ratings', impact: 10 }
      ],
      franchiseFit: { mumbai: 60, chennai: 85, delhi: 70 },
      historicalTrend: [
        { year: 2020, value: 2.1 },
        { year: 2021, value: 2.1 },
        { year: 2022, value: 2.05 },
        { year: 2024, value: 1.90 }
      ]
    }
  }
];

export const INITIAL_REPORTS = [
  {
    id: 'report-1',
    title: 'MI vs CSK - Tactics Brief',
    target: 'Mumbai Indians (IPL)',
    type: 'Pre-Match',
    date: 'Today',
    time: '09:41 AM',
    content: {
      executiveSummary: 'Analysis indicates a high probability of CSK utilizing spin choke during middle overs (7-15) based on historical data at Wankhede. MIs optimal counter-strategy involves promoting left-handed batters to disrupt line and length.',
      keytacticalMatchups: [
        {
          matchup: 'R. Sharma vs D. Chahar',
          badge: 'High Risk',
          badgeColor: 'error',
          assessment: 'Chahar attacks stumps early. Strike rate drops to 112 vs inswinging deliveries in PP. Suggestion: Aggressive running to rotate strike early.'
        },
        {
          matchup: 'S. Yadav vs R. Jadeja',
          badge: 'Advantage MI',
          badgeColor: 'primary',
          assessment: 'S. Yadav sweeps effectively. SR 165+ against left-arm orthodox. Look to maximize boundaries behind square in overs 11-14.'
        }
      ],
      pitchAnalysis: 'The pitch has shown higher moisture content, pointing to early assist for swing bowlers (first 4 overs). However, as the temperature rises, cracks will dry, offering high spin-assist from over 8 onwards. Average target score: 172.',
      selectedXI: [
        { player: 'I. Kishan (wk)', role: 'Top Order / Aggressor', confidence: 92 },
        { player: 'T. Varma', role: 'Middle Order / Anchor', confidence: 88 },
        { player: 'J. Bumrah', role: 'Death Bowler (Pace)', confidence: 98 }
      ]
    }
  },
  {
    id: 'report-2',
    title: 'J. Bumrah - Death Overs Analysis',
    target: 'Jasprit Bumrah',
    type: 'Player Focus',
    date: 'Yesterday',
    content: {
      executiveSummary: 'This paper examines Jasprit Bumrahs death overs consistency index across international tournaments. Bumrah maintains an unmatched dot-ball percentage of 42.1% under high pressure scenarios, primarily leaning on tight, block-hole yorkers and off-cutter variations.',
      keytacticalMatchups: [
        {
          matchup: 'Bumrah Off-cutter vs RHB',
          badge: 'Elite Control',
          badgeColor: 'primary',
          assessment: 'His creeping off-cutter has an astronomical 32% miss rate when bowled on a back-of-a-length outside off.'
        }
      ],
      pitchAnalysis: 'Generally effective regardless of pitch decay. However, hard surfaces with high carry maximize his heavy-ball delivery impact.',
      selectedXI: [
        { player: 'J. Bumrah', role: 'Death Specialist', confidence: 99 }
      ]
    }
  },
  {
    id: 'report-3',
    title: 'Powerplay Strategy v Spinners',
    target: 'Select Team/Region',
    type: 'Tactical',
    date: 'Oct 12, 2023',
    content: {
      executiveSummary: 'A league-wide assessment of boundary frequencies against wrist spin in the first 6 overs. Data shows a 14% increase in boundary rates when using reverse-sweeps and switch-hits over standard cover drives on slower tracks.',
      keytacticalMatchups: [
        {
          matchup: 'Wrist Spin vs Reverse Sweep',
          badge: 'High Success',
          badgeColor: 'tertiary',
          assessment: 'Slower, loopy deliveries are highly susceptible to pre-meditated reverse sweeps on flat subcontinental turning tracks.'
        }
      ],
      pitchAnalysis: 'Flat, dry pitches with minimal green grass are extremely conducive to slow, early spin options to choke runs.',
      selectedXI: [
        { player: 'Glenn Maxwell', role: 'Spin Destructor', confidence: 94 }
      ]
    }
  }
];
