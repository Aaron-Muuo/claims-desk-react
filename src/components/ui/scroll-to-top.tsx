import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      size="icon"
      className="fixed bottom-8 right-8 z-50 size-12 rounded-full shadow-lg transition-transform hover:scale-110 bg-amber-500 hover:bg-amber-600 text-white border-none"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="size-5" />
    </Button>
  );
}
