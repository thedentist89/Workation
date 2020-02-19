import { useState, useEffect } from "react";

export const useShow = () => {
  const [isShown, setIsShown] = useState(true);

  function toggle() {
    setIsShown(!isShown);
  }

  return { isShown, toggle };
};

export const useCloseDropDown = (isOpen, toggle) => {
  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (!isOpen || e.keyCode !== 27) {
        return;
      }
      toggle();
    });

    return document.removeEventListener("keydown", e => {
      if (!isOpen || e.keyCode !== 27) {
        return;
      }
      toggle();
    });
  }, [isOpen, toggle]);
};
