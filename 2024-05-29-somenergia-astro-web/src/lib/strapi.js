export default async function fetchApi({
    endpoint='',
    query='',
    wrappedByKey=undefined,
    wrappedByList=undefined
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