import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("Visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current); // ✅ Fixed typo here: observer.observe (not observer.observer)

    return () => observer.disconnect(); // ✅ Fixed incorrect variable name: observe -> observer
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
