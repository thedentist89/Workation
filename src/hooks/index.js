import { useState } from "react";

export const useShow = () => {
  const [isShown, setIsShown] = useState(true);

  function toggle() {
    setIsShown(!isShown);
  }

  return { isShown, toggle };
};
