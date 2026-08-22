interface TimeSheet {
  hourlyRate: number; // 30
  exchangeRate: number; // 1353.42
}

interface Invoice {
  id: string;
  timeSheet: TimeSheet;
  value: number; // hours|toMinute, bonusAmount
  narration?: string;
  isBonus?: boolean;
  entryDate: string;
}

interface Receipt {
  id: string;
  invoiceIds: string[];
  amountPaid: number; // actual|expected
  entryDate: string;
}

// per receipt, dashboard
interface Analytics { 
  totalHours: number; // toMinute
  totalBonuses: number;
  actualIncome: number;
  expectedIncome: number;
}

/**
# Invoice Area Chart

## Filter By 

#### Time Interval
- Weekly
- Bi-weekly
- Monthly
- Quarterly
- Yearly

#### Hours
- Hours
- Income
 */
