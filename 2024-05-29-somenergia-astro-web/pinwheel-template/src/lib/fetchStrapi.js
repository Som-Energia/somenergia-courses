export default async function fetchApi({
    endpoint='',
    query={},
    wrappedByKey='',
    wrappedByList=''
  }){
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1);
    }

    const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
  
    const res = await fetch(url.toString(),{
        headers: {
            'Authorization': 'Bearer ' + import.meta.env.STRAPI_API_KEY
        }
    });

    
    let data = await res.json();
  
    if (wrappedByKey) {
      data = data[wrappedByKey];
    }
  
    if (wrappedByList) {
      data = data[0];
    }

    return data;
}

// src/services/strapi.js
/* 
import axios from 'axios';

// Create an Axios instance with the base URL of your Strapi API
const strapiClient = axios.create({
  baseURL: `${import.meta.env.STRAPI_URL}/api`, // Replace with your Strapi API URL
});

// Fetch articles by language
export const getTestimonials = async (locale = 'en', endpoint='') => {
  try {
    const response = await strapiClient.get(`/${endpoint}`, {
      params: {
        locale,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};
 */