import { useState } from "react";

export const useShow = () => {
  const [isShown, setIsShown] = useState(false);

  function toggle() {
    setIsShown(!isShown);
  }

  return { isShown, toggle };
};
