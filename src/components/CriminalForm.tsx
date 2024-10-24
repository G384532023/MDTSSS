import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Criminal } from '../types';

interface CriminalFormProps {
  onAddCriminal: (criminal: Criminal) => void;
}

export const CriminalForm: React.FC<CriminalFormProps> = ({ onAddCriminal }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddCriminal({
        id: Date.now().toString(),
        name: name.trim(),
        selectedCrimes: []
      });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl mb-6 border border-gray-700">
      <div className="flex gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="犯罪者の名前を入力"
          className="flex-1 bg-gray-700/50 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none border border-gray-600"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          追加
        </button>
      </div>
    </form>
  );
};