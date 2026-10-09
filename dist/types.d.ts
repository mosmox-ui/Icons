import type { SVGProps } from 'react';
export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
    color?: string;
    size?: number | string;
    weight?: IconWeight;
    mirrored?: boolean;
}
