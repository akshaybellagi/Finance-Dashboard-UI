# Finance Dashboard UI

A modern, responsive personal finance tracking dashboard built with Next.js, React, Tailwind CSS, and Recharts. This frontend-only application simulates a comprehensive finance management interface with role-based access control and dynamic data visualization.

## 🚀 Features

### Dashboard Overview
- **Summary Cards**: Real-time calculation of total balance, income, and expenses from transaction data
- **Interactive Charts**: 
  - Line chart showing balance trends over time
  - Pie chart displaying spending distribution by category
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Transaction Management
- **Comprehensive Table**: View all transactions with date, amount, category, and type
- **Advanced Filtering**: 
  - Search by description or category
  - Filter by category and transaction type
  - Sort by date or amount (ascending/descending)
- **Real-time Updates**: Filters and sorting update dynamically

### Role-Based Access Control
- **Viewer Role**: Read-only access to view transactions and analytics
- **Admin Role**: Full access including add, edit, and delete transactions
- **Dynamic UI**: Interface adapts based on selected role

### Financial Insights
- **Smart Analytics**:
  - Highest spending category identification
  - Monthly spending comparison with percentage changes
  - Current month savings calculation and savings rate
  - Average transaction amount and total transaction count
- **Dynamic Updates**: All insights recalculate automatically when data changes

### User Experience
- **LocalStorage Persistence**: Transactions and preferences saved locally
- **Empty States**: Helpful messages when no data is available
- **Smooth Transitions**: Animated interactions throughout the interface
- **Mobile-First**: Responsive design that works on all screen sizes

## 🛠 Tech Stack

- **Frontend Framework**: Next.js 15 with App Router
- **UI Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS with dark mode support
- **Charts**: Recharts for data visualization
- **State Management**: Zustand with persistence middleware
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in bundler

## 📁 Project Structure

```
finance-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main dashboard page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── charts/
│   │   │   ├── BalanceTrendChart.tsx    # Line chart component
│   │   │   └── CategoryPieChart.tsx     # Pie chart component
│   │   ├── Navbar.tsx          # Navigation with role switcher
│   │   ├── SummaryCard.tsx     # Reusable summary card
│   │   ├── TransactionTable.tsx # Transaction management
│   │   └── InsightsSection.tsx # Financial analytics
│   ├── store/
│   │   └── useFinanceStore.ts  # Zustand store with persistence
│   ├── data/
│   │   └── mockData.ts         # Sample transaction data
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finance-dashboard
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
npm run build
npm start
```

## � Role Simulation

The application includes a role-based access control system:

### Viewer Role (Default)
- **Read-only access** to all dashboard features
- Can view transactions, charts, and insights
- Cannot add, edit, or delete transactions
- Perfect for stakeholders who need visibility without modification rights

### Admin Role
- **Full access** to all features
- Can add new transactions through the modal form
- Can edit existing transactions inline
- Can delete transactions with confirmation
- Ideal for account owners and financial managers

**Role Switching**: Use the dropdown in the navigation bar to switch between roles and see how the interface adapts.

## 💾 Data Persistence

- **LocalStorage Integration**: All transactions and user preferences are automatically saved to browser storage
- **Automatic Loading**: Data persists across browser sessions and page refreshes
- **Mock Data**: Comes pre-loaded with sample transactions for immediate testing
- **Export Ready**: Structure designed for easy CSV export implementation

## 📱 Responsive Design

### Desktop (1024px+)
- 4-column summary card layout
- Side-by-side chart arrangement
- Full-width transaction table with all columns visible

### Tablet (768px - 1023px)
- 2-column summary card layout
- Stacked chart arrangement
- Condensed transaction table

### Mobile (< 768px)
- Single-column layout throughout
- Collapsible filters and search
- Touch-optimized interactions
- Horizontal scroll for transaction table

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for actions and highlights
- **Success**: Green for income and positive trends
- **Warning**: Orange for neutral states
- **Danger**: Red for expenses and negative trends
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter for clean, modern readability
- **Hierarchy**: Consistent sizing from headings to body text
- **Weight**: Strategic use of font weights for emphasis

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Consistent padding and hover states
- **Forms**: Clean inputs with proper validation states
- **Tables**: Zebra striping and hover effects

## 🔮 Future Enhancements

### Planned Features
- **CSV Export**: Download transaction data as spreadsheet
- **Budget Tracking**: Set and monitor spending limits by category
- **Recurring Transactions**: Automate regular income and expenses
- **Multi-Currency**: Support for different currencies with conversion
- **Advanced Analytics**: Trend predictions and spending forecasts
- **Data Import**: Upload transactions from bank statements
- **Notifications**: Alerts for budget limits and unusual spending

### Technical Improvements
- **Backend Integration**: Connect to real financial APIs
- **Authentication**: User accounts with secure login
- **Real-time Sync**: Multi-device synchronization
- **Performance**: Virtual scrolling for large datasets
- **Testing**: Comprehensive unit and integration tests
- **Accessibility**: Enhanced screen reader support and keyboard navigation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📞 Support

If you have any questions or run into issues, please open an issue on the GitHub repository.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**