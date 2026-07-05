import React from 'react';
import { ShieldCheck, TrendingUp, Cpu, Award, Zap, ChevronRight, FileText, Calendar, Compass } from 'lucide-react';

export const Dashboard = ({
  players,
  reports,
  onSelectPlayer,
  onSelectTab,
  onSelectReport
}) => {
  // Sort players by scoutScore descending
  const topProspects = [...players].sort((a, b) => b.scoutScore - a.scoutScore).slice(0, 4);

  return (
    <div className="space-y-6" id="dashboard-container">
      {/* Welcome Banner */}
      <div 
        className="relative bg-[#0c0c0c] border border-cricket-slate-800 p-8 overflow-hidden"
        id="dashboard-header-card"
      >
        {/* Geometric wireframe background representing post-industrial architectural balance */}
        <div className="absolute right-0 top-0 w-[45%] h-full bg-[#111] border-l border-cricket-slate-800 overflow-hidden hidden lg:block">
          {/* Crossing diagonals */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-[300%] h-[1px] bg-white/20 rotate-12 absolute"></div>
            <div className="w-[300%] h-[1px] bg-white/20 -rotate-12 absolute"></div>
            <div className="w-[300%] h-[1px] bg-white/10 rotate-[35deg] absolute"></div>
            <div className="w-[300%] h-[1px] bg-white/10 -rotate-[35deg] absolute"></div>
          </div>
          {/* Overlapping rotated wireframe boxes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-52 border border-white/15 rotate-12 transition-transform duration-700"></div>
            <div className="w-40 h-52 border border-white/10 -rotate-6 absolute"></div>
            <div className="w-52 h-40 border border-white/25 absolute flex items-center justify-center">
              <span className="text-[9px] font-mono tracking-[0.25em] text-white/40">SYSTEM.AESTHETIC_AXON</span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[#a3a3a3]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span>Platform Status // Operational STABLE</span>
            </div>
            
            <h1 className="text-[48px] md:text-[56px] leading-[0.85] font-light text-white tracking-tighter uppercase font-sans">
              CricScout<br />
              <span className="text-cricket-slate-600">STRUCTURES //</span>
            </h1>

            <p className="text-xs text-cricket-slate-400 leading-relaxed font-mono">
              Exploring the intersection of brutalist geometry and quantitative sports modeling. Multidimensional prospect analysis engine utilizing vector similarity models and digital scout reports.
            </p>
          </div>

          {/* Quick Metrics Bar with layout matches to AXON style */}
          <div className="grid grid-cols-3 border border-cricket-slate-800 bg-[#080808] p-6 text-xs text-cricket-slate-400 min-w-[300px]">
            <div className="border-r border-cricket-slate-800 pr-5 flex flex-col justify-between h-14">
              <div className="text-[9px] uppercase tracking-widest font-mono text-cricket-slate-500">Prospects</div>
              <div className="text-3xl font-extralight text-white leading-none">17</div>
            </div>
            <div className="border-r border-cricket-slate-800 px-5 flex flex-col justify-between h-14">
              <div className="text-[9px] uppercase tracking-widest font-mono text-cricket-slate-500">Active Feeds</div>
              <div className="text-3xl font-extralight text-white leading-none">3</div>
            </div>
            <div className="pl-5 flex flex-col justify-between h-14">
              <div className="text-[9px] uppercase tracking-widest font-mono text-cricket-slate-500">Data Nodes</div>
              <div className="text-3xl font-extralight text-white leading-none">140+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Main Prospects & Reports Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="dashboard-grid">
        
        {/* Left 7 Columns: Top Prospects & Quick Metrics */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-display font-medium text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-cricket-accent" /> Elite Performance Leaders
              </h2>
              <p className="text-xs text-cricket-slate-400">Prospects with the highest overall Scouting Score</p>
            </div>
            <button 
              onClick={() => onSelectTab('explorer')}
              className="text-xs font-mono text-cricket-accent flex items-center gap-1 hover:underline cursor-pointer"
            >
              All Prospects <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Prospects Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topProspects.map((player) => (
              <div 
                key={player.id}
                onClick={() => onSelectPlayer(player)}
                className="group relative bg-cricket-slate-900 border border-cricket-slate-800 rounded-xl p-4 overflow-hidden hover:border-cricket-slate-700 transition-all cursor-pointer duration-300 hover:translate-y-[-2px] flex flex-col justify-between"
                id={`prospect-card-${player.id}`}
              >
                {/* Glow bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cricket-accent/30 to-transparent group-hover:via-cricket-cyan/50" />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={player.avatarUrl} 
                      alt={player.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover border border-cricket-slate-800 group-hover:border-cricket-cyan/50 transition-all"
                    />
                    <div>
                      <h3 className="font-display font-medium text-white group-hover:text-cricket-accent transition-colors">
                        {player.name}
                      </h3>
                      <div className="text-xs text-cricket-slate-400 flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {player.country} • {player.detailRole}
                      </div>
                    </div>
                  </div>

                  {/* Scout Score circular display */}
                  <div className="bg-cricket-slate-950/80 border border-cricket-slate-800 p-2 rounded-lg text-center min-w-[50px]">
                    <div className="text-[10px] font-mono text-cricket-slate-400 uppercase leading-none">Scout</div>
                    <div className="text-sm font-display font-bold text-cricket-accent mt-0.5">{player.scoutScore}</div>
                  </div>
                </div>

                {/* Performance indicators */}
                <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-cricket-slate-950/45 border border-cricket-slate-800/80 rounded-lg text-xs font-mono text-cricket-slate-400">
                  <div>
                    <div className="text-[10px] uppercase text-cricket-slate-500">T20 SR</div>
                    <div className="text-white font-semibold mt-0.5">{player.stats.T20.sr || '-'}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-cricket-slate-500">FORMAT</div>
                    <div className="text-cricket-cyan font-semibold mt-0.5">{player.role}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-cricket-slate-500">CONF</div>
                    <div className="text-white font-semibold mt-0.5">{player.aiConfidence}%</div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-cricket-slate-500">
                  <span>Age: {player.age} • style: {player.battingStyle.split(' ')[0]}</span>
                  <span className="text-cricket-accent group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    View Specs <ChevronRight className="w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Cockpit Tools Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              onClick={() => onSelectTab('matching')}
              className="group bg-gradient-to-br from-cricket-slate-900 to-cricket-slate-950 border border-cricket-slate-800 rounded-xl p-4 cursor-pointer hover:border-cricket-accent/40 transition-colors flex gap-4 items-start"
            >
              <div className="bg-cricket-accent/10 border border-cricket-accent/20 p-2.5 rounded-lg text-cricket-accent group-hover:bg-cricket-accent group-hover:text-black transition-all">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-medium text-white group-hover:text-cricket-accent transition-colors">
                  Player Similarity Engine
                </h4>
                <p className="text-xs text-cricket-slate-400">
                  Find replacement targets using multi-dimensional Euclidean vector matching.
                </p>
              </div>
            </div>

            <div 
              onClick={() => onSelectTab('valuation')}
              className="group bg-gradient-to-br from-cricket-slate-900 to-cricket-slate-950 border border-cricket-slate-800 rounded-xl p-4 cursor-pointer hover:border-cricket-cyan/40 transition-colors flex gap-4 items-start"
            >
              <div className="bg-cricket-cyan/10 border border-cricket-cyan/20 p-2.5 rounded-lg text-cricket-cyan group-hover:bg-cricket-cyan group-hover:text-black transition-all">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-medium text-white group-hover:text-cricket-cyan transition-colors">
                  Auction Simulator Cockpit
                </h4>
                <p className="text-xs text-cricket-slate-400">
                  Predict market values, fit models, and bid real-time against elite franchises.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Columns: Latest Scouting Intel & Live Feed */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-display font-medium text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cricket-cyan" /> Matches & Scouting Reports
            </h2>
            <p className="text-xs text-cricket-slate-400">Tactical insights from the cricket intelligence hub</p>
          </div>

          <div className="space-y-4 bg-cricket-slate-900 border border-cricket-slate-800 p-4 rounded-xl min-h-[400px] flex flex-col justify-between">
            <div className="space-y-3">
              {reports.slice(0, 3).map((report) => (
                <div 
                  key={report.id}
                  onClick={() => {
                    onSelectTab('scouting');
                    onSelectReport(report);
                  }}
                  className="group bg-cricket-slate-950/80 hover:bg-cricket-slate-950 border border-cricket-slate-800/80 hover:border-cricket-slate-700/80 rounded-lg p-3 cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-cricket-slate-400 mb-1.5">
                    <span className="flex items-center gap-1 bg-cricket-slate-900 px-2 py-0.5 border border-cricket-slate-800 rounded text-[10px]">
                      <FileText className="w-3 h-3 text-cricket-cyan" />
                      {report.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cricket-slate-400" />
                      {report.date}
                    </span>
                  </div>
                  <h4 className="font-display text-sm font-medium text-white group-hover:text-cricket-cyan transition-colors">
                    {report.title}
                  </h4>
                  <p className="text-xs text-cricket-slate-400 line-clamp-2 mt-1">
                    {report.content.executiveSummary}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom prompt action CTA */}
            <div 
              onClick={() => onSelectTab('scouting')}
              className="mt-4 p-3 bg-gradient-to-r from-cricket-slate-950 to-cricket-slate-900 border border-cricket-slate-800 rounded-lg text-center hover:border-cricket-accent transition-colors cursor-pointer group"
            >
              <div className="text-xs font-mono text-cricket-accent flex items-center justify-center gap-1">
                <Cpu className="w-3.5 h-3.5" />
                Query Gemini Scouting Agent
              </div>
              <div className="text-[10px] text-cricket-slate-500 mt-1">
                Synthesize custom player profiles and match strategy papers instantly
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
