import { getMarkers } from "@services/getMarkers";
import { useEffect, useState } from "react";

export const useGetMarkers = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMarkers();
        setMarkers(data);
      } catch (error) {
        console.error("Error fetching markers:", error);
      }
    };

    fetchData();
  }, []); 

  return {
    markers,
  };
};
