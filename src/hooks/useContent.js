import {useQuery} from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"

const fetchContent = async () => {
  const querySnapshot = await getDocs(collection(db, "reactPortfolio"));
  const contentData = {};
  querySnapshot.forEach((doc) => {
    contentData[doc.id] = doc.data();
  });
  return contentData;
};

//Caching using useQuery
const useContent = () => {
  const {
    data: content,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reactPortfolio"],
    queryFn: fetchContent,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 30,
  });
  return {content, isLoading, error};
};
export { useContent };
