import type { PropsWithChildren, ReactElement } from "react";

/**
 * React Component type - a function that returns a ReactElement or null
 * @template P - Props type (defaults to empty object)
 */
export type RC<P = {}> = (props: P) => ReactElement | null;

/**
 * React Component with Children type - a function that accepts children and returns a ReactElement or null
 * @template P - Props type (defaults to empty object)
 */
export type RCC<P = {}> = RC<PropsWithChildren<P>>;

declare global {
  // Provide global aliases so consumers can reference RC/RCC without manual imports.
  type RC<P = {}> = import("@eluelu/types/react").RC<P>;
  type RCC<P = {}> = import("@eluelu/types/react").RCC<P>;
}
