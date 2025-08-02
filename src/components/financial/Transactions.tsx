import React from 'react';
import { TransactionsProps } from '@/types';

export const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white border-opacity-20">
      <h3 className="text-2xl font-semibold text-slate-700 mb-5">Recent Transactions</h3>
      <div>
        {transactions.length === 0 ? (
          <div className="flex justify-between items-center py-4 border-b border-slate-200 hover:bg-red-50 hover:-mx-4 hover:px-4 hover:rounded-lg transition-all">
            <div>
              <div className="font-medium text-slate-700">Welcome! Add your first transaction above.</div>
              <div className="text-sm text-slate-500">Ready to get started</div>
            </div>
            <div className="font-semibold text-lg">$0.00</div>
          </div>
        ) : (
          transactions.slice(0, 10).map((transaction, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b border-slate-200 hover:bg-red-50 hover:-mx-4 hover:px-4 hover:rounded-lg transition-all">
              <div>
                <div className="font-medium text-slate-700">{transaction.description} ({transaction.category})</div>
                <div className="text-sm text-slate-500">{transaction.date}</div>
              </div>
              <div className={`font-semibold text-lg ${
                transaction.type === 'donation' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'donation' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};