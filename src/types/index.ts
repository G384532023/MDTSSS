export interface Crime {
  id: string;
  name: string;
  fine: number;
  fineWithoutGoods?: number;
  detention: number;
  description: string;
  details: string;
  category: 'robbery' | 'murder' | 'minor' | 'drug';
  maxCriminals?: number;
  minPolice?: number;
  specialRules?: string[];
}

export interface Criminal {
  id: string;
  name: string;
  selectedCrimes: string[];
}

export interface MDTReport {
  criminal: Criminal;
  crimes: Crime[];
  totalFine: number;
  totalDetention: number;
}

export interface WantedReport {
  criminal: Criminal;
  crimes: Crime[];
  wantedUntil: Date;
}