import { insightUrl, token } from '../config';

export const getInsightAnalysis = async (startDate, endDate) => {
  const apiUrl = `${insightUrl}/${startDate}/${endDate}`;
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
