import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowLeft, BarChart2, Star, User2, Zap, ArrowRight, Gauge } from 'lucide-react';

export const PlayerExplorer = ({
  players,
  selectedPlayer,
  onSelectPlayer,
  onSelectTab
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState('All');
  const [activeStatFormat, setActiveStatFormat] = useState('T20');

  // Filter players list
  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          player.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRoleFilter === 'All' || player.role === selectedRoleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in" id="explorer-container">
      
      {/* Left 5 Columns: Search & Roster Selection */}
      <div className="lg:col-span-5 space-y-4" id="explorer-roster-pane">
        <div className="space-y-1">
          <h2 className="text-xl font-display font-medium text-white flex items-center gap-2">
            <User2 className="w-5 h-5 text-cricket-accent" /> Prospect Roster
          </h2>
          <p className="text-xs text-cricket-slate-400">Search, filter, and drill down into detailed scouting profiles</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-cricket-slate-900 border border-cricket-slate-800 p-3 rounded-xl space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-cricket-slate-500" />
            <input 
              type="text"
              placeholder="Search by name, country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-cricket-slate-950 border border-cricket-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-cricket-slate-500 focus:outline-none focus:border-cricket-accent"
            />
          </div>

          <div className="flex flex-wrap gap-1">
            {['All', 'Batter', 'Bowler', 'All-rounder'].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRoleFilter(role)}
                className={`px-3 py-1 text-xs font-mono rounded-md border cursor-pointer transition-colors ${
                  selectedRoleFilter === role 
                   ? 'bg-cricket-accent text-black border-cricket-accent font-semibold'
                   : 'bg-cricket-slate-950 text-cricket-slate-400 border-cricket-slate-800 hover:text-white'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Roster List Scrollable container */}
        <div className="bg-cricket-slate-900 border border-cricket-slate-800 rounded-xl overflow-hidden divide-y divide-cricket-slate-800 max-h-[500px] overflow-y-auto">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player) => {
              const isSelected = player.id === selectedPlayer.id;
              return (
                <div
                  key={player.id}
                  onClick={() => onSelectPlayer(player)}
                  className={`p-3 flex items-center justify-between cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-cricket-slate-800/80 border-l-4 border-cricket-accent' 
                      : 'hover:bg-cricket-slate-800/40 bg-transparent'
                  }`}
                  id={`player-row-${player.id}`}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={player.avatarUrl} 
                      alt={player.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-md object-cover border border-cricket-slate-800"
                    />
                    <div>
                      <h4 className={`font-display text-sm font-medium ${isSelected ? 'text-cricket-accent' : 'text-white'}`}>
                        {player.name}
                      </h4>
                      <p className="text-[11px] text-cricket-slate-400">
                        {player.country} • {player.detailRole}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-mono font-bold text-white">{player.scoutScore}</div>
                    <div className="text-[9px] font-mono text-cricket-slate-500 uppercase">Scout Index</div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-cricket-slate-500 text-sm">
              No matching prospects found.
            </div>
          )}
        </div>
      </div>

      {/* Right 7 Columns: Core Profile Drill-down View */}
      <div className="lg:col-span-7 space-y-6" id="explorer-detail-pane">
        
        {/* Detail Panel */}
        <div className="bg-gradient-to-br from-cricket-slate-900 to-cricket-slate-950 border border-cricket-slate-800 rounded-xl p-6 relative overflow-hidden">
          
          {/* Header section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-cricket-slate-800 pb-5">
            <div className="flex items-center gap-4">
              <img 
                src={selectedPlayer.avatarUrl} 
                alt={selectedPlayer.name}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-xl object-cover border-2 border-cricket-slate-800"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-0.5 bg-cricket-slate-800 text-cricket-slate-300 border border-cricket-slate-700/80 rounded">
                    {selectedPlayer.country}
                  </span>
                  <span className="text-xs text-cricket-slate-400">Age: {selectedPlayer.age}</span>
                </div>
                <h1 className="text-2xl font-display font-bold text-white tracking-tight">
                  {selectedPlayer.name}
                </h1>
                <p className="text-xs text-cricket-slate-400 font-mono">
                  {selectedPlayer.battingStyle} • {selectedPlayer.bowlingStyle}
                </p>
              </div>
            </div>

            {/* Overall Scout Index Indicator */}
            <div className="flex items-center gap-3 bg-cricket-slate-950/60 p-3 rounded-xl border border-cricket-slate-800">
              <div className="text-center">
                <span className="text-[10px] font-mono text-cricket-slate-400 block uppercase">Scout Score</span>
                <span className="text-2xl font-display font-extrabold text-cricket-accent">{selectedPlayer.scoutScore}</span>
              </div>
              <div className="h-8 w-px bg-cricket-slate-800" />
              <div className="text-center">
                <span className="text-[10px] font-mono text-cricket-slate-400 block uppercase">AI Conf</span>
                <span className="text-lg font-display font-semibold text-white">{selectedPlayer.aiConfidence}%</span>
              </div>
            </div>
          </div>

          {/* Stats Section with Format Selector */}
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-display font-medium text-white flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4 text-cricket-cyan" /> Historical Format Statistics
              </h3>
              
              {/* format selector toggles */}
              <div className="flex gap-1 bg-cricket-slate-950 p-1 border border-cricket-slate-800 rounded-lg">
                {['T20', 'ODI', 'Test'].map((format) => (
                  <button
                    key={format}
                    onClick={() => setActiveStatFormat(format)}
                    className={`px-3 py-1 text-xs font-mono rounded cursor-pointer transition-colors ${
                      activeStatFormat === format 
                        ? 'bg-cricket-cyan text-black font-semibold' 
                        : 'text-cricket-slate-400 hover:text-white'
                    }`}
                  >
                    {format}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-cricket-slate-950/80 p-3 border border-cricket-slate-800/80 rounded-lg text-center">
                <div className="text-[10px] font-mono text-cricket-slate-500 uppercase">Matches</div>
                <div className="text-lg font-mono font-semibold text-white mt-1">
                  {selectedPlayer.stats[activeStatFormat].matches || '-'}
                </div>
              </div>
              <div className="bg-cricket-slate-950/80 p-3 border border-cricket-slate-800/80 rounded-lg text-center">
                <div className="text-[10px] font-mono text-cricket-slate-500 uppercase">Runs Scored</div>
                <div className="text-lg font-mono font-semibold text-white mt-1">
                  {selectedPlayer.stats[activeStatFormat].runs || '-'}
                </div>
              </div>
              <div className="bg-cricket-slate-950/80 p-3 border border-cricket-slate-800/80 rounded-lg text-center">
                <div className="text-[10px] font-mono text-cricket-slate-500 uppercase">Strike Rate</div>
                <div className="text-lg font-mono font-semibold text-cricket-accent mt-1">
                  {selectedPlayer.stats[activeStatFormat].sr || '-'}
                </div>
              </div>
              <div className="bg-cricket-slate-950/80 p-3 border border-cricket-slate-800/80 rounded-lg text-center">
                <div className="text-[10px] font-mono text-cricket-slate-500 uppercase">Wickets / Econ</div>
                <div className="text-lg font-mono font-semibold text-cricket-cyan mt-1">
                  {selectedPlayer.stats[activeStatFormat].wickets || '0'} / {selectedPlayer.stats[activeStatFormat].econ || '-'}
                </div>
              </div>
            </div>
          </div>

          {/* Innings Recent Form */}
          <div className="mt-6 space-y-2">
            <h3 className="text-sm font-display font-medium text-white flex items-center gap-1.5">
              <Gauge className="w-4 h-4 text-cricket-accent" /> Recent Innings Trend Profile
            </h3>
            
            <div className="flex items-end gap-1.5 h-16 pt-3 px-2 bg-cricket-slate-950/40 border border-cricket-slate-800 rounded-lg justify-around">
              {selectedPlayer.recentForm.map((form, idx) => {
                const heightPercent = Math.min(100, Math.max(12, (form.score / 150) * 100));
                const isHigh = form.score >= 50;
                const barColor = isHigh ? 'bg-cricket-accent' : 'bg-cricket-slate-600';
                
                return (
                  <div key={idx} className="flex flex-col items-center flex-1 group relative">
                    {/* Tooltip */}
                    <div className="absolute -top-7 opacity-0 group-hover:opacity-100 bg-cricket-slate-800 text-white font-mono text-[10px] py-0.5 px-1.5 rounded border border-cricket-slate-700 pointer-events-none transition-all z-10 w-max text-center">
                      {form.score}{form.isNotOut ? '*' : ''}
                    </div>

                    <div 
                      style={{ height: `${heightPercent}%` }} 
                      className={`w-full max-w-[20px] rounded-t ${barColor} group-hover:opacity-85 transition-opacity`}
                    />
                    <div className="text-[9px] font-mono text-cricket-slate-500 mt-1">
                      I{idx + 1}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-[10px] font-mono text-cricket-slate-500 text-right pr-1">
              * Indicates Not Out (L to R: oldest to newest)
            </div>
          </div>

          {/* Skill Radar Attributes Progress Bars */}
          <div className="mt-6 border-t border-cricket-slate-800 pt-5 space-y-3">
            <h3 className="text-sm font-display font-medium text-white flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400" /> Analytical Skill Dimension Ratings
            </h3>

            <div className="space-y-2.5">
              {[
                { label: 'Rotation Accent (Rate of single-taking)', val: selectedPlayer.skills.rotation },
                { label: 'Pace Accel (Scoring velocity vs quicks)', val: selectedPlayer.skills.paceAcc },
                { label: 'Raw Power (Clearance of boundaries)', val: selectedPlayer.skills.power },
                { label: 'Finishing Index (Execution under final overs)', val: selectedPlayer.skills.finishing },
                { label: 'Spin Accrual (Efficiency vs wrist/finger spinner)', val: selectedPlayer.skills.spinAcc },
              ].map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-cricket-slate-300 font-mono text-[11px]">{skill.label}</span>
                    <span className="text-cricket-accent font-mono font-bold">{skill.val}/100</span>
                  </div>
                  <div className="h-1.5 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800/80">
                    <div 
                      style={{ width: `${skill.val}%` }} 
                      className="h-full bg-gradient-to-r from-cricket-cyan to-cricket-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Cockpit Link-outs */}
          <div className="mt-8 pt-5 border-t border-cricket-slate-800 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onSelectTab('matching')}
              className="flex-1 bg-cricket-slate-950 border border-cricket-slate-800 hover:border-cricket-accent/30 py-2.5 px-4 rounded-xl text-xs font-mono text-cricket-accent flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              Simulate Matches & Proxies
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onSelectTab('valuation')}
              className="flex-1 bg-cricket-slate-950 border border-cricket-slate-800 hover:border-cricket-cyan/30 py-2.5 px-4 rounded-xl text-xs font-mono text-cricket-cyan flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              Analyze Market & Bid Models
              <Zap className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
