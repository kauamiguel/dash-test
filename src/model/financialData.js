export const financialDataTemplate = {
  financialOverview: {
    totalRevenue: 0,
    netRevenue: 0,
    totalExpenses: 0,
    netProfit: 0,
    profitMargin: 0,
    grossMargin: 0,
    cashOnHand: 0,
    accountsReceivable: 0,
    accountsPayable: 0,
    monthlyRecurringRevenue: 0,
    customerLifetimeValue: 0,
    customerAcquisitionCost: 0,
  },
  revenueByProduct: [
    {
      product: '',
      revenue: 0,
      percentage: 0,
      growth: 0,
      margin: 0,
    },
  ],
  expensesByCategory: [
    {
      category: '',
      amount: 0,
      percentage: 0,
      growth: 0,
    },
  ],
  monthlyFinancials: [
    {
      month: '',
      revenue: 0,
      expenses: 0,
      profit: 0,
      margin: 0,
    },
  ],
  cashFlow: [
    {
      month: '',
      inflow: 0,
      outflow: 0,
      netFlow: 0,
      balance: 0,
    },
  ],
  revenueByChannel: [
    {
      channel: '',
      revenue: 0,
      percentage: 0,
      growth: 0,
    },
  ],
  financialProjections: [
    {
      month: '',
      revenue: 0,
      expenses: 0,
      profit: 0,
      margin: 0,
    },
  ],
  financialInsights: [
    {
      id: 0,
      type: '',
      title: '',
      description: '',
      confidence: 0,
      impact: '',
      potentialRevenue: 0,
      action: '',
      priority: '',
      category: '',
    },
  ],
  taxSummary: {
    totalTaxesPaid: 0,
    taxRate: 0,
    taxByCategory: [
      {
        category: '',
        amount: 0,
        percentage: 0,
      },
    ],
    taxSavings: 0,
    potentialSavings: 0,
  },
  invoices: [
    {
      id: 0,
      customer: '',
      email: '',
      amount: 0,
      status: '',
      date: '',
      dueDate: '',
      product: '',
      paymentMethod: '',
    },
  ],
  subscriptions: [
    {
      id: 0,
      plan: '',
      activeSubscribers: 0,
      monthlyRevenue: 0,
      churnRate: 0,
      avgLifetime: 0,
      growth: 0,
    },
  ],
  financialGoals: [
    {
      id: 0,
      title: '',
      current: 0,
      target: 0,
      progress: 0,
      deadline: '',
      status: '',
      description: '',
    },
  ],
};
