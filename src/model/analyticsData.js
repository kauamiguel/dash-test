export const analyticsDataTemplate = {
  analyticsOverview: {
    totalVisitors: 0,
    uniqueVisitors: 0,
    pageViews: 0,
    avgSessionDuration: 0,
    bounceRate: 0,
    conversionRate: 0,
    totalRevenue: 0,
    avgOrderValue: 0,
  },
  trafficSources: [
    {
      source: '',
      visitors: 0,
      percentage: 0,
      revenue: 0,
      cpl: 0,
      growth: 0,
    },
  ],
  conversionFunnelData: [
    {
      stage: '',
      count: 0,
      percentage: 0,
      conversion: 0,
    },
  ],
  timeAnalytics: [
    {
      hour: '',
      visitors: 0,
      conversions: 0,
      revenue: 0,
    },
  ],
  deviceAnalytics: [
    {
      device: '',
      visitors: 0,
      percentage: 0,
      revenue: 0,
      avgSession: 0,
    },
  ],
  geographicData: [
    {
      state: '',
      visitors: 0,
      percentage: 0,
      revenue: 0,
    },
  ],
  cohortAnalysis: [
    {
      month: '',
      newUsers: 0,
      retention30: 0,
      retention60: 0,
      retention90: 0,
    },
  ],
  contentAnalytics: [
    {
      page: '',
      views: 0,
      uniqueViews: 0,
      avgTime: 0,
      bounceRate: 0,
      conversions: 0,
      conversionRate: 0,
    },
  ],
  campaignAnalytics: [
    {
      id: 0,
      name: '',
      type: '',
      status: '',
      startDate: '',
      endDate: '',
      budget: 0,
      spent: 0,
      impressions: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      roi: 0,
      ctr: 0,
      cpc: 0,
      cpa: 0,
    },
  ],
  analyticsInsights: [
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
  competitorAnalysis: [
    {
      metric: '',
      yourValue: 0,
      marketAvg: 0,
      topCompetitor: 0,
      status: '',
    },
  ],
  realtimeData: {
    activeUsers: 0,
    currentSessions: 0,
    pageViewsLast30Min: 0,
    conversionsToday: 0,
    revenueToday: 0,
    topPages: [
      {
        page: '',
        activeUsers: 0,
      },
    ],
    topSources: [
      {
        source: '',
        activeUsers: 0,
      },
    ],
  },
};
