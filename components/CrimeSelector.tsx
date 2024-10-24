import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Crime } from '../types';

interface CrimeSelectorProps {
  crimes: Crime[];
  category: string;
  selectedCrimes: Set<string>;
  onToggleCrime: (crimeId: string) => void;
  icon: React.ReactNode;
  title: string;
}

export const CrimeSelector: React.FC<CrimeSelectorProps> = ({
  crimes,
  category,
  selectedCrimes,
  onToggleCrime,
  icon,
  title
}) => {
  const filteredCrimes = crimes.filter((crime) => crime.category === category);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredCrimes.length / itemsPerPage);
  
  const currentCrimes = filteredCrimes.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          {icon}
          {title}
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>{currentPage + 1} / {totalPages}</span>
        </div>
      </div>

      <div className="relative">
        <div className="space-y-3">
          {currentCrimes.map((crime) => (
            <label
              key={crime.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCrimes.has(crime.id)}
                onChange={() => onToggleCrime(crime.id)}
                className="w-5 h-5 mt-1 rounded text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
              />
              <div className="flex-1">
                <span className="group-hover:text-blue-400 transition-colors font-medium">
                  {crime.name}
                </span>
                {crime.description && (
                  <p className="text-sm text-gray-400 mt-1">{crime.description}</p>
                )}
                {crime.details && (
                  <p className="text-xs text-gray-500 mt-1">{crime.details}</p>
                )}
                <div className="text-sm text-gray-400 mt-1">
                  <span className="inline-block mr-4">
                    罰金: {crime.fineWithoutGoods 
                      ? `${crime.fine.toLocaleString()}円 (盗品なし: ${crime.fineWithoutGoods.toLocaleString()}円)`
                      : `${crime.fine.toLocaleString()}円`}
                  </span>
                  {crime.detention > 0 && (
                    <span>懲役: {crime.detention}分</span>
                  )}
                </div>
              </div>
            </label>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center pointer-events-none">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700/80 transition-colors pointer-events-auto"
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700/80 transition-colors pointer-events-auto"
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};