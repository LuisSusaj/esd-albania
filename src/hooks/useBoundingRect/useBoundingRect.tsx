import { useState, useCallback, useLayoutEffect, Ref } from "react";

type DimensionObject = {
  width: number;
  height: number;
  top: number;
  left: number;
  x: number;
  y: number;
  right: number;
  bottom: number;
};

type BoundingRectHookReturnType = [
  Ref<HTMLElement | null>,
  DimensionObject,
  HTMLElement | null
];

const debounce = <T extends (...args: any[]) => void>(
  limit: number,
  callback: T
) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, limit, ...args);
  };
};

function getDimensionObject(node: HTMLElement): DimensionObject {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    x: rect.x,
    y: rect.y,
    right: rect.left + rect.width,
    bottom: rect.top + rect.height,
  };
}

export default function useBoundingRect(
  limit?: number
): BoundingRectHookReturnType {
  const [dimensions, setDimensions] = useState<DimensionObject>(() => ({} as DimensionObject));
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );

      measure();

      const listener = debounce(limit ? limit : 100, measure);

      window.addEventListener("resize", listener);
      listener();
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }
  }, [node, limit]);

  return [ref, dimensions, node];
}
