import { url, token } from '../config';

export const getDataAnalysis = async (startDate, endDate) => {
  const apiUrl = `${url}/${startDate}/${endDate}`;
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
