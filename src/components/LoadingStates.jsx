import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Skeleton para KPI Cards
export const KPICardSkeleton = () => (
  <Card className="kpi-card bg-card border-border">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-secondary rounded-lg skeleton" />
          <div className="w-24 h-4 bg-secondary rounded skeleton" />
        </div>
        <div className="w-16 h-5 bg-secondary rounded skeleton" />
      </div>
      <div className="space-y-2">
        <div className="w-32 h-8 bg-secondary rounded skeleton" />
        <div className="w-full h-10 bg-secondary rounded skeleton" />
      </div>
    </CardContent>
  </Card>
);

// Skeleton para Charts
export const ChartSkeleton = ({ height = 300 }) => (
  <Card>
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-secondary rounded skeleton" />
          <div className="w-32 h-5 bg-secondary rounded skeleton" />
        </div>
        <div className="w-20 h-5 bg-secondary rounded skeleton" />
      </div>
    </CardHeader>
    <CardContent>
      <div className={`w-full bg-secondary rounded skeleton`} style={{ height: `${height}px` }} />
    </CardContent>
  </Card>
);

// Skeleton para Lista de Produtos
export const ProductListSkeleton = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 bg-secondary rounded skeleton" />
        <div className="w-24 h-5 bg-secondary rounded skeleton" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <div className="flex-1">
              <div className="w-48 h-4 bg-secondary rounded skeleton mb-2" />
              <div className="w-32 h-3 bg-secondary rounded skeleton" />
            </div>
            <div className="text-right">
              <div className="w-20 h-4 bg-secondary rounded skeleton mb-1" />
              <div className="w-16 h-3 bg-secondary rounded skeleton" />
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

// Loading Spinner
export const LoadingSpinner = ({ size = 'md', color = 'primary' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    white: 'border-white'
  };

  return (
    <div className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`} />
  );
};

// Loading Overlay
export const LoadingOverlay = ({ message = 'Carregando...' }) => (
  <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center space-y-4">
      <LoadingSpinner size="lg" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  </div>
);

// Estado de Erro
export const ErrorState = ({ title = 'Algo deu errado', message, onRetry }) => (
  <div className="flex flex-col items-center justify-center p-8 text-center">
    <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
      <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    {message && <p className="text-sm text-muted-foreground mb-4">{message}</p>}
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Tentar Novamente
      </button>
    )}
  </div>
);

// Estado Vazio
export const EmptyState = ({ title = 'Nenhum dado encontrado', message, action }) => (
  <div className="flex flex-col items-center justify-center p-8 text-center">
    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
      <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    {message && <p className="text-sm text-muted-foreground mb-4">{message}</p>}
    {action}
  </div>
);

// Pulse Animation para elementos em tempo real
export const PulseIndicator = ({ color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-primary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  };

  return (
    <div className="relative">
      <div className={`w-2 h-2 ${colorClasses[color]} rounded-full`} />
      <div className={`absolute inset-0 w-2 h-2 ${colorClasses[color]} rounded-full animate-ping opacity-75`} />
    </div>
  );
};

// Toast Notification
export const Toast = ({ type = 'info', title, message, onClose }) => {
  const typeStyles = {
    success: 'border-green-500 bg-green-500/10 text-green-400',
    error: 'border-red-500 bg-red-500/10 text-red-400',
    warning: 'border-yellow-500 bg-yellow-500/10 text-yellow-400',
    info: 'border-blue-500 bg-blue-500/10 text-blue-400'
  };

  const icons = {
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div className={`fixed top-4 right-4 max-w-sm p-4 border rounded-lg shadow-lg backdrop-blur-sm z-50 ${typeStyles[type]} animate-in slide-in`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold">{title}</h4>
          {message && <p className="text-xs mt-1 opacity-90">{message}</p>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

