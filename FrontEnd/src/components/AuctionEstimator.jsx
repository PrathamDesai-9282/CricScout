import React, { useState, useEffect, useRef } from 'react';
import { IndianRupee, Zap, RotateCcw, Award, Sparkles, Building, UserCheck, Play } from 'lucide-react';

export const AuctionEstimator = ({
  players,
  selectedPlayer
}) => {
  const [biddingActive,  setBiddingActive ] = useState(false);
  const [currentBid,     setCurrentBid    ] = useState(0);
  const [highestBidder,  setHighestBidder ] = useState('Base Price');
  const [biddingLogs,    setBiddingLogs   ] = useState([]);
  const [isBiddingDone,  setIsBiddingDone ] = useState(false);
  const [biddingTurn,    setBiddingTurn   ] = useState('idle');

  const logsEndRef = useRef(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [biddingLogs]);

  const BID_STEP = 50; // points per bid increment

  const startAuctionSimulation = () => {
    const starterBid = selectedPlayer.auction.basePrice;
    setCurrentBid(starterBid);
    setHighestBidder('Auctioneer');
    setBiddingLogs([{
      bidder: 'Auctioneer',
      amount: starterBid,
      text: `Starting the auction for ${selectedPlayer.name} at the Base Price of ${starterBid} PTS.`
    }]);
    setIsBiddingDone(false);
    setBiddingActive(true);
    setBiddingTurn('user');
  };

  const placeUserBid = () => {
    if (!biddingActive || isBiddingDone || biddingTurn !== 'user') return;
    const nextBid = currentBid + BID_STEP;
    const newLog = {
      bidder: 'Scout Desktop (You)',
      amount: nextBid,
      text: `You submitted a bid of ${nextBid} PTS.`
    };
    setBiddingLogs(prev => [...prev, newLog]);
    setCurrentBid(nextBid);
    setHighestBidder('Scout Desktop (You)');
    setBiddingTurn('ai');
    scheduleAiCounterBid(nextBid);
  };

  const scheduleAiCounterBid = (userBid) => {
    setTimeout(() => {
      const estValue = selectedPlayer.auction.estValue;
      const excessRatio = userBid / estValue;
      let foldChance = 10;
      if (excessRatio > 0.8)  foldChance = 25;
      if (excessRatio >= 1.0) foldChance = 55;
      if (excessRatio >= 1.25) foldChance = 85;

      const randomFoldRoll = Math.floor(Math.random() * 100);

      if (randomFoldRoll < foldChance) {
        const winLog = {
          bidder: 'System Auctioneer',
          amount: userBid,
          text: `🔨 SOLD! ${selectedPlayer.name} is knocked down to Scout Desktop (You) for ${userBid} PTS! Excellent recruitment value.`
        };
        setBiddingLogs(prev => [...prev, winLog]);
        setIsBiddingDone(true);
        setBiddingTurn('idle');
      } else {
        const aiOpponents = ['Vapi Warriors', 'Surat Strikers', 'Navsari Knights'];
        const fitMap = selectedPlayer.auction.franchiseFit;
        let selectedAi = 'Vapi Warriors';
        if (fitMap.chennai > fitMap.mumbai && fitMap.chennai > fitMap.delhi) selectedAi = 'Surat Strikers';
        if (fitMap.delhi > fitMap.mumbai && fitMap.delhi > fitMap.chennai) selectedAi = 'Navsari Knights';
        if (Math.random() > 0.6) {
          const others = aiOpponents.filter(o => o !== selectedAi);
          selectedAi = others[Math.floor(Math.random() * others.length)];
        }
        const nextAiBid = userBid + BID_STEP;
        const counterLog = {
          bidder: selectedAi,
          amount: nextAiBid,
          text: `🚨 ${selectedAi} raises back to ${nextAiBid} PTS.`
        };
        setBiddingLogs(prev => [...prev, counterLog]);
        setCurrentBid(nextAiBid);
        setHighestBidder(selectedAi);
        setBiddingTurn('user');
      }
    }, Math.floor(Math.random() * 500) + 400);
  };

  const foldAuction = () => {
    if (!biddingActive || isBiddingDone) return;
    const finalLog = {
      bidder: 'System Auctioneer',
      amount: currentBid,
      text: `❌ You withdrew from bidding. ${selectedPlayer.name} has been sold to ${highestBidder} for ${currentBid} PTS.`
    };
    setBiddingLogs(prev => [...prev, finalLog]);
    setIsBiddingDone(true);
    setBiddingTurn('idle');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="auction-container">

      <div className="col-span-12 space-y-1">
        <h2 className="text-xl font-display font-medium text-white flex items-center gap-2">
          <IndianRupee className="w-5 h-5 text-cricket-cyan shrink-0" /> Market Appraisal & Auction Emulator
        </h2>
        <p className="text-sm text-cricket-slate-400">
          Scoring-adjusted algorithm predicting team bids and simulated auction points for{' '}
          <span className="text-white font-medium">{selectedPlayer.name}</span>.
        </p>
      </div>

      {/* Left: Market Appraisals & Team Fit */}
      <div className="lg:col-span-5 space-y-4" id="auction-metrics-pane">

        <div className="bg-gradient-to-br from-cricket-slate-900 to-cricket-slate-950 border border-cricket-slate-800 p-5 rounded-xl space-y-4">
          <h3 className="text-sm font-display font-medium text-white flex items-center gap-1.5 border-b border-cricket-slate-800 pb-3">
            <Sparkles className="w-4 h-4 text-cricket-accent" /> Intelligence Appraisals
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cricket-slate-950 p-3.5 border border-cricket-slate-800 rounded-lg">
              <span className="text-[10px] font-mono text-cricket-slate-500 uppercase block">Est Auction Value</span>
              <span className="text-xl font-display font-bold text-cricket-accent mt-1 block">
                {selectedPlayer.auction.estValue} PTS
              </span>
              <span className="text-[9px] font-mono text-cricket-slate-400">Scout Appraisal</span>
            </div>

            <div className="bg-cricket-slate-950 p-3.5 border border-cricket-slate-800 rounded-lg">
              <span className="text-[10px] font-mono text-cricket-slate-500 uppercase block">Base Price</span>
              <span className="text-xl font-display font-bold text-white mt-1 block">
                {selectedPlayer.auction.basePrice} PTS
              </span>
              <span className="text-[9px] font-mono text-cricket-slate-400">Auction Floor</span>
            </div>
          </div>

          {/* Auction breakdown */}
          <div className="space-y-2">
            <div className="text-xs text-cricket-slate-400 font-mono">Auction Points Breakdown</div>
            <div className="space-y-1">
              {selectedPlayer.auction.keyDrivers.map((driver, idx) => (
                <div key={idx} className="flex justify-between text-xs font-mono bg-cricket-slate-950/60 px-3 py-1.5 border border-cricket-slate-800 rounded">
                  <span className="text-cricket-slate-400">{driver.label}</span>
                  <span className="text-cricket-accent font-bold">+{driver.impact} PTS</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Fit */}
        <div className="bg-cricket-slate-900 border border-cricket-slate-800 p-5 rounded-xl space-y-4">
          <h3 className="text-sm font-display font-medium text-white flex items-center gap-1.5 border-b border-cricket-slate-800 pb-3">
            <Building className="w-4 h-4 text-cricket-cyan" /> Predicted Team Fit Models
          </h3>

          <div className="space-y-3.5">
            {[
              { label: 'Vapi Warriors',    score: selectedPlayer.auction.franchiseFit.mumbai,  color: 'bg-blue-500'   },
              { label: 'Surat Strikers',   score: selectedPlayer.auction.franchiseFit.chennai, color: 'bg-yellow-500' },
              { label: 'Navsari Knights',  score: selectedPlayer.auction.franchiseFit.delhi,   color: 'bg-red-500'    },
            ].map((fit, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-cricket-slate-300 font-medium">{fit.label}</span>
                  <span className="font-mono text-cricket-cyan font-bold">{fit.score}% Fit</span>
                </div>
                <div className="h-2 bg-cricket-slate-950 rounded-full overflow-hidden border border-cricket-slate-800">
                  <div style={{ width: `${fit.score}%` }} className={`h-full ${fit.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Bid War Simulator */}
      <div className="lg:col-span-7" id="auction-simulator-interactive-pane">
        <div className="bg-slate-950 border border-cricket-slate-800 rounded-xl p-5 min-h-[460px] flex flex-col justify-between relative overflow-hidden">

          <div className="absolute top-0 right-0 w-24 h-24 bg-cricket-cyan/5 rounded-full blur-xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-cricket-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-cricket-cyan uppercase tracking-wider block">Interactive Sandbox</span>
                <h3 className="text-base font-display font-medium text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cricket-accent" /> Bid War Simulator
                </h3>
              </div>

              {!biddingActive && (
                <button
                  onClick={startAuctionSimulation}
                  className="bg-cricket-accent hover:bg-opacity-95 text-black px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-cricket-accent/10"
                >
                  <Play className="w-3.5 h-3.5" /> Start Simulation
                </button>
              )}

              {biddingActive && (
                <button
                  onClick={startAuctionSimulation}
                  className="bg-transparent border border-cricket-slate-800 text-cricket-slate-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>

            {biddingActive && (
              <div className="grid grid-cols-2 gap-4 py-4 border-b border-cricket-slate-900 bg-cricket-slate-900/30 px-3 rounded-lg mt-3">
                <div>
                  <div className="text-[10px] font-mono text-cricket-slate-500 uppercase">Current Bid</div>
                  <div className="text-2xl font-mono font-bold text-cricket-accent mt-1">{currentBid} PTS</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-cricket-slate-500 uppercase">Highest Bidder</div>
                  <div className="text-sm font-display font-medium text-white mt-2 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-cricket-cyan" /> {highestBidder}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex-1 my-4 bg-cricket-slate-900 border border-cricket-slate-800 p-4 rounded-lg overflow-y-auto max-h-[220px] font-mono text-xs text-cricket-slate-300 space-y-2.5 scroll-smooth shadow-inner">
            {!biddingActive ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-cricket-slate-500 py-10">
                <Zap className="w-8 h-8 text-cricket-slate-600 mb-2 animate-pulse" />
                <p className="max-w-xs">Press "Start Simulation" to launch the AI Auction Desk and bid for {selectedPlayer.name} in real-time.</p>
              </div>
            ) : (
              biddingLogs.map((log, index) => {
                const isUser   = log.bidder.includes('You');
                const isSystem = log.bidder.includes('System') || log.bidder.includes('Auctioneer');
                const textColor = isUser ? 'text-cricket-cyan' : isSystem ? 'text-cricket-accent' : 'text-white';
                return (
                  <div
                    key={index}
                    className={`py-1 px-1.5 border-l-2 ${isUser ? 'border-cricket-cyan' : isSystem ? 'border-cricket-accent' : 'border-cricket-slate-700'} bg-cricket-slate-950/20`}
                  >
                    <div className="flex justify-between font-bold text-[10px] text-cricket-slate-500 mb-0.5">
                      <span>{log.bidder}</span>
                      <span>{log.amount} PTS</span>
                    </div>
                    <div className={textColor}>{log.text}</div>
                  </div>
                );
              })
            )}
            <div ref={logsEndRef} />
          </div>

          {biddingActive && !isBiddingDone && (
            <div className="flex gap-3">
              <button
                onClick={foldAuction}
                className="flex-1 bg-red-950/50 hover:bg-red-950 text-red-200 border border-red-900 py-3 rounded-xl text-xs font-mono cursor-pointer transition-colors"
              >
                Fold / Drop Out
              </button>
              <button
                onClick={placeUserBid}
                disabled={biddingTurn !== 'user'}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                  biddingTurn === 'user'
                    ? 'bg-cricket-cyan text-black cursor-pointer shadow-lg shadow-cricket-cyan/10'
                    : 'bg-cricket-slate-900 text-cricket-slate-500 cursor-not-allowed border border-cricket-slate-800'
                }`}
              >
                {biddingTurn === 'user' ? `Submit Bid (+${BID_STEP} PTS)` : 'Opponent is thinking...'}
              </button>
            </div>
          )}

          {biddingActive && isBiddingDone && (
            <div className="bg-cricket-slate-900 border border-cricket-slate-800 p-3 rounded-xl text-center space-y-2">
              <div className="text-white text-xs font-mono">
                Bidding concluded at <span className="text-cricket-accent font-bold">{currentBid} PTS</span>
              </div>
              <button
                onClick={startAuctionSimulation}
                className="inline-flex items-center gap-1 text-xs font-mono text-cricket-accent hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Re-launch Simulator
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};