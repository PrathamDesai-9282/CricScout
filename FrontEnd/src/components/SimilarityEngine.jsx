import React, { useState } from 'react';
import { Compass, Sparkles, AlertCircle, Layers } from 'lucide-react';

export const SimilarityEngine = ({
  players,
  selectedPlayer,
  onSelectPlayer
}) => {
  // Let the user select a comparison proxy from the matching list
  const [proxyId, setProxyId] = useState('');

  // 1. Calculate similarity percentage relative to selectedPlayer
  const getSimilarityDetails = (p, base) => {
    // Euclidean distance with normalized weights for cricket stats
    const diffSR = p.similarityMetrics.strikeRate - base.similarityMetrics.strikeRate;
    const diffBnd = p.similarityMetrics.boundaryPct - base.similarityMetrics.boundaryPct;
    const diffSpin = p.similarityMetrics.spinEconRate - base.similarityMetrics.spinEconRate;
    const diffEntry = p.similarityMetrics.avgEntryOver - base.similarityMetrics.avgEntryOver;

    const distance = Math.sqrt(
      Math.pow(diffSR, 2) * 0.08 +       // SR weight
      Math.pow(diffBnd, 2) * 1.5 +       // Boundary % weight
      Math.pow(diffSpin, 2) * 15 +       // Spin Econ weight
      Math.pow(diffEntry, 2) * 6.5       // Entry Over weight
    );

    // Map distance to percentage (lower distance = higher similarity)
    const rawPct = 100 - (distance * 1.35);
    const score = Math.max(22, Math.min(99, Math.round(rawPct)));

    return {
      distance,
      score,
      metrics: {
        srDiff: Math.abs(diffSR),
        bndDiff: Math.abs(diffBnd),
        spinDiff: Math.abs(diffSpin),
        entryDiff: Math.abs(diffEntry)
      }
    };
  };

  // Compile similarity lists for all other players
  const otherPlayers = players.filter((p) => p.id !== selectedPlayer.id);
  const similarities = otherPlayers.map((p) => {
    const details = getSimilarityDetails(p, selectedPlayer);
    return {
      player: p,
      score: details.score,
      metrics: details.metrics
    };
  }).sort((a, b) => b.score - a.score);

  // Set default comparison proxy if none selected or if selected is invalid
  const activeProxy = players.find(p => p.id === proxyId) || similarities[0]?.player || players[0];

  const handleProxyChange = (id) => {
    setProxyId(id);
  };

  // 2. Custom SVG Radar Calculations for Selected Base vs Active Proxy
  // We have 5 dimensions: rotation, paceAcc, power, finishing, spinAcc
  const dimensions = ['ROTATION', 'PACE ACC', 'POWER', 'FINISHING', 'SPIN ACC'];
  
  // Center of our 220x220 SVG Radar is (110, 110), radius is 85
  const cx = 110;
  const cy = 110;
  const r = 85;

  const getCoordinates = (index, value) => {
    // Rotate so top is 0 degrees
    const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
    // Normalize value from 0-100
    const factor = value / 100;
    const x = cx + r * Math.cos(angle) * factor;
    const y = cy + r * Math.sin(angle) * factor;
    return { x, y };
  };

  const getLabelCoordinates = (index) => {
    const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
    // Push labels slightly outside the radar circle bounds
    const x = cx + (r + 18) * Math.cos(angle);
    const y = cy + (r + 10) * Math.sin(angle);
    return { x, y };
  };

  // Coordinates strings for polygon paths
  const baseSkills = [
    selectedPlayer.skills.rotation,
    selectedPlayer.skills.paceAcc,
    selectedPlayer.skills.power,
    selectedPlayer.skills.finishing,
    selectedPlayer.skills.spinAcc
  ];

  const proxySkills = [
    activeProxy.skills.rotation,
    activeProxy.skills.paceAcc,
    activeProxy.skills.power,
    activeProxy.skills.finishing,
    activeProxy.skills.spinAcc
  ];

  const basePoints = baseSkills.map((val, idx) => {
    const coords = getCoordinates(idx, val);
    return `${coords.x},${coords.y}`;
  }).join(' ');

  const proxyPoints = proxySkills.map((val, idx) => {
    const coords = getCoordinates(idx, val);
    return `${coords.x},${coords.y}`;
  }).join(' ');

  // Outer circles helper
  const webRadii = [r, r * 0.75, r * 0.5, r * 0.25];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in" id="similarity-engine-container">
      
      {/* Upper description */}
      <div className="col-span-12 space-y-1">
        <h2 className="text-xl font-display font-medium text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-cricket-accent" /> Strategic Similarity Sandbox
        </h2>
        <p className="text-sm text-cricket-slate-400">
          Euclidean displacement modeling. Compare <span className="text-white font-medium">{selectedPlayer.name}</span> against similar targets to isolate optimal squad replacements or rotation profiles.
        </p>
      </div>

      {/* Left 4 Columns: Match Proxies List */}
      <div className="lg:col-span-4 space-y-4" id="similarity-proxy-list-pane">
        <div className="bg-cricket-slate-900 border border-cricket-slate-800 rounded-xl p-4 space-y-3">
          <h3 className="text-xs font-mono font-bold text-cricket-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Closest Proxies</span>
            <span className="text-[10px] text-cricket-accent font-normal">Weights Normalized</span>
          </h3>

          <div className="divide-y divide-cricket-slate-800 max-h-[460px] overflow-y-auto space-y-2 pr-1">
            {similarities.map(({ player: p, score }) => {
              const isActive = p.id === activeProxy.id;
              return (
                <div
                  key={p.id}
                  onClick={() => handleProxyChange(p.id)}
                  className={`p-2.5 rounded-lg flex items-center justify-between cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-cricket-slate-800 border border-cricket-accent/30' 
                      : 'bg-cricket-slate-950/40 hover:bg-cricket-slate-950 border border-transparent'
                  }`}
                  id={`proxy-row-${p.id}`}
                >
                  <div className="flex items-center gap-2.5">
                    <img 
                      src={p.avatarUrl} 
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded object-cover border border-cricket-slate-800/80"
                    />
                    <div>
                      <h4 className="text-xs font-display font-medium text-white">
                        {p.shortName}
                      </h4>
                      <p className="text-[10px] text-cricket-slate-500">
                        {p.country} • {p.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-cricket-accent' : 'text-cricket-cyan'}`}>
                      {score}%
                    </span>
                    <span className="block text-[8px] font-mono text-cricket-slate-600 uppercase">Match</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tactical Info Badge */}
        <div className="p-3 bg-cricket-slate-950/60 border border-cricket-slate-800/80 rounded-xl flex gap-2.5 items-start">
          <AlertCircle className="w-4 h-4 text-cricket-cyan shrink-0 mt-0.5" />
          <p className="text-[11px] text-cricket-slate-400 font-mono">
            Displacement accounts for Strike Rate delta, boundary-to-singles ratio, spin absorption thresholds and peak entry phase overlays.
          </p>
        </div>
      </div>

      {/* Right 8 Columns: Dynamic Head-to-Head and Skill Radar Overlays */}
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-4 bg-gradient-to-br from-cricket-slate-900 to-cricket-slate-950 border border-cricket-slate-800 p-6 rounded-xl relative overflow-hidden" id="similarity-sandbox-display">
        
        {/* Glow */}
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cricket-accent/5 rounded-full blur-2xl pointer-events-none" />

        {/* Head-to-Head Header (6 Cols or full width on small) */}
        <div className="md:col-span-12 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-cricket-slate-800 pb-4 gap-4">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-cricket-cyan/10 border border-cricket-cyan/25 rounded-full text-[10px] font-mono text-cricket-cyan mb-1.5">
              <Sparkles className="w-3 h-3" /> MODELING STABILIZED
            </div>
            <h3 className="text-lg font-display text-white">
              Analytical Comparison Profile
            </h3>
          </div>

          <div className="flex gap-4 items-center">
            {/* Target 1 label */}
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-sm bg-cricket-cyan" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cricket-cyan to-white font-medium">{selectedPlayer.shortName} (Base)</span>
            </div>
            {/* Target 2 label */}
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-sm bg-cricket-accent" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cricket-accent to-white font-medium">{activeProxy.shortName} (Proxy)</span>
            </div>
          </div>
        </div>

        {/* Left Side: SVGRadar Chart (5 Columns) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center py-4" id="radar-chart-holder">
          <div className="relative">
            {/* SVG radar */}
            <svg viewBox="0 0 220 220" className="w-[190px] h-[190px] overflow-visible">
              {/* Draw web grids */}
              {webRadii.map((radius, rIdx) => {
                const pointsStr = Array.from({ length: 5 }).map((_, sIdx) => {
                  const angle = (Math.PI * 2 * sIdx) / 5 - Math.PI / 2;
                  const x = cx + radius * Math.cos(angle);
                  const y = cy + radius * Math.sin(angle);
                  return `${x},${y}`;
                }).join(' ');

                return (
                  <polygon
                    key={rIdx}
                    points={pointsStr}
                    fill="none"
                    stroke="#1E2942"
                    strokeWidth="0.8"
                    strokeDasharray={rIdx === 0 ? '' : '3,2'}
                  />
                );
              })}

              {/* Draw spider spokes */}
              {Array.from({ length: 5 }).map((_, sIdx) => {
                const angle = (Math.PI * 2 * sIdx) / 5 - Math.PI / 2;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                return (
                  <line
                    key={sIdx}
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="#1E2942"
                    strokeWidth="0.8"
                  />
                );
              })}

              {/* Base Player Overlaid Polygon */}
              <polygon
                points={basePoints}
                fill="rgba(0, 245, 255, 0.15)"
                stroke="rgba(0, 245, 255, 0.75)"
                strokeWidth="1.8"
              />

              {/* Comparison Proxy Overlaid Polygon */}
              <polygon
                points={proxyPoints}
                fill="rgba(205, 255, 0, 0.15)"
                stroke="rgba(205, 255, 0, 0.8)"
                strokeWidth="1.8"
                strokeDasharray="4,2"
              />

              {/* Data points dots */}
              {baseSkills.map((val, idx) => {
                const coords = getCoordinates(idx, val);
                return (
                  <circle
                    key={`b-${idx}`}
                    cx={coords.x}
                    cy={coords.y}
                    r="3"
                    fill="#00F5FF"
                  />
                );
              })}

              {proxySkills.map((val, idx) => {
                const coords = getCoordinates(idx, val);
                return (
                  <circle
                    key={`p-${idx}`}
                    cx={coords.x}
                    cy={coords.y}
                    r="3"
                    fill="#CDFF00"
                  />
                );
              })}

              {/* Dimension Labels */}
              {dimensions.map((dim, idx) => {
                const coords = getLabelCoordinates(idx);
                let textAnchor = 'middle';
                if (idx === 1 || idx === 2) textAnchor = 'start';
                if (idx === 3 || idx === 4) textAnchor = 'end';
                return (
                  <text
                    key={dim}
                    x={coords.x}
                    y={coords.y}
                    textAnchor={textAnchor}
                    className="font-mono font-bold fill-cricket-slate-400 select-none text-[8.5px]"
                    alignmentBaseline="middle"
                  >
                    {dim}
                  </text>
                );
              })}
            </svg>
          </div>
          
          <div className="text-center mt-3">
            <span className="text-[10px] font-mono text-cricket-slate-500 uppercase">Areal Domain overlay</span>
          </div>
        </div>

        {/* Right Side: Specific Stat Comparison Metrics (7 Columns) */}
        <div className="col-span-12 md:col-span-7 space-y-4 py-2" id="radar-metrics-holder">
          <div className="flex items-center gap-1.5 text-xs text-cricket-slate-400 font-mono">
            <Layers className="w-3.5 h-3.5 text-cricket-accent" /> Quantitative Vector Deltas
          </div>

          <div className="space-y-3.5">
            {/* Strike Rate Comparison */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-mono select-none">
                <span className="text-cricket-slate-400">T20 Strike Rate</span>
                <span className="text-white">
                  <span className="text-cricket-cyan">{selectedPlayer.similarityMetrics.strikeRate}</span> vs <span className="text-cricket-accent">{activeProxy.similarityMetrics.strikeRate}</span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-2 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800">
                  <div style={{ width: `${Math.min(100, (selectedPlayer.similarityMetrics.strikeRate / 200) * 100)}%` }} className="h-full bg-cricket-cyan rounded-full" />
                </div>
                <div className="h-2 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800">
                  <div style={{ width: `${Math.min(100, (activeProxy.similarityMetrics.strikeRate / 200) * 100)}%` }} className="h-full bg-cricket-accent rounded-full" />
                </div>
              </div>
            </div>

            {/* Boundary % Comparison */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-mono select-none">
                <span className="text-cricket-slate-400">Boundary Frequency %</span>
                <span className="text-white">
                  <span className="text-cricket-cyan">{selectedPlayer.similarityMetrics.boundaryPct}%</span> vs <span className="text-cricket-accent">{activeProxy.similarityMetrics.boundaryPct}%</span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-2 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800">
                  <div style={{ width: `${(selectedPlayer.similarityMetrics.boundaryPct / 35) * 100}%` }} className="h-full bg-cricket-cyan rounded-full" />
                </div>
                <div className="h-2 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800">
                  <div style={{ width: `${(activeProxy.similarityMetrics.boundaryPct / 35) * 100}%` }} className="h-full bg-cricket-accent rounded-full" />
                </div>
              </div>
            </div>

            {/* Spin Econ Matchup Rate */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-mono select-none">
                <span className="text-cricket-slate-400">Absorption Economy Rate</span>
                <span className="text-white">
                  <span className="text-cricket-cyan">{selectedPlayer.similarityMetrics.spinEconRate || '0.00'}</span> vs <span className="text-cricket-accent">{activeProxy.similarityMetrics.spinEconRate || '0.00'}</span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-2 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800">
                  <div style={{ width: `${((12 - (selectedPlayer.similarityMetrics.spinEconRate || 6)) / 12) * 100}%` }} className="h-full bg-cricket-cyan rounded-full" />
                </div>
                <div className="h-2 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800">
                  <div style={{ width: `${((12 - (activeProxy.similarityMetrics.spinEconRate || 6)) / 12) * 100}%` }} className="h-full bg-cricket-accent rounded-full" />
                </div>
              </div>
            </div>

            {/* Avg Entry Over Phase */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-mono select-none">
                <span className="text-cricket-slate-400">Peak Entry Over Phase</span>
                <span className="text-white">
                  <span className="text-cricket-cyan">Over {selectedPlayer.similarityMetrics.avgEntryOver}</span> vs <span className="text-cricket-accent">Over {activeProxy.similarityMetrics.avgEntryOver}</span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-2 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800">
                  <div style={{ width: `${(selectedPlayer.similarityMetrics.avgEntryOver / 20) * 100}%` }} className="h-full bg-cricket-cyan rounded-full" />
                </div>
                <div className="h-2 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800">
                  <div style={{ width: `${(activeProxy.similarityMetrics.avgEntryOver / 20) * 100}%` }} className="h-full bg-cricket-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick analysis summary paragraph */}
          <div className="p-3 bg-cricket-slate-950 border border-cricket-slate-800/80 rounded-lg text-xs text-cricket-slate-400 font-mono mt-3">
            <span className="text-cricket-accent font-bold">DISPLACEMENT SUMMARY:</span> {selectedPlayer.shortName} and {activeProxy.shortName} overlay closely. The principal difference exists in <span className="text-white font-medium">Boundary frequency</span> where {selectedPlayer.similarityMetrics.boundaryPct > activeProxy.similarityMetrics.boundaryPct ? selectedPlayer.shortName : activeProxy.shortName} shows a {Math.abs(selectedPlayer.similarityMetrics.boundaryPct - activeProxy.similarityMetrics.boundaryPct).toFixed(1)}% absolute advantage.
          </div>
        </div>

      </div>

    </div>
  );
};
