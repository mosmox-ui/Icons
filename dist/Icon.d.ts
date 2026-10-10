import { type IconName } from './icon-data.js';
import type { IconProps } from './types.js';
export type { IconProps } from './types.js';
export interface NamedIconProps extends IconProps {
    name: IconName | string;
}
export declare const Icon: import("react").ForwardRefExoticComponent<Omit<NamedIconProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
