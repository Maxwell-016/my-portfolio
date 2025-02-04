import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const useContent = () => {
  const [content, setContent] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reactPortfolio"));
        const contentData = {};
        querySnapshot.forEach((doc) => {
          contentData[doc.id] = doc.data();
        });
        setContent(contentData);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchContent();
  }, []);
  return {
    content,
    isLoading,
    error,
  };
};
export { useContent };
