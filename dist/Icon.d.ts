import { type IconName } from './icon-data';
import type { IconProps } from './types';
export type { IconProps } from './types';
export interface NamedIconProps extends IconProps {
    name: IconName | string;
}
export declare const Icon: import("react").ForwardRefExoticComponent<Omit<NamedIconProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
