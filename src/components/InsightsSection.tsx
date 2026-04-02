'use client';

import { TrendingUp, TrendingDown, Target, PiggyBank } from 'lucide-react';
import { useFinanceStore } from '@/store/useFinanceStore';

export default function InsightsSection() {
  const { 
    transactions, 
    getTotalBalance, 
    getTotalIncome, 
    getTotalExpenses, 
    getHighestSpendingCategory 
  } = useFinanceStore();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Calculate monthly comparison
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  const currentMonthTransactions = transactions.filter(t => {
    const date = new Date(t.date);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  });

  const lastMonthTransactions = transactions.filter(t => {
    const date = new Date(t.date);
    return date.getMonth() === lastMonth && date.getFullYear() === lastMonthYear;
  });

  const currentMonthExpenses = currentMonthTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const lastMonthExpenses = lastMonthTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const expenseChange = lastMonthExpenses > 0 
    ? ((currentMonthExpenses - lastMonthExpenses) / lastMonthExpenses) * 100 
    : 0;

  const currentMonthIncome = currentMonthTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const monthlySavings = currentMonthIncome - currentMonthExpenses;
  const savingsRate = currentMonthIncome > 0 ? (monthlySavings / currentMonthIncome) * 100 : 0;

  const insights = [
    {
      title: 'Highest Spending Category',
      value: getHighestSpendingCategory() || 'No expenses',
      icon: Target,
      color: 'red' as const,
      description: 'Your top expense category this period'
    },
    {
      title: 'Monthly Spending Change',
      value: `${expenseChange >= 0 ? '+' : ''}${expenseChange.toFixed(1)}%`,
      icon: expenseChange >= 0 ? TrendingUp : TrendingDown,
      color: expenseChange >= 0 ? 'red' : 'green' as const,
      description: 'Compared to last month'
    },
    {
      title: 'Current Month Savings',
      value: formatCurrency(monthlySavings),
      icon: PiggyBank,
      color: monthlySavings >= 0 ? 'green' : 'red' as const,
      description: `${savingsRate.toFixed(1)}% savings rate`
    }
  ];

  const colorClasses: Record<string, string> = {
    green: 'bg-green-50 text-green-600',
    red: 'bg-red-50 text-red-600',
    blue: 'bg-blue-50 text-blue-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Financial Insights
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${colorClasses[insight.color]}`}>
              <insight.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900">
                {insight.title}
              </h4>
              <p className="text-xl font-bold text-gray-900 mt-1">
                {insight.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {insight.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional insights */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Average Transaction:</span>
            <span className="ml-2 font-medium text-gray-900">
              {formatCurrency(
                transactions.length > 0 
                  ? transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length 
                  : 0
              )}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Total Transactions:</span>
            <span className="ml-2 font-medium text-gray-900">
              {transactions.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}