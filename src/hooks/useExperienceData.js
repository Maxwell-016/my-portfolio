import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const useExperienceData = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedData = sessionStorage.getItem("experienceData");

    if (cachedData) {
      setPlaces(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    const fetchPlaces = async () => {
      try {
        const placesRef = collection(db, "reactPortfolio", "experience", "places");
        const snapshot = await getDocs(placesRef);
        const placesData = [];

        for (const placeDoc of snapshot.docs) {
          const placeData = placeDoc.data();

          const rolesRef = doc(db, "reactPortfolio", "experience", "places", placeDoc.id, "Roles", "roles");
          const rolesSnap = await getDoc(rolesRef);
          const rolesData = rolesSnap.exists() ? rolesSnap.data() : {};

          placesData.push({
            id: placeDoc.id,
            ...placeData,
            roles: rolesData,
          });
        }

        // Store in cache
        sessionStorage.setItem("experienceData", JSON.stringify(placesData));
        setPlaces(placesData);
      } catch (err) {
        console.error("Error fetching experience data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return { places, loading, error };
};

export default useExperienceData;
