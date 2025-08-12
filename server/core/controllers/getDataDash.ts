import axios from 'axios';

export async function getDataDash(url: string, params: any) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
