// Importa a URL base da API e a chave, conforme definido nas variáveis de ambiente do Amplify
// Lembre-se que as variáveis do Vite são prefixadas com VITE_
export const baseUrl = import.meta.env.VITE_API_URL;
export const token = import.meta.env.VITE_API_KEY;

// URLs específicas para cada endpoint.
// Isso evita hard-coding e facilita a manutenção.
export const insightAnalysisUrl = `${baseUrl}/insights/data_analysis`;
export const insightUrl = `${baseUrl}/insights`;

// Outras variáveis de ambiente
export const enableAnalytics = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
export const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;
