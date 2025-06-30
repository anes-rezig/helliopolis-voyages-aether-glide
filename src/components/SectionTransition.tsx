
import { useEffect, useRef, useState } from "react";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

const SectionTransition = ({ 
  children, 
  className = "", 
  direction = "up",
  delay = 0 
}: SectionTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (direction) {
      case "left":
        return "fade-in-left";
      case "right":
        return "fade-in-right";
      default:
        return "fade-in-up";
    }
  };

  return (
    <div
      ref={ref}
      className={`section-transition ${isVisible ? `visible ${getAnimationClass()}` : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTransition;
