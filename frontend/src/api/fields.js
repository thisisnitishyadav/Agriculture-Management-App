import axios from 'axios';

const API_URL = 'http://localhost:5001/api/fields';

export const getFields = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createField = async (fieldData) => {
  const response = await axios.post(API_URL, fieldData);
  return response.data;
};

export const deleteField = async (fieldId) => {
  const response = await axios.delete(`${API_URL}/${fieldId}`);
  return response.data;
};