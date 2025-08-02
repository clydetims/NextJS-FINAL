import React from 'react';
import { CardProps } from '@/types';

export const Card: React.FC<CardProps> = ({ 
  title, 
  icon, 
  type, 
  onSubmit, 
  buttonText, 
  fields, 
  formData, 
  setFormData 
}) => {
  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white border-opacity-20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-1 ${
        type === 'donation' 
          ? 'bg-gradient-to-r from-red-500 to-red-600' 
          : 'bg-gradient-to-r from-red-400 to-red-500'
      }`}></div>
      
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl mr-4 ${
          type === 'donation'
            ? 'bg-gradient-to-br from-red-500 to-red-600'
            : 'bg-gradient-to-br from-red-400 to-red-500'
        }`}>
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-slate-700">{title}</h2>
      </div>

      <form onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="mb-5">
            <label className="block mb-2 font-medium text-slate-600 text-sm">
              {field.label}
            </label>
            {field.type === 'select' ? (
              <select
                className="w-full text-gray-600 p-3 border-2 border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-lg transition-all cursor-pointer"
                value={formData[field.name] || ''}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                  setFormData(prev => ({...prev, [field.name]: e.target.value}))
                }
                required
              >
                <option value="">Select {field.label.toLowerCase()}</option>
                {field.options?.map((option, idx) => (
                  <option key={idx} value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                step={field.type === 'number' ? '0.01' : undefined}
                className="w-full text-gray-600 p-3 border-2 border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-lg transition-all"
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  setFormData(prev => ({...prev, [field.name]: e.target.value}))
                }
                required
              />
            )}
          </div>
        ))}
        
        <button
          type="submit"
          className={`w-full py-4 px-7 rounded-xl font-semibold uppercase tracking-wide text-white shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
            buttonText === '✓ Added!' 
              ? 'bg-gradient-to-r from-green-500 to-green-400' 
              : type === 'donation'
                ? 'bg-gradient-to-r from-red-500 to-red-600'
                : 'bg-gradient-to-r from-red-400 to-red-500'
          }`}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};
