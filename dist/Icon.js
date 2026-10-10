import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { iconData } from './icon-data.js';
export const Icon = forwardRef(function Icon({ name, color = 'currentColor', size = '1em', weight = 'regular', mirrored = false, style, ...props }, ref) {
    const icon = iconData[name];
    const content = icon?.[weight] ?? icon?.regular ?? '';
    return (_jsx("svg", { ref: ref, "aria-hidden": props['aria-label'] ? undefined : true, color: color, fill: "currentColor", height: size, style: { ...style, transform: mirrored ? 'scaleX(-1)' : style?.transform }, viewBox: "0 0 256 256", width: size, xmlns: "http://www.w3.org/2000/svg", ...props, dangerouslySetInnerHTML: { __html: content } }));
});
Icon.displayName = 'Icon';
