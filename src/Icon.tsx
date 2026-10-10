import { forwardRef, type Ref } from 'react';
import { iconData, type IconName } from './icon-data.js';
import type { IconProps } from './types.js';

export type { IconProps } from './types.js';

export interface NamedIconProps extends IconProps {
  name: IconName | string;
}

export const Icon = forwardRef(function Icon(
  {
    name,
    color = 'currentColor',
    size = '1em',
    weight = 'regular',
    mirrored = false,
    style,
    ...props
  }: NamedIconProps,
  ref: Ref<SVGSVGElement>,
) {
  const icon = iconData[name as IconName];
  const content = icon?.[weight] ?? icon?.regular ?? '';

  return (
    <svg
      ref={ref}
      aria-hidden={props['aria-label'] ? undefined : true}
      color={color}
      fill="currentColor"
      height={size}
      style={{ ...style, transform: mirrored ? 'scaleX(-1)' : style?.transform }}
      viewBox="0 0 256 256"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
});

Icon.displayName = 'Icon';
