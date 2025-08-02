import React from 'react';
import { SummaryProps } from '@/types';

export const Summary: React.FC<SummaryProps> = ({ totalDonations, totalExpenses, netAmount }) => {
  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl p-8 mb-8 shadow-2xl border border-white border-opacity-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="text-center p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-slate-700 mb-1">${totalDonations.toFixed(2)}</div>
          <div className="text-sm text-slate-500 uppercase tracking-wider">Total Donations</div>
        </div>
        <div className="text-center p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-slate-700 mb-1">${totalExpenses.toFixed(2)}</div>
          <div className="text-sm text-slate-500 uppercase tracking-wider">Total Expenses</div>
        </div>
        <div className="text-center p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-slate-700 mb-1">${netAmount.toFixed(2)}</div>
          <div className="text-sm text-slate-500 uppercase tracking-wider">Net Amount</div>
        </div>
      </div>
    </div>
  );
};