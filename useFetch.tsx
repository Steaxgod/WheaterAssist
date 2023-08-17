import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:3000/";

export const useFetch = (url) => {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(url);
        const response = await axios.get(`${url}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading };
};
