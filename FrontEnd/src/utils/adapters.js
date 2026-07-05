/**
 * Transforms a real API player document into the shape
 * the existing frontend components expect.
 */
export function adaptPlayer(p) {
  return {
    // Identity
    id:           p.player_id,
    player_id:    p.player_id,
    name:         p.name,
    shortName:    p.name,
    team:         p.team,
    role:         p.role,
    age:          p.age,

    // Frontend expects these fields
    country:      p.team,           // show team name where country was shown
    detailRole:   `${p.team} • ${p.role}`,
    battingStyle: `${p.role}`,
    bowlingStyle: p.bowling?.wickets > 0 ? 'Right-Arm' : 'N/A',
    avatarUrl: `https://api.dicebear.com/7.x/initials/png?seed=${encodeURIComponent(p.name)}&backgroundColor=0f172a&textColor=00d4aa&fontSize=38`,             // no avatars yet

    // Scouting
    scoutScore:   p.scouting?.overall_score ?? 0,
    aiConfidence: p.scouting?.consistency_score ?? 0,
    cluster:      p.playing_style ?? 'Unknown',
    consistencyScore: p.scouting?.consistency_score ?? 0,

    // Stats — map flat batting/bowling to nested stats.T20 shape
    stats: {
      T20: {
        matches:  p.batting?.matches ?? 0,
        runs:     p.batting?.runs ?? 0,
        wickets:  p.bowling?.wickets ?? 0,
        avg:      p.batting?.average ?? 0,
        sr:       p.batting?.strike_rate ?? 0,
        econ:     p.bowling?.economy ?? 0,
        bpb:      0,
      },
      ODI:  { matches: 0, runs: 0, wickets: 0, avg: 0, sr: 0, econ: 0, bpb: 0 },
      Test: { matches: 0, runs: 0, wickets: 0, avg: 0, sr: 0, econ: 0, bpb: 0 },
    },

    // Skills radar — derived from scouting scores
    skills: {
      rotation:  Math.round(p.scouting?.batting_score ?? 0),
      paceAcc:   Math.round(p.scouting?.bowling_score ?? 0),
      power:     Math.round((p.batting?.strike_rate ?? 0) / 2.2),
      finishing: Math.round(p.scouting?.consistency_score ?? 0),
      spinAcc:   Math.round(p.scouting?.fielding_score ?? 0),
    },

    // Auction
    auction: {
    estValue:         p.auction?.auction_points ?? 0,
    basePrice:        p.auction?.breakdown?.base_points ?? 0,
    lastAuctionPrice: p.auction?.auction_points ?? 0,
    keyDrivers: [
      { label: 'Base Score',        impact: p.auction?.breakdown?.base_points ?? 0 },
      { label: 'Role Bonus',        impact: p.auction?.breakdown?.role_bonus ?? 0 },
      { label: 'Age Bonus',         impact: p.auction?.breakdown?.age_bonus ?? 0 },
      { label: 'Consistency Bonus', impact: p.auction?.breakdown?.consistency_bonus ?? 0 },
    ],
    franchiseFit: {
    mumbai:  Math.round(p.scouting?.batting_score ?? 0),
    chennai: Math.round(p.scouting?.bowling_score ?? 0),
    delhi:   Math.round(p.scouting?.fielding_score ?? 0),
    },
    historicalTrend: [
      { year: 2024, value: p.auction?.auction_points ?? 0 }
    ],
  },

    // Recent form placeholder
    recentForm: [],

    // Similarity placeholder
    similarityMetrics: {
      strikeRate:    p.batting?.strike_rate ?? 0,
      boundaryPct:   0,
      spinEconRate:  p.bowling?.economy ?? 0,
      avgEntryOver:  0,
    },

    // Raw API data (keep original for reference)
    _raw: p,
  };
}

export function adaptPlayers(players) {
  return players.map(adaptPlayer);
}