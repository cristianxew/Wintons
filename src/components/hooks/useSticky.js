import { useEffect, useState, useRef, useCallback } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = useCallback(() => {
    if (element.current) {
      window.scrollY > 10 ? setSticky(true) : setSticky(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll]);

  return { isSticky, element };
}

export default useSticky;
