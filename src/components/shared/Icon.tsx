import { SVGProps } from 'react';
import * as icon from '@icon';
import { DEFAULT_SIZE } from '@constants';

type IconNameType = keyof typeof icon;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconNameType;
  size?: number;
}

export default function Icon({
  name,
  size = DEFAULT_SIZE,
  ...rest
}: IconProps) {
  const SVGIcon = icon[name];

  return (
    <SVGIcon
      {...rest}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
