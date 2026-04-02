import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Transaction, User } from '@/types';
import { mockTransactions } from '@/data/mockData';

interface FinanceStore {
  transactions: Transaction[];
  user: User;
  
  // Actions
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  updateTransaction: (id: number, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: number) => void;
  setUserRole: (role: 'viewer' | 'admin') => void;
  
  // Computed values
  getTotalBalance: () => number;
  getTotalIncome: () => number;
  getTotalExpenses: () => number;
  getHighestSpendingCategory: () => string;
  getCategoryData: () => Array<{ name: string; value: number; color: string }>;
  getBalanceTrend: () => Array<{ date: string; balance: number }>;
}

export const useFinanceStore = create<FinanceStore>()(
  persist(
    (set, get) => ({
      transactions: mockTransactions,
      user: { role: 'viewer' },

      addTransaction: (transaction) => {
        const newTransaction = {
          ...transaction,
          id: Math.max(...get().transactions.map(t => t.id)) + 1,
        };
        set((state) => ({
          transactions: [...state.transactions, newTransaction],
        }));
      },

      updateTransaction: (id, updatedTransaction) => {
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === id ? { ...t, ...updatedTransaction } : t
          ),
        }));
      },

      deleteTransaction: (id) => {
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        }));
      },

      setUserRole: (role) => {
        set((state) => ({
          user: { ...state.user, role },
        }));
      },

      getTotalBalance: () => {
        const { transactions } = get();
        return transactions.reduce((acc, transaction) => {
          return transaction.type === 'income'
            ? acc + transaction.amount
            : acc - transaction.amount;
        }, 0);
      },

      getTotalIncome: () => {
        const { transactions } = get();
        return transactions
          .filter((t) => t.type === 'income')
          .reduce((acc, t) => acc + t.amount, 0);
      },

      getTotalExpenses: () => {
        const { transactions } = get();
        return transactions
          .filter((t) => t.type === 'expense')
          .reduce((acc, t) => acc + t.amount, 0);
      },

      getHighestSpendingCategory: () => {
        const { transactions } = get();
        const categoryTotals = transactions
          .filter((t) => t.type === 'expense')
          .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
          }, {} as Record<string, number>);

        return Object.entries(categoryTotals).reduce(
          (max, [category, amount]) =>
            amount > (categoryTotals[max] || 0) ? category : max,
          ''
        );
      },

      getCategoryData: () => {
        const { transactions } = get();
        const categoryTotals = transactions
          .filter((t) => t.type === 'expense')
          .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
          }, {} as Record<string, number>);

        const colors = [
          '#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6',
          '#EC4899', '#6B7280', '#F97316', '#059669', '#6366F1'
        ];

        return Object.entries(categoryTotals).map(([name, value], index) => ({
          name,
          value,
          color: colors[index % colors.length],
        }));
      },

      getBalanceTrend: () => {
        const { transactions } = get();
        const sortedTransactions = [...transactions].sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        let runningBalance = 0;
        return sortedTransactions.map((transaction) => {
          runningBalance += transaction.type === 'income' 
            ? transaction.amount 
            : -transaction.amount;
          return {
            date: transaction.date,
            balance: runningBalance,
          };
        });
      },
    }),
    {
      name: 'finance-store',
    }
  )
);