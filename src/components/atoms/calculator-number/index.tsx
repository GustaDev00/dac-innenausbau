import { useState, useEffect } from "react";
import { CalculatorNumberProps } from "./props";

export const CalculatorNumber: React.FC<CalculatorNumberProps> = ({ targetNumber, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let currentCount = 0;
    const duration = 1800;
    const increment = targetNumber / (duration / 100);

    const counter = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetNumber) {
        clearInterval(counter);
        setCount(targetNumber);
      } else {
        setCount(Math.ceil(currentCount));
      }
    }, 100);

    return () => clearInterval(counter);
  }, [targetNumber, start]);

  return <b>{count}</b>;
};
