import { mapAnalysis } from '@/service/api/analysis/mapAnalysis';
import { useEffect, useState } from 'react';

export const useAnalysis = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mapAnalysis().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
