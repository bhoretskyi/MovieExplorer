import { useEffect, useState } from "react";
import axios from "axios";
const cache = new Map();

export const useCachedFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      if (cache.has(url)) {
        setData(cache.get(url));
        return;
      }
      try {
        const resp = await axios.get(url);
        cache.set(url, resp.data);
        setData(resp.data);
      } catch (err) {
        console.log(err);
      } 
    };
    fetchData();
  }, [url]);
  return { data };
};
