'use client';

import { User } from 'lucide-react';
import { useFinanceStore } from '@/store/useFinanceStore';

export default function Navbar() {
  const { user, setUserRole } = useFinanceStore();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">
              Finance Dashboard
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Role Switcher */}
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-gray-500" />
              <select
                value={user.role}
                onChange={(e) => setUserRole(e.target.value as 'viewer' | 'admin')}
                className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="viewer">Viewer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}