import { Transaction } from '@/types';

export const mockTransactions: Transaction[] = [
  {
    id: 1,
    date: '2024-03-15',
    amount: 3500,
    category: 'Salary',
    type: 'income',
    description: 'Monthly salary'
  },
  {
    id: 2,
    date: '2024-03-14',
    amount: 1200,
    category: 'Rent',
    type: 'expense',
    description: 'Monthly rent payment'
  },
  {
    id: 3,
    date: '2024-03-13',
    amount: 250,
    category: 'Groceries',
    type: 'expense',
    description: 'Weekly grocery shopping'
  },
  {
    id: 4,
    date: '2024-03-12',
    amount: 80,
    category: 'Transportation',
    type: 'expense',
    description: 'Gas and parking'
  },
  {
    id: 5,
    date: '2024-03-11',
    amount: 150,
    category: 'Entertainment',
    type: 'expense',
    description: 'Movie and dinner'
  },
  {
    id: 6,
    date: '2024-03-10',
    amount: 500,
    category: 'Freelance',
    type: 'income',
    description: 'Web development project'
  },
  {
    id: 7,
    date: '2024-03-09',
    amount: 45,
    category: 'Utilities',
    type: 'expense',
    description: 'Internet bill'
  },
  {
    id: 8,
    date: '2024-03-08',
    amount: 200,
    category: 'Healthcare',
    type: 'expense',
    description: 'Doctor visit'
  },
  {
    id: 9,
    date: '2024-03-07',
    amount: 75,
    category: 'Shopping',
    type: 'expense',
    description: 'Clothing purchase'
  },
  {
    id: 10,
    date: '2024-03-06',
    amount: 1000,
    category: 'Investment',
    type: 'income',
    description: 'Stock dividend'
  },
  {
    id: 11,
    date: '2024-02-28',
    amount: 3500,
    category: 'Salary',
    type: 'income',
    description: 'Monthly salary'
  },
  {
    id: 12,
    date: '2024-02-27',
    amount: 1200,
    category: 'Rent',
    type: 'expense',
    description: 'Monthly rent payment'
  },
  {
    id: 13,
    date: '2024-02-26',
    amount: 300,
    category: 'Groceries',
    type: 'expense',
    description: 'Monthly groceries'
  },
  {
    id: 14,
    date: '2024-02-25',
    amount: 120,
    category: 'Transportation',
    type: 'expense',
    description: 'Monthly transport pass'
  },
  {
    id: 15,
    date: '2024-02-24',
    amount: 200,
    category: 'Entertainment',
    type: 'expense',
    description: 'Concert tickets'
  },
  {
    id: 16,
    date: '2024-01-31',
    amount: 3500,
    category: 'Salary',
    type: 'income',
    description: 'Monthly salary'
  },
  {
    id: 17,
    date: '2024-01-30',
    amount: 1200,
    category: 'Rent',
    type: 'expense',
    description: 'Monthly rent payment'
  },
  {
    id: 18,
    date: '2024-01-29',
    amount: 180,
    category: 'Groceries',
    type: 'expense',
    description: 'Weekly groceries'
  },
  {
    id: 19,
    date: '2024-01-28',
    amount: 95,
    category: 'Transportation',
    type: 'expense',
    description: 'Gas and maintenance'
  },
  {
    id: 20,
    date: '2024-01-27',
    amount: 320,
    category: 'Shopping',
    type: 'expense',
    description: 'Winter clothes'
  }
];

export const categories = [
  'Salary',
  'Freelance',
  'Investment',
  'Rent',
  'Groceries',
  'Transportation',
  'Entertainment',
  'Utilities',
  'Healthcare',
  'Shopping',
  'Other'
];

export const categoryColors: Record<string, string> = {
  'Salary': '#10B981',
  'Freelance': '#059669',
  'Investment': '#047857',
  'Rent': '#EF4444',
  'Groceries': '#F59E0B',
  'Transportation': '#8B5CF6',
  'Entertainment': '#EC4899',
  'Utilities': '#6B7280',
  'Healthcare': '#3B82F6',
  'Shopping': '#F97316',
  'Other': '#6366F1'
};