import { useEffect, useState } from "react";
import { useRefValue } from "./useRefValue";

export function useDragX<T extends HTMLElement, U extends HTMLElement>() {
  const [dragging, setDragging] = useState(false);
  const [x, setX] = useState<number>();
  const [offset, setOffset] = useState(0);
  const [sizeRef, sizeEl] = useRefValue<T>();
  const [dragRef, dragEl] = useRefValue<U>();

  useEffect(() => {
    if (!sizeEl) return;
    const { width } = sizeEl.getBoundingClientRect();
    setX(width);
  }, [sizeEl]);

  useEffect(() => {
    if (!dragEl) return;
    dragEl.onmousedown = (e) => {
      setDragging(true);
      setOffset(e.clientX - (x || 0));
    };
  }, [dragEl, x]);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (dragging) {
        e.preventDefault();
        setX(Math.max(e.clientX - offset, 0));
      }
    }
    function handleMouseUp() {
      setDragging(false);
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  return [x, sizeRef, dragRef] as const;
}
