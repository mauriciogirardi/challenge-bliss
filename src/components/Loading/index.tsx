import { Cube } from "@phosphor-icons/react";
import { ColorTypes } from "../../@types/ColorTypes";
import { colors } from "../../styles/tokens";

interface LoadingProps {
  size?: number;
  durRotate?: string;
  durAnimation?: string;
  color?: ColorTypes;
}

export function Loading({
  size = 30,
  durRotate = "2s",
  durAnimation = "3s",
  color = "green300",
}: LoadingProps) {
  return (
    <Cube weight="duotone" size={size} color={colors[color]}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur={durAnimation}
        repeatCount="indefinite"
      ></animate>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur={durRotate}
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </Cube>
  );
}
