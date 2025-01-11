import axios from 'axios';

const API_URL = 'http://localhost:5001/api/payments';

export const processPayment = async (paymentData) => {
  const response = await axios.post(`${API_URL}/process`, paymentData);
  return response.data;
};
