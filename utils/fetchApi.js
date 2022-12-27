import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'X-RapidAPI-Key': '438cc17e36msh78447bf90d85a2ap14a1a1jsnab9c4e0738b5',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  },
  });
    
  return data;
}