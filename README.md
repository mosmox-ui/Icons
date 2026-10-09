# @mosmox/icons

Customizable React SVG icons for Mosmox UI and other React applications.

The package provides **1,512 icons**, available as named React components or through the dynamic `Icon` component. Every icon supports six visual weights, custom size, color, horizontal mirroring, standard SVG attributes, and React event handlers.

## Installation

### Monorepo usage

The framework demo uses the local icons package from the [`mosmox-ui`](../performance-benchmarks/apps/mosmox-ui/) application:

```bash
cd performance-benchmarks/apps/mosmox-ui
npm install ../../../icons
```

### Published package

```bash
npm install @mosmox/icons
```

```bash
pnpm add @mosmox/icons
yarn add @mosmox/icons
```

The package requires React 18 or newer as a peer dependency.

## Quick start

Import any icon by its PascalCase component name:

```tsx
import { Airplane, Heart, MagnifyingGlass } from '@mosmox/icons';

export function Toolbar() {
  return (
    <div>
      <Airplane size={32} color="#d90b2c" weight="light" />
      <Heart size="1.25rem" weight="regular" />
      <MagnifyingGlass size={20} weight="bold" />
    </div>
  );
}
```

Icons are inline SVG elements and inherit the surrounding text color by default:

```tsx
<button type="button" aria-label="Open settings" style={{ color: '#172523' }}>
  <Gear size={20} />
</button>
```

## Dynamic icon names

Use `Icon` when the icon name comes from configuration, a data model, or another runtime source:

```tsx
import { Icon } from '@mosmox/icons';

export function StatusIcon({ name }: { name: string }) {
  return <Icon name={name} size={24} color="#d90b2c" weight="regular" />;
}
```

`name` should match one of the names in `iconNames`. An unknown name renders an empty SVG, so validate user-provided names when necessary.

You can also access the catalog and its type:

```tsx
import { Icon, iconNames, type IconName } from '@mosmox/icons';

const name: IconName = 'heart';
const availableNames = iconNames;

<Icon name={name} />
```

## Icon props

Every named icon and the generic `Icon` component accepts these icon-specific props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number \| string` | `1em` | SVG width and height. Numbers are interpreted as pixels; strings may use CSS units such as `rem`, `px`, or `em`. |
| `color` | `string` | `currentColor` | Color used by the SVG paths. Accepts CSS colors, variables, and `currentColor`. |
| `weight` | `thin \| light \| regular \| bold \| fill \| duotone` | `regular` | Selects the icon's visual SVG variant. |
| `mirrored` | `boolean` | `false` | Mirrors the icon horizontally with `scaleX(-1)`. |
| `name` | `IconName \| string` | — | Required only by the generic `Icon` component. |

All other standard `SVGProps<SVGSVGElement>` properties are supported, including `className`, `style`, `id`, `role`, `aria-label`, `aria-hidden`, `title`, `onClick`, and other React event handlers.

### Size

```tsx
<Bell size={24} />
<Bell size="1.5rem" />
<Bell size="1em" />
```

Use a number for a pixel size, a CSS length for a fixed size, or `1em` to follow the current font size.

### Color

```tsx
<Heart color="#d90b2c" />
<Check color="var(--color-success)" />
<Info color="currentColor" />
```

### Visual weights

Each icon includes these six variants:

```tsx
<Star weight="thin" />
<Star weight="light" />
<Star weight="regular" />
<Star weight="bold" />
<Star weight="fill" />
<Star weight="duotone" />
```

- `thin` — very light stroke
- `light` — light stroke
- `regular` — default weight
- `bold` — heavier stroke
- `fill` — solid filled form
- `duotone` — two-tone form with a translucent secondary layer where supported

### Mirroring

```tsx
<ArrowLeft mirrored />
```

`mirrored` applies a horizontal transformation to the SVG while preserving its layout dimensions.

## Accessibility

Icons are decorative by default. When no `aria-label` is supplied, the rendered SVG receives `aria-hidden="true"` so it does not create noise for assistive technology.

For an icon-only control, provide an accessible name on the button:

```tsx
<button type="button" aria-label="Close dialog">
  <X size={20} />
</button>
```

For an icon that communicates information without surrounding text, provide a label directly:

```tsx
<Warning aria-label="Warning" role="img" />
```

Do not use color as the only way to communicate status or meaning. Pair icons with visible text or an appropriate accessible label.

## Named component exports

Named exports use PascalCase names derived from the icon name. For example:

| Icon name | React component |
| --- | --- |
| `airplane` | `Airplane` |
| `arrow-left` | `ArrowLeft` |
| `magnifying-glass` | `MagnifyingGlass` |
| `user-circle` | `UserCircle` |
| `x-circle` | `XCircle` |

The complete catalog is available through `iconNames` and in the Mosmox interactive icon browser. The browser lets you search the catalog, preview weights, and copy usage examples.

## Direct SVG assets

The original SVG files are included in the package under `assets/`, grouped by weight:

```text
assets/
├── bold/
├── duotone/
├── fill/
├── light/
├── regular/
└── thin/
```

For example:

```text
@mosmox/icons/assets/regular/airplane.svg
```

Use the React components for application UI. Use the SVG assets when a non-React tool, static HTML page, design tool, or build pipeline needs the source artwork.

## TypeScript

The package exports the main types used by the API:

```tsx
import type { IconName, IconProps, IconWeight, NamedIconProps } from '@mosmox/icons';
```

`IconName` is the union of all catalog names. `IconWeight` is the union of the six supported weights. `IconProps` extends the standard React SVG props with `color`, `size`, `weight`, and `mirrored`. `NamedIconProps` extends `IconProps` with the dynamic `name` property.

## Build from source

These commands are useful when working from a checkout of the package:

```bash
cd icons
npm install
npm run typecheck
npm run build
```

`npm run typecheck` validates the TypeScript source without emitting files. `npm run build` emits JavaScript and declaration files to `dist/`.

## Package contents

The published package includes:

- `dist/` — compiled JavaScript and declarations;
- `src/` — TypeScript source and public type definitions;
- `assets/` — source SVG files grouped by weight;
- `README.md` — this usage and API guide;
- `LICENSE` — the MIT license.

The package is tree-shakeable: `sideEffects` is set to `false`, and named imports allow bundlers to remove unused icon components.

## License and attribution

The Mosmox React wrapper and package structure are distributed under the MIT License. The source SVG artwork is based on the [Phosphor Icons v2.1.0 asset release](https://github.com/phosphor-icons/homepage/releases/tag/v2.1.0) and retains the original MIT licensing terms. The full license text is included in [`LICENSE`](./LICENSE).

This package contains a separate Mosmox React wrapper; it does not depend on or reuse Phosphor's React components.

## Links

- [Mosmox documentation](https://mosmox-ui.github.io/)
- [npm package](https://www.npmjs.com/package/@mosmox/icons)
- [Phosphor Icons v2.1.0](https://github.com/phosphor-icons/homepage/releases/tag/v2.1.0)
