'use client';

import { LucideIcon } from 'lucide-react';
import ClientOnly from './ClientOnly';

interface SummaryCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: 'green' | 'blue' | 'red' | 'purple';
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const colorClasses = {
  green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  red: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
  purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
};

export default function SummaryCard({ title, value, icon: Icon, color, trend }: SummaryCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <ClientOnly fallback={<div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-1"></div>}>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {formatCurrency(value)}
            </p>
          </ClientOnly>
          {trend && (
            <ClientOnly fallback={<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-1"></div>}>
              <p className={`text-sm mt-1 ${trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {trend.isPositive ? '+' : ''}{trend.value.toFixed(1)}% from last month
              </p>
            </ClientOnly>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}