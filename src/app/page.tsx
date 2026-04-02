'use client';

import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { useFinanceStore } from '@/store/useFinanceStore';
import Navbar from '@/components/Navbar';
import SummaryCard from '@/components/SummaryCard';
import BalanceTrendChart from '@/components/charts/BalanceTrendChart';
import CategoryPieChart from '@/components/charts/CategoryPieChart';
import TransactionTable from '@/components/TransactionTable';
import InsightsSection from '@/components/InsightsSection';

export default function Dashboard() {
  const { 
    getTotalBalance, 
    getTotalIncome, 
    getTotalExpenses 
  } = useFinanceStore();

  const totalBalance = getTotalBalance();
  const totalIncome = getTotalIncome();
  const totalExpenses = getTotalExpenses();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SummaryCard
            title="Total Balance"
            value={totalBalance}
            icon={Wallet}
            color="blue"
            trend={{ value: 12.5, isPositive: true }}
          />
          <SummaryCard
            title="Total Income"
            value={totalIncome}
            icon={TrendingUp}
            color="green"
            trend={{ value: 8.2, isPositive: true }}
          />
          <SummaryCard
            title="Total Expenses"
            value={totalExpenses}
            icon={TrendingDown}
            color="red"
            trend={{ value: 3.1, isPositive: false }}
          />
          <SummaryCard
            title="Net Savings"
            value={totalIncome - totalExpenses}
            icon={DollarSign}
            color="purple"
            trend={{ value: 15.7, isPositive: true }}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <BalanceTrendChart />
          <CategoryPieChart />
        </div>

        {/* Transactions Table */}
        <div className="mb-8">
          <TransactionTable />
        </div>

        {/* Insights Section */}
        <InsightsSection />
      </main>
    </div>
  );
}