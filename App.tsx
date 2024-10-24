import React, { useState } from 'react';
import { AlertCircle, FileText, Pill, Skull } from 'lucide-react';
import { crimes } from './data/crimes';
import { CrimeSelector } from './components/CrimeSelector';
import { CriminalForm } from './components/CriminalForm';
import { ReportGenerator } from './components/ReportGenerator';
import { Criminal } from './types';

function App() {
  const [criminals, setCriminals] = useState<Criminal[]>([]);
  const [selectedCrimes, setSelectedCrimes] = useState<Set<string>>(new Set());

  const handleAddCriminal = (criminal: Criminal) => {
    setCriminals([...criminals, criminal]);
  };

  const handleDeleteCriminal = (id: string) => {
    setCriminals(criminals.filter(c => c.id !== id));
  };

  const toggleCrime = (crimeId: string) => {
    const newSelection = new Set(selectedCrimes);
    if (newSelection.has(crimeId)) {
      newSelection.delete(crimeId);
    } else {
      newSelection.add(crimeId);
    }
    setSelectedCrimes(newSelection);

    if (criminals.length > 0) {
      const updatedCriminals = [...criminals];
      const lastCriminal = updatedCriminals[updatedCriminals.length - 1];
      lastCriminal.selectedCrimes = Array.from(newSelection);
      setCriminals(updatedCriminals);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            犯罪計算システム
          </h1>
          <p className="text-gray-400">正確な罰金と拘留時間を計算します</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CriminalForm onAddCriminal={handleAddCriminal} />
            
            <CrimeSelector
              crimes={crimes}
              category="robbery"
              selectedCrimes={selectedCrimes}
              onToggleCrime={toggleCrime}
              icon={<AlertCircle className="w-5 h-5 text-red-500" />}
              title="強盗系犯罪"
            />

            <CrimeSelector
              crimes={crimes}
              category="murder"
              selectedCrimes={selectedCrimes}
              onToggleCrime={toggleCrime}
              icon={<Skull className="w-5 h-5 text-red-500" />}
              title="殺人系犯罪"
            />

            <CrimeSelector
              crimes={crimes}
              category="minor"
              selectedCrimes={selectedCrimes}
              onToggleCrime={toggleCrime}
              icon={<FileText className="w-5 h-5 text-yellow-500" />}
              title="軽犯罪"
            />

            <CrimeSelector
              crimes={crimes}
              category="drug"
              selectedCrimes={selectedCrimes}
              onToggleCrime={toggleCrime}
              icon={<Pill className="w-5 h-5 text-purple-500" />}
              title="薬物系犯罪"
            />
          </div>

          <div className="lg:sticky lg:top-6 self-start">
            <ReportGenerator 
              criminals={criminals} 
              crimes={crimes} 
              onDeleteCriminal={handleDeleteCriminal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;