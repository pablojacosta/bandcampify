/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "../../firebase";
import { onValue, ref, set } from "firebase/database";

const useSetLikes = () => {
  const addLike = () => {
    const query = ref(db, "likes");

    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        set(query, data + 1);
      }
    });
  };

  return { addLike };
};

export default useSetLikes;
