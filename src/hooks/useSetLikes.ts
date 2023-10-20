import { useLikesStore } from "@store/useLikesStore";
import { db } from "../../firebase";
import { onValue, ref, set } from "firebase/database";

const useSetLikes = () => {
  const { hasAlreadyLiked, setHasAlreadyLiked } = useLikesStore();

  const addLike = () => {
    if (hasAlreadyLiked) {
      return;
    }

    const query = ref(db, "likes");

    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        set(query, data + 1);
        setHasAlreadyLiked(true);
      }
    });
  };

  return { addLike };
};

export default useSetLikes;
