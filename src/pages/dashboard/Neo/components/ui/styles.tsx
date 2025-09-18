import React from 'react';

export const NeoStyles: React.FC = () => (
  <style>{`
    body { font-family: 'Inter', sans-serif; background-color: #f5f5f5; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes drawDonut { to { stroke-dashoffset: 0; } }
    .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; opacity: 0; }
    .neo-card { background-color: white; border: 2px solid black; border-radius: 12px; box-shadow: 5px 5px 0px black; transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1); }
    .neo-card-hover:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0px black; }
    .neo-btn { border: 2px solid black; border-radius: 7px; box-shadow: 3px 3px 0px black; transition: all 0.15s ease-out; font-weight: 600; }
    .neo-btn:hover { transform: translate(-1px, -1px); box-shadow: 4px 4px 0px black; }
    .neo-btn:active { transform: translate(1px, 1px); box-shadow: 2px 2px 0px black; }
  `}</style>
);
