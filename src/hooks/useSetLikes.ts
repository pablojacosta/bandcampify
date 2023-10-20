/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLikesStore } from "@store/useLikesStore";
import { db } from "../../firebase";
import { ref, update, increment } from "firebase/database";

const useSetLikes = () => {
  const { hasAlreadyLiked, setHasAlreadyLiked } = useLikesStore();

  const addLike = () => {
    if (hasAlreadyLiked) {
      return;
    }

    const dbRef = ref(db);
    const updates = { likes: increment(1) };
    update(dbRef, updates);
    setHasAlreadyLiked(true);
  };

  return { addLike };
};

export default useSetLikes;
