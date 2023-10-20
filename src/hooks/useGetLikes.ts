/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { onValue, ref } from "firebase/database";

const useGetLikes = () => {
  const [likes, setLikes] = useState<any>(null);

  useEffect(() => {
    const query = ref(db, "likes");

    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        setLikes(data);
      }
    });
  }, []);

  return { likes };
};

export default useGetLikes;
