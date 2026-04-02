export interface Transaction {
  id: number;
  date: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  description?: string;
}

export interface User {
  role: 'viewer' | 'admin';
}

export interface DashboardStats {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
  highestSpendingCategory: string;
  monthlySavings: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface BalanceTrendData {
  date: string;
  balance: number;
}