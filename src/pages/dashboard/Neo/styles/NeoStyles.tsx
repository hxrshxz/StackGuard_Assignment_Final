import React from "react";

export const NeoStyles: React.FC = () => (
  <style>{`
    body { 
      font-family: 'Inter', sans-serif; 
      background-color: #f5f5f5; 
    }
    
    @keyframes fadeInUp { 
      from { opacity: 0; transform: translateY(15px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    
    @keyframes drawDonut { 
      to { stroke-dashoffset: 0; } 
    }
    
    .animate-fadeInUp { 
      animation: fadeInUp 0.5s ease-out forwards; 
      opacity: 0; 
    }
    
    .neo-card { 
      background-color: white; 
      border: 2px solid black; 
      border-radius: 12px; 
      box-shadow: 5px 5px 0px black; 
      transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1); 
    }
    
    .neo-card-hover:hover { 
      transform: translate(-2px, -2px); 
      box-shadow: 7px 7px 0px black; 
    }
    
    .neo-btn { 
      border: 2px solid black; 
      border-radius: 7px; 
      box-shadow: 3px 3px 0px black; 
      transition: all 0.15s ease-out; 
      font-weight: 600; 
    }
    
    .neo-btn:hover { 
      transform: translate(-1px, -1px); 
      box-shadow: 4px 4px 0px black; 
    }
    
    .neo-btn:active { 
      transform: translate(1px, 1px); 
      box-shadow: 2px 2px 0px black; 
    }
    
    /* Custom responsive adjustments for specific breakpoints */
    @media (min-width: 1200px) {
      .neo-dashboard-container {
        max-width: 1180px !important;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      .neo-stats-grid {
        grid-template-columns: repeat(6, 1fr) !important;
        gap: 1rem !important;
      }
      
      .neo-main-grid {
        grid-template-columns: 2fr 3fr !important;
        gap: 1.5rem !important;
      }
      
      .neo-stat-card {
        min-height: 120px;
        padding: 1rem;
      }
    }
    
    /* Ensure layout NEVER changes after 1280px */
    @media (min-width: 1280px) {
      .neo-dashboard-container {
        max-width: 1180px !important;
        margin: 0 auto !important;
        padding: 0 1rem !important;
      }
      
      .neo-stats-grid {
        grid-template-columns: repeat(6, 1fr) !important;
        gap: 1rem !important;
      }
      
      .neo-main-grid {
        grid-template-columns: 2fr 3fr !important;
        gap: 1.5rem !important;
      }
    }
    
    /* Force consistent grid behavior across all breakpoints */
    @media (min-width: 1024px) {
      .neo-stats-grid {
        display: grid !important;
      }
      
      .neo-main-grid {
        display: grid !important;
      }
    }
    
    /* Ensure no overflow issues */
    .neo-dashboard-container {
      overflow-x: hidden;
      width: 100%;
      box-sizing: border-box;
    }
    
    .neo-stats-grid {
      width: 100%;
      box-sizing: border-box;
    }
    
    .neo-main-grid {
      width: 100%;
      box-sizing: border-box;
    }
    
    /* Ensure consistent card behavior */
    .neo-card {
      box-sizing: border-box;
      flex-shrink: 0;
    }
    
    /* Ensure consistent card sizing */
    .neo-stat-card {
      min-height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    /* Consistent spacing for larger screens */
    @media (min-width: 1200px) {
      .neo-main-content {
        padding: 1.5rem;
      }
      
      .neo-card {
        box-shadow: 6px 6px 0px black;
      }
      
      .neo-card-hover:hover {
        transform: translate(-3px, -3px);
        box-shadow: 9px 9px 0px black;
      }
    }
  `}</style>
);
