import * as S from "./styles";
import { ProgressBarProps } from "./props";
import { useEffect, useState } from "react";
import useAnimation from "./animation";

export const ProgressBar = ({
  color = "red",
  colorContainer,
  duration = 5,
  isActive = false,
  className,
}: ProgressBarProps) => {
  const { progressRef } = useAnimation({ isActive, duration });

  return (
    <S.ProgressBarContainer className={className} $color={colorContainer}>
      <S.ProgressFill ref={progressRef} $color={color} />
    </S.ProgressBarContainer>
  );
};
