/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

const useShowSlider = (itemsLength: number) => {
  const windowWidth = useRef(window.innerWidth);
  const [showSlider, setShowSlider] = useState(false);
  const ITEM_WIDTH = 13;
  const REM_TO_PX = 16;
  const EXTRA_REM = 1;
  const itemsWidth = (itemsLength * ITEM_WIDTH + EXTRA_REM) * REM_TO_PX;

  useEffect(() => {
    if (itemsWidth >= windowWidth.current) {
      setShowSlider(true);
    }
  }, [itemsWidth, windowWidth]);

  return { showSlider };
};

export default useShowSlider;
