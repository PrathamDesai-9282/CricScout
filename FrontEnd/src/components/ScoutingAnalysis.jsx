import React, { useState } from 'react';
import { Cpu, FileText, Send, Sparkles, AlertTriangle, ShieldCheck, CornerDownRight } from 'lucide-react';

export const ScoutingAnalysis = ({
  players,
  reports,
  selectedReport,
  onSelectReport,
  onAddNewReport
}) => {
  // Input fields for custom compilation
  const [targetName, setTargetName] = useState(players[0]?.name || '');
  const [reportType, setReportType] = useState('Pre-Match');
  const [customContext, setCustomContext] = useState('');
  
  // Loading & error states
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Trigger Backend Gemini Compilation
  const compileCustomReport = async (e) => {
    e.preventDefault();
    if (!targetName.trim()) return;

    setIsSynthesizing(true);
    setApiError(null);

    // Look up role of target if it corresponds to one of our players
    const matchedPlayer = players.find(p => p.name.toLowerCase() === targetName.toLowerCase() || p.shortName.toLowerCase() === targetName.toLowerCase());
    const roleArg = matchedPlayer ? matchedPlayer.detailRole : 'Key Tactical Focus';

    try {
      const response = await fetch('/api/generate-scouting-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: targetName,
          type: reportType,
          role: roleArg,
          context: customContext
        })
      });

      if (!response.ok) {
        throw new Error('Intelligence server timed out or failed to compile.');
      }

      const generatedReport = await response.json();
      
      // Save to local reports heap in App.jsx
      onAddNewReport(generatedReport);
      onSelectReport(generatedReport);
      
      // Clear inputs
      setCustomContext('');
    } catch (err) {
      console.error(err);
      setApiError(err.message || 'Scouting report compiling failed. Please verify configurations.');
    } finally {
      setIsSynthesizing(false);
    }
  };

  const handleTemplateSelection = (name) => {
    setTargetName(name);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in" id="scouting-container font-mono text-xs">
      
      {/* Search template selectors heading */}
      <div className="col-span-12 space-y-1">
        <h2 className="text-xl font-display font-medium text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cricket-accent" /> Gemini AI Intelligence Hub
        </h2>
        <p className="text-sm text-cricket-slate-400">
          Synthesize custom tactical reports, analyze player matchup dimensions, and predict turf decay metrics.
        </p>
      </div>

      {/* Left 5 Columns: Intel Archive & Synthesis Input */}
      <div className="lg:col-span-5 space-y-4" id="scouting-inputs-pane">
        
        {/* Synthesis Request Foam */}
        <div className="bg-cricket-slate-900 border border-cricket-slate-800 p-5 rounded-xl space-y-4">
          <h3 className="text-xs font-mono font-bold text-cricket-slate-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-cricket-slate-800 pb-3">
            <Sparkles className="w-4 h-4 text-cricket-accent" /> Synthesize Custom Report
          </h3>

          <form onSubmit={compileCustomReport} className="space-y-3">
            {/* Target Select */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono text-cricket-slate-400 uppercase">Target (Player or Team Name)</label>
              <input 
                type="text" 
                value={targetName}
                onChange={(e) => setTargetName(e.target.value)}
                placeholder="e.g. Babar Azam or Mumbai Indians"
                className="w-full bg-cricket-slate-950 border border-cricket-slate-800 rounded-lg p-2.5 text-xs text-white placeholder-cricket-slate-600 focus:outline-none focus:border-cricket-accent font-mono"
              />
            </div>

            {/* Quick Presets */}
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-cricket-slate-500 block">Quick templates:</span>
              <div className="flex flex-wrap gap-1.5">
                {players.slice(0, 5).map(p => (
                  <button 
                    key={p.id}
                    type="button"
                    onClick={() => handleTemplateSelection(p.name)}
                    className="text-[10px] bg-cricket-slate-950 hover:bg-cricket-slate-800 text-cricket-slate-400 hover:text-white px-2 py-1 rounded border border-cricket-slate-800 cursor-pointer"
                  >
                    {p.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Report Type Select */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono text-cricket-slate-400 uppercase">Strategic Focus Type</label>
              <div className="grid grid-cols-3 gap-1.5">
                {['Pre-Match', 'Player Focus', 'Tactical'].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setReportType(type)}
                    className={`px-2 py-1.5 text-[10px] font-mono rounded cursor-pointer border text-center transition-all ${
                      reportType === type 
                        ? 'bg-cricket-cyan text-black border-cricket-cyan font-semibold opacity-100' 
                        : 'bg-cricket-slate-950 text-cricket-slate-400 border-cricket-slate-800 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom context input */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono text-cricket-slate-400 uppercase">Priority Context or Custom Focus</label>
              <textarea 
                rows={2}
                value={customContext}
                onChange={(e) => setCustomContext(e.target.value)}
                placeholder="Focus on boundary compression rate, rotational limits against left-arm orthodox spinner etc."
                className="w-full bg-cricket-slate-950 border border-cricket-slate-800 rounded-lg p-2.5 text-xs text-white placeholder-cricket-slate-600 focus:outline-none focus:border-cricket-accent resize-none font-mono"
              />
            </div>

            {apiError && (
              <div className="p-2.5 bg-red-950/40 border border-red-900 rounded-lg text-[11px] text-red-200 flex gap-2 items-start">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{apiError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSynthesizing || !targetName.trim()}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                isSynthesizing || !targetName.trim()
                  ? 'bg-cricket-slate-800 text-cricket-slate-500 cursor-not-allowed'
                  : 'bg-cricket-accent text-black hover:scale-[1.01] cursor-pointer shadow-lg shadow-cricket-accent/15'
              }`}
            >
              {isSynthesizing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Synthesizing Intel Feed...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Compile Strategic Brief
                </>
              )}
            </button>
          </form>
        </div>

        {/* Existing reports library log */}
        <div className="bg-cricket-slate-900 border border-cricket-slate-800 rounded-xl p-4 space-y-3">
          <h3 className="text-xs font-mono tracking-wider font-bold text-cricket-slate-400 uppercase">
            Intel Brief Library
          </h3>
          <div className="space-y-2 max-h-[220px] overflow-y-auto">
            {reports.map((report) => {
              const isActive = report.id === selectedReport.id;
              return (
                <div
                  key={report.id}
                  onClick={() => onSelectReport(report)}
                  className={`p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                    isActive 
                      ? 'bg-cricket-slate-850 border-cricket-cyan/40 text-white' 
                      : 'bg-cricket-slate-950/60 hover:bg-cricket-slate-950 border-transparent text-cricket-slate-400 hover:text-white'
                  }`}
                  id={`archive-row-${report.id}`}
                >
                  <div className="flex items-center gap-2 font-display text-[11px]">
                    <FileText className={`w-4 h-4 shrink-0 ${isActive ? 'text-cricket-cyan' : 'text-cricket-slate-500'}`} />
                    <span className="truncate max-w-[170px]">{report.title}</span>
                  </div>

                  <span className="text-[9px] font-mono bg-cricket-slate-900 border border-cricket-slate-800 px-1.5 py-0.5 rounded text-cricket-slate-400">
                    {report.type}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Right 7 Columns: Active Report Visualizer */}
      <div className="lg:col-span-7" id="scouting-visualizer-pane font-mono text-xs">
        
        {/* Scouting Report paper details */}
        <div className="bg-gradient-to-br from-cricket-slate-900 to-cricket-slate-950 border border-cricket-slate-800 p-6 rounded-xl relative overflow-hidden min-h-[500px] flex flex-col justify-between">
          
          <div>
            {/* Header */}
            <div className="flex justify-between items-start border-b border-cricket-slate-800 pb-4 gap-4">
              <div>
                <span className="text-[9px] font-mono text-cricket-cyan block uppercase">Active Document Profile</span>
                <h1 className="text-xl font-display font-bold text-white tracking-tight mt-0.5">
                  {selectedReport.title}
                </h1>
                <div className="flex gap-2 items-center mt-1.5 flex-wrap">
                  <span className="text-[10px] font-mono bg-cricket-slate-950 px-2 py-0.5 border border-cricket-slate-800 rounded text-cricket-slate-300">
                    Target: {selectedReport.target}
                  </span>
                  <span className="text-[10px] font-mono bg-cricket-slate-950 px-2 py-0.5 border border-cricket-slate-800 rounded text-cricket-slate-300">
                    Format: {selectedReport.type}
                  </span>
                  {selectedReport.isCustomGenerated && (
                    <span className="text-[10px] font-mono bg-cricket-accent/10 px-2 py-0.5 border border-cricket-accent/20 rounded text-cricket-accent animate-pulse">
                      Gemini Synthesized
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right text-[10px] font-mono text-cricket-slate-500 mt-1 shrink-0">
                <div>Date: {selectedReport.date}</div>
                <div>{selectedReport.time && `Time: ${selectedReport.time}`}</div>
              </div>
            </div>

            {/* Document Content */}
            <div className="space-y-5 mt-5">
              
              {/* Executive Summary */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-cricket-accent uppercase select-none tracking-wider block">1. Executive Analytics Summary</span>
                <p className="text-xs text-cricket-slate-300 font-mono leading-relaxed bg-cricket-slate-950/50 p-4 border border-cricket-slate-900 rounded-lg">
                  {selectedReport.content.executiveSummary}
                </p>
              </div>

              {/* Matchups list */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-cricket-accent uppercase select-none tracking-wider block">2. High-Dimensional Tactical Matchups</span>
                
                <div className="grid grid-cols-1 gap-3">
                  {selectedReport.content.keytacticalMatchups?.map((m, idx) => (
                    <div key={idx} className="bg-cricket-slate-950/80 border border-cricket-slate-850 p-3.5 rounded-lg space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-display font-medium text-white flex items-center gap-1">
                          <CornerDownRight className="w-3 h-3 text-cricket-cyan" /> {m.matchup}
                        </span>
                        <span className={`text-[9px] font-mono px-2 py-0.5 border rounded uppercase ${
                          m.badgeColor === 'error' 
                            ? 'bg-red-950/20 text-red-400 border-red-900/60' 
                            : m.badgeColor === 'primary'
                            ? 'bg-cricket-cyan/10 text-cricket-cyan border-cricket-cyan/30'
                            : 'bg-cricket-accent/10 text-cricket-accent border-cricket-accent/30'
                        }`}>
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-cricket-slate-400 font-mono leading-relaxed">
                        {m.assessment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pitch Conditions & Moisture write-up */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-cricket-accent uppercase select-none tracking-wider block">3. Surface & Moisture Analytics</span>
                <p className="text-[11px] text-cricket-slate-400 font-mono leading-relaxed">
                  {selectedReport.content.pitchAnalysis}
                </p>
              </div>

            </div>
          </div>

          {/* Selected XI indicators */}
          {selectedReport.content.selectedXI?.length > 0 && (
            <div className="mt-8 pt-4 border-t border-cricket-slate-850">
              <div className="flex items-center gap-1.5 text-xs text-cricket-slate-400 font-mono mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cricket-cyan" /> Scout Recommendation Matrix
              </div>
              
              <div className="flex items-center gap-2 flex-wrap">
                {selectedReport.content.selectedXI.map((rec, idx) => (
                  <div key={idx} className="bg-cricket-slate-950 border border-cricket-slate-850 rounded p-2 text-left min-w-[110px] flex-1">
                    <div className="text-[10px] font-display font-medium text-white truncate">{rec.player}</div>
                    <div className="text-[8px] font-mono text-cricket-slate-500 mt-0.5">{rec.role}</div>
                    <div className="flex justify-between items-center text-[9px] font-mono text-cricket-accent mt-1">
                      <span>Conf:</span>
                      <span className="font-bold">{rec.confidence}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
