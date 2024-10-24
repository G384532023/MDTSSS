import React from 'react';
import { Clipboard, Trash2, AlertCircle } from 'lucide-react';
import { Criminal, Crime, MDTReport, WantedReport } from '../types';

interface ReportGeneratorProps {
  criminals: Criminal[];
  crimes: Crime[];
  onDeleteCriminal: (id: string) => void;
}

export const ReportGenerator: React.FC<ReportGeneratorProps> = ({ criminals, crimes, onDeleteCriminal }) => {
  const generateMDTReport = (criminal: Criminal): MDTReport => {
    const selectedCrimes = crimes.filter((crime) => criminal.selectedCrimes.includes(crime.id));
    const totalFine = selectedCrimes.reduce((acc, crime) => acc + crime.fine, 0);
    const totalDetention = selectedCrimes.reduce((acc, crime) => acc + crime.detention, 0);

    return {
      criminal,
      crimes: selectedCrimes,
      totalFine,
      totalDetention
    };
  };

  const generateWantedReport = (criminal: Criminal): WantedReport => {
    const selectedCrimes = crimes.filter((crime) => criminal.selectedCrimes.includes(crime.id));
    const wantedUntil = new Date();
    wantedUntil.setMinutes(wantedUntil.getMinutes() + 30);

    return {
      criminal,
      crimes: selectedCrimes,
      wantedUntil
    };
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      {criminals.length === 0 ? (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700 text-center">
          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">犯罪者を追加してください</p>
        </div>
      ) : (
        criminals.map((criminal) => {
          const mdtReport = generateMDTReport(criminal);
          const wantedReport = generateWantedReport(criminal);

          const mdtText = `名前：${criminal.name}
罪状：${mdtReport.crimes.map(c => c.name).join('、')}
罰金：${mdtReport.totalFine.toLocaleString()}円
拘留：${mdtReport.totalDetention}分`;

          const wantedText = `指名手配のお知らせ
氏名：${criminal.name}
罪状：${wantedReport.crimes.map(c => c.name).join('、')}
指名手配時間：${wantedReport.wantedUntil.getHours()}時${wantedReport.wantedUntil.getMinutes()}分まで（30分）`;

          return (
            <div key={criminal.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{criminal.name}の報告書</h3>
                <button
                  onClick={() => onDeleteCriminal(criminal.id)}
                  className="text-red-400 hover:text-red-300 transition-colors p-2"
                  title="削除"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">MDTレポート</h4>
                    <button
                      onClick={() => copyToClipboard(mdtText)}
                      className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                      title="コピー"
                    >
                      <Clipboard className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-sm whitespace-pre-wrap">{mdtText}</pre>
                </div>

                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">指名手配書</h4>
                    <button
                      onClick={() => copyToClipboard(wantedText)}
                      className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                      title="コピー"
                    >
                      <Clipboard className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-sm whitespace-pre-wrap">{wantedText}</pre>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};