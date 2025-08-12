import { mapInsights } from '../service/api/Insight/mapInsightAnalysis';
import { useEffect, useState } from 'react';

export const useInsightAnalysis = () => {
  const [insightData, setInsightData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await mapInsights();
        setInsightData(res);
      } catch (err) {
        console.error('Erro ao buscar insights:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { insightData, loading, error };
};
