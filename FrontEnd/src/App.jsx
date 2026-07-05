import { useState, useEffect, useCallback } from 'react';
import { INITIAL_REPORTS } from './data';
import { Dashboard } from './components/Dashboard';
import { PlayerExplorer } from './components/PlayerExplorer';
import { SimilarityEngine } from './components/SimilarityEngine';
import { AuctionEstimator } from './components/AuctionEstimator';
import { ScoutingAnalysis } from './components/ScoutingAnalysis';
import { adaptPlayers } from './utils/adapters';
import {
  LayoutDashboard, Search, Compass, DollarSign,
  FileSpreadsheet, Cpu, Award, ExternalLink, RefreshCw
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

const NAV_TABS = [
  { id: 'dashboard', label: 'Command Dashboard', icon: LayoutDashboard },
  { id: 'explorer',  label: 'Prospect Explorer',  icon: Search          },
  { id: 'matching',  label: 'Similarity Engine',  icon: Compass         },
  { id: 'valuation', label: 'Auction Estimator',  icon: DollarSign      },
  { id: 'scouting',  label: 'Gemini Intel Hub',   icon: FileSpreadsheet },
];

const SQUAD_ROWS = [
  { label: 'Batters Analyzed', role: 'Batter'      },
  { label: 'Bowlers Analyzed', role: 'Bowler'      },
  { label: 'All-Rounders',     role: 'All-Rounder' },
];

const countByRole = (players, role) =>
  players.filter((p) => p.role === role).length;

export default function App() {
  const [players,        setPlayers       ] = useState([]);
  const [reports,        setReports       ] = useState(INITIAL_REPORTS);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedReport, setSelectedReport] = useState(INITIAL_REPORTS[0]);
  const [currentTab,     setCurrentTab    ] = useState('dashboard');
  const [loading,        setLoading       ] = useState(true);
  const [error,          setError         ] = useState(null);

  const fetchPlayers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/players`);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data    = await res.json();
      const adapted = adaptPlayers(data);
      setPlayers(adapted);
      setSelectedPlayer((prev) => prev ?? adapted[0] ?? null);
    } catch (err) {
      console.error('Failed to fetch players:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPlayers(); }, [fetchPlayers]);

  const handleSelectTab = useCallback((tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectPlayer = useCallback((player) => {
    setSelectedPlayer(player);
    handleSelectTab('explorer');
  }, [handleSelectTab]);

  const handleAddReport = useCallback((report) => {
    setReports((prev) => [report, ...prev]);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-cricket-slate-950 text-white flex items-center justify-center font-mono">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-2 border-cricket-accent border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-cricket-slate-400 text-xs tracking-widest uppercase">
            Loading Scouting Data...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-cricket-slate-950 text-white flex items-center justify-center font-mono">
        <div className="text-center space-y-4 max-w-sm px-6">
          <div className="w-10 h-10 border border-red-500/30 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-red-400 text-lg">!</span>
          </div>
          <p className="text-red-400 text-sm tracking-widest uppercase">Backend Connection Failed</p>
          <p className="text-cricket-slate-500 text-xs">{error}</p>
          <p className="text-cricket-slate-600 text-xs">Make sure Flask is running on port 5000</p>
          <button
            onClick={fetchPlayers}
            className="flex items-center gap-2 mx-auto mt-2 px-4 py-2 border border-cricket-slate-700 text-cricket-slate-400 text-xs font-mono hover:border-cricket-accent hover:text-cricket-accent transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cricket-slate-950 text-white font-sans flex flex-col" id="app-canvas">

      <header className="border-b border-cricket-slate-800 bg-cricket-slate-900/60 backdrop-blur-md sticky top-0 z-50 px-4 py-3" id="app-header">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white flex items-center justify-center border border-cricket-slate-800">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg tracking-tight text-white">CRICScOUT // COCKPIT</span>
                <span className="bg-white text-black font-mono font-bold text-[9px] px-1.5 py-0.5">AI PRO</span>
              </div>
              <span className="text-[10px] text-cricket-slate-400 font-mono tracking-widest uppercase opacity-60">Tactical Metric System</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-cricket-slate-900 px-4 py-2 border border-cricket-slate-800 text-xs font-mono">
            <span className="text-cricket-slate-400 opacity-50">SUBJECT FOCUS:</span>
            {selectedPlayer && selectedPlayer.avatarUrl && (
              <img
                src={selectedPlayer.avatarUrl}
                alt={selectedPlayer.name}
                referrerPolicy="no-referrer"
                className="w-5 h-5 object-cover border border-cricket-slate-800"
              />
            )}
            <span
              className="text-white font-bold cursor-pointer hover:underline"
              onClick={() => handleSelectTab('explorer')}
            >
              {selectedPlayer ? selectedPlayer.name.toUpperCase() : 'NO PLAYER'}
            </span>
            <span className="text-cricket-slate-400 opacity-60">
              ({selectedPlayer ? selectedPlayer.team : '—'})
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-cricket-slate-400">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-10 h-[1px] bg-cricket-slate-700" />
              <span className="text-[10px] tracking-widest opacity-60">LOC. 28.6139 N, 77.2090 E</span>
            </div>
            <div className="flex items-center gap-2 bg-cricket-slate-900 border border-cricket-slate-800 px-2.5 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-white text-[9px] tracking-widest">SYNC_OK {players.length} PLAYERS</span>
            </div>
          </div>

        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6" id="workspace-layout">

        <nav className="lg:col-span-3 space-y-4" id="navigation-sidebar">
          <div className="bg-gradient-to-b from-cricket-slate-900 to-cricket-slate-950 border border-cricket-slate-800 rounded-xl p-4 space-y-2">
            <h3 className="text-[10px] font-mono font-bold text-cricket-slate-500 uppercase tracking-wider px-2 mb-3">
              Scouting Modules
            </h3>
            {NAV_TABS.map(({ id, label, icon: Icon }) => {
              const isActive = currentTab === id;
              return (
                <button
                  key={id}
                  onClick={() => handleSelectTab(id)}
                  className={`w-full text-left py-3 px-3.5 rounded-lg text-xs font-mono font-medium flex items-center gap-3 transition-all ${
                    isActive
                      ? 'bg-cricket-accent text-black font-semibold shadow-md'
                      : 'text-cricket-slate-400 hover:text-white hover:bg-cricket-slate-800/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-black' : 'text-cricket-slate-500'}`} />
                  {label}
                </button>
              );
            })}
          </div>

          <div className="bg-cricket-slate-900/30 border border-cricket-slate-800/60 p-4 rounded-xl text-xs space-y-2 font-mono text-cricket-slate-500">
            <div className="flex justify-between items-center text-cricket-slate-400 font-bold border-b border-cricket-slate-800 pb-2 mb-1">
              <span>SQUAD DEPTH</span>
              <Award className="w-3.5 h-3.5 text-cricket-accent" />
            </div>
            {SQUAD_ROWS.map(({ label, role }) => (
              <div key={role} className="flex justify-between">
                <span>{label}</span>
                <span className="text-white">{countByRole(players, role)}</span>
              </div>
            ))}
            <div className="flex justify-between border-t border-cricket-slate-800 pt-2 mt-1">
              <span>Total Players</span>
              <span className="text-cricket-accent font-bold">{players.length}</span>
            </div>
          </div>
        </nav>

        <div className="lg:col-span-9" id="primary-view-container">
          {currentTab === 'dashboard' && (
            <Dashboard
              players={players}
              reports={reports}
              onSelectPlayer={handleSelectPlayer}
              onSelectTab={handleSelectTab}
              onSelectReport={setSelectedReport}
            />
          )}
          {currentTab === 'explorer' && (
            <PlayerExplorer
              players={players}
              selectedPlayer={selectedPlayer}
              onSelectPlayer={setSelectedPlayer}
              onSelectTab={handleSelectTab}
            />
          )}
          {currentTab === 'matching' && (
            <SimilarityEngine
              players={players}
              selectedPlayer={selectedPlayer}
              onSelectPlayer={setSelectedPlayer}
            />
          )}
          {currentTab === 'valuation' && (
            <AuctionEstimator
              players={players}
              selectedPlayer={selectedPlayer}
            />
          )}
          {currentTab === 'scouting' && (
            <ScoutingAnalysis
              players={players}
              reports={reports}
              selectedReport={selectedReport}
              onSelectReport={setSelectedReport}
              onAddNewReport={handleAddReport}
            />
          )}
        </div>

      </main>

      <footer className="border-t border-cricket-slate-800 bg-cricket-slate-900/40 p-4 font-mono text-[10px] text-cricket-slate-500" id="app-footer">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            System compiled in <span className="text-cricket-cyan">Cloud Run sandbox</span>. Powered by Google AI Studio.
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="https://ai.studio/build"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cricket-accent flex items-center gap-0.5"
            >
              CricScout AI Build <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <span>All rights reserved 2026.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}