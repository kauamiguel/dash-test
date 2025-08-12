// services/api.js (ou o nome do seu arquivo)

import { insightAnalysisUrl, token } from '../config';

export const getDataAnalysis = async (startDate, endDate) => {
  // Constrói a URL completa para a requisição usando o endpoint específico
  const apiUrl = `${insightAnalysisUrl}/${startDate}/${endDate}`;

  // Use try/catch para um tratamento de erro mais robusto
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Se a resposta não for bem-sucedida, lança um erro
      const errorText = await response.text();
      throw new Error(`Erro na API: ${response.status} - ${errorText}`);
    }

    // Retorna os dados como JSON
    return await response.json();
  } catch (error) {
    console.error('Falha ao buscar dados de análise:', error);
    throw error; // Propaga o erro para o componente que chamou a função
  }
};
