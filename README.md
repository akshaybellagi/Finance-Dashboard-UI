# Finance Dashboard UI

A modern, responsive personal finance tracking dashboard built with Next.js 16, React 18, TypeScript, and Tailwind CSS. This comprehensive application features a complete dark/light mode implementation, role-based access control, interactive data visualization, and persistent data management.

## ✨ Key Features

### 🌙 Dark/Light Mode Toggle
- **Seamless Theme Switching**: Toggle between light and dark themes with a single click
- **System Preference Detection**: Automatically detects and applies your OS theme preference
- **Persistent Themes**: Your theme choice is saved and restored across browser sessions
- **Comprehensive Styling**: All components fully support both light and dark modes
- **Smooth Transitions**: Elegant animations when switching between themes
- **Hydration-Safe**: No flash of incorrect theme on page load

### 📊 Dashboard Overview
- **Real-time Summary Cards**: Dynamic calculation of total balance, income, expenses, and net savings
- **Interactive Charts**: 
  - Line chart showing balance trends over time with hover interactions
  - Pie chart displaying spending distribution by category with custom colors
- **Financial Insights**: Smart analytics with highest spending category and savings rate
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 💳 Transaction Management
- **Comprehensive Table**: View all transactions with date, amount, category, type, and description
- **Advanced Filtering & Search**: 
  - Real-time search by description or category
  - Filter by category and transaction type
  - Sort by date or amount (ascending/descending)
  - Export to CSV functionality
- **CRUD Operations**: Add, edit, and delete transactions (admin role)
- **Form Validation**: Comprehensive validation for all transaction fields

### 🔐 Role-Based Access Control
- **Viewer Role**: Read-only access to view transactions and analytics
- **Admin Role**: Full access including transaction management capabilities
- **Dynamic UI**: Interface elements show/hide based on selected role
- **Persistent Role Selection**: Role preference saved across sessions

### 🎨 Modern UI/UX
- **Component Library**: Reusable components with consistent design system
- **Loading States**: Skeleton loaders and loading spinners for better UX
- **Empty States**: Helpful messages and actions when no data is available
- **Hover Effects**: Interactive feedback throughout the interface
- **Mobile-First**: Touch-optimized responsive design

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 16.2.2 with App Router and Turbopack
- **UI Library**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS 3.x with custom dark mode configuration
- **Charts**: Recharts for interactive data visualization
- **Icons**: Lucide React for consistent iconography

### State Management
- **Store**: Zustand with persistence middleware for data management
- **Theme Management**: Custom React hook with localStorage integration
- **Type Safety**: Comprehensive TypeScript definitions throughout

### Development Tools
- **Build Tool**: Next.js built-in bundler with Turbopack
- **Linting**: ESLint with Next.js configuration
- **Styling**: PostCSS with Tailwind CSS processing

## 📁 Project Architecture

```
finance-dashboard-ui/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with theme script
│   │   ├── page.tsx                # Main dashboard page
│   │   ├── globals.css             # Global styles and Tailwind imports
│   │   └── favicon.ico             # Application favicon
│   ├── components/
│   │   ├── charts/
│   │   │   ├── BalanceTrendChart.tsx    # Interactive line chart
│   │   │   └── CategoryPieChart.tsx     # Interactive pie chart
│   │   ├── Navbar.tsx              # Navigation with theme toggle & role switcher
│   │   ├── SummaryCard.tsx         # Reusable summary card with dark mode
│   │   ├── TransactionTable.tsx    # Full-featured transaction management
│   │   ├── InsightsSection.tsx     # Financial analytics dashboard
│   │   ├── ThemeScript.tsx         # Immediate theme application script
│   │   ├── ClientOnly.tsx          # Hydration-safe client wrapper
│   │   ├── LoadingSpinner.tsx      # Reusable loading component
│   │   └── EmptyState.tsx          # Empty state component
│   ├── hooks/
│   │   └── useTheme.ts             # Custom theme management hook
│   ├── store/
│   │   └── useFinanceStore.ts      # Zustand store with persistence
│   ├── data/
│   │   └── mockData.ts             # Sample transaction data
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   └── utils/
│       └── formatters.ts           # Utility functions for data formatting
├── public/                         # Static assets and SVG icons
├── tailwind.config.ts              # Tailwind with dark mode configuration
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18.0 or higher
- **Package Manager**: npm, yarn, or pnpm
- **Browser**: Modern browser with JavaScript enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akshaybellagi/Finance-Dashboard-UI.git
   cd Finance-Dashboard-UI
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Or build and export static files
npm run build
```

## 🌙 Theme System

### Dark Mode Implementation
The application features a comprehensive dark mode system:

#### Theme Toggle
- **Location**: Moon/Sun icon in the top navigation bar
- **Behavior**: Click to instantly switch between light and dark themes
- **Visual Feedback**: Icon changes and smooth color transitions

#### Theme Persistence
- **localStorage**: Theme preference saved automatically
- **System Detection**: Respects OS dark/light mode preference on first visit
- **Hydration Safe**: No flash of incorrect theme using server-side script

#### Component Support
All components include dark mode variants:
- **Navigation**: Dark background with light text
- **Cards**: Dark backgrounds with appropriate contrast
- **Tables**: Dark rows with hover effects
- **Charts**: Dark-themed color schemes
- **Forms**: Dark inputs and buttons
- **Modals**: Dark overlays and content areas

## 🎭 Role-Based Features

### Viewer Role (Default)
- ✅ **View Dashboard**: Access to all summary cards and charts
- ✅ **Browse Transactions**: Read-only access to transaction table
- ✅ **Use Filters**: Search and filter transactions
- ✅ **Export Data**: Download transaction data as CSV
- ❌ **Modify Data**: Cannot add, edit, or delete transactions

### Admin Role
- ✅ **All Viewer Permissions**: Complete read access
- ✅ **Add Transactions**: Create new transactions via modal form
- ✅ **Edit Transactions**: Modify existing transaction details
- ✅ **Delete Transactions**: Remove transactions with confirmation
- ✅ **Bulk Operations**: Manage multiple transactions

**Role Switching**: Use the user dropdown in the navigation bar to switch between roles and experience different permission levels.

## 💾 Data Management

### Persistence Strategy
- **Zustand Store**: Centralized state management with automatic persistence
- **localStorage**: All data saved locally in browser storage
- **Automatic Sync**: Changes immediately reflected across all components
- **Type Safety**: Full TypeScript support for all data operations

### Sample Data
The application comes pre-loaded with realistic sample data:
- **20+ Transactions**: Mix of income and expenses across various categories
- **Multiple Categories**: Salary, rent, groceries, entertainment, utilities, etc.
- **Date Range**: Transactions spanning several months for trend analysis
- **Realistic Amounts**: Varied transaction amounts for meaningful analytics

### Data Structure
```typescript
interface Transaction {
  id: number;
  date: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  description?: string;
}

interface User {
  role: 'viewer' | 'admin';
}
```

## 📱 Responsive Design

### Breakpoint Strategy
- **Mobile First**: Base styles optimized for mobile devices
- **Progressive Enhancement**: Additional features for larger screens
- **Flexible Grid**: CSS Grid and Flexbox for adaptive layouts

### Screen Sizes
#### Mobile (< 768px)
- Single-column layout for summary cards
- Stacked chart arrangement
- Collapsible transaction filters
- Touch-optimized buttons and interactions
- Horizontal scroll for wide tables

#### Tablet (768px - 1023px)
- 2-column summary card grid
- Side-by-side chart layout
- Condensed transaction table
- Optimized for touch and mouse input

#### Desktop (1024px+)
- 4-column summary card layout
- Full-width chart arrangements
- Complete transaction table with all columns
- Hover effects and detailed interactions

## 🎨 Design System

### Color Palette
#### Light Mode
- **Primary**: Blue (#3B82F6) for actions and highlights
- **Success**: Green (#10B981) for income and positive trends
- **Warning**: Orange (#F59E0B) for neutral states
- **Danger**: Red (#EF4444) for expenses and negative trends
- **Background**: Light gray (#F9FAFB) for page backgrounds
- **Surface**: White (#FFFFFF) for card backgrounds

#### Dark Mode
- **Primary**: Light blue (#60A5FA) for actions and highlights
- **Success**: Light green (#34D399) for income and positive trends
- **Warning**: Light orange (#FBBF24) for neutral states
- **Danger**: Light red (#F87171) for expenses and negative trends
- **Background**: Dark gray (#111827) for page backgrounds
- **Surface**: Dark gray (#1F2937) for card backgrounds

### Typography
- **Font Family**: Inter for optimal readability across all devices
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Scale**: Consistent sizing from 12px (xs) to 36px (3xl)
- **Line Height**: Optimized for readability and visual hierarchy

### Component Patterns
- **Cards**: Rounded corners (12px) with subtle shadows and borders
- **Buttons**: Consistent padding, hover states, and focus indicators
- **Forms**: Clean inputs with validation states and error messages
- **Tables**: Alternating row colors, hover effects, and proper spacing
- **Modals**: Backdrop blur with centered content and escape handling

## 🔮 Future Enhancements

### Planned Features
- **🔐 Authentication**: User accounts with secure login and registration
- **☁️ Cloud Sync**: Real-time data synchronization across devices
- **📊 Advanced Analytics**: Trend predictions, spending forecasts, and budget insights
- **💰 Budget Management**: Set spending limits and track budget performance
- **🔄 Recurring Transactions**: Automate regular income and expense entries
- **🌍 Multi-Currency**: Support for different currencies with real-time conversion
- **📱 PWA Support**: Progressive Web App with offline functionality
- **🔔 Notifications**: Smart alerts for budget limits and spending patterns

### Technical Improvements
- **🧪 Testing Suite**: Comprehensive unit, integration, and E2E tests
- **♿ Accessibility**: Enhanced WCAG compliance and screen reader support
- **⚡ Performance**: Virtual scrolling, code splitting, and optimization
- **🔍 Search**: Advanced search with filters and saved searches
- **📤 Data Import**: Upload transactions from bank statements and CSV files
- **🎯 Analytics**: Advanced reporting with custom date ranges and comparisons

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started
1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
4. **Make your changes** with proper commit messages
5. **Push to your branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request** with a clear description

### Development Guidelines
- **Code Style**: Follow the existing TypeScript and React patterns
- **Components**: Create reusable components with proper TypeScript types
- **Styling**: Use Tailwind CSS classes and maintain dark mode support
- **Testing**: Add tests for new features and bug fixes
- **Documentation**: Update README and add inline code comments

### Areas for Contribution
- 🐛 **Bug Fixes**: Report and fix issues
- ✨ **New Features**: Implement planned enhancements
- 🎨 **UI/UX**: Improve design and user experience
- 📚 **Documentation**: Enhance guides and examples
- 🧪 **Testing**: Add test coverage
- ♿ **Accessibility**: Improve accessibility features

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Recharts** for beautiful and responsive charts
- **Lucide** for the comprehensive icon library
- **Zustand** for simple and effective state management

## 📞 Support & Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/akshaybellagi/Finance-Dashboard-UI/issues)
- **Discussions**: [Join community discussions](https://github.com/akshaybellagi/Finance-Dashboard-UI/discussions)
- **Email**: For private inquiries and support

---

**🚀 Built with modern web technologies and best practices**

*Last updated: April 2026*