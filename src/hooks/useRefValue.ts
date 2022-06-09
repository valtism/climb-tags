import { useEffect, useRef, useState } from "react";

// Provides a ref, as well as a state value of that ref's current element.
// Useful so that the value can re-render when the ref changes from null to
// the element and the ref can be passed safely as a non-null prop.
export function useRefValue<T>(): [React.RefObject<T>, T | null] {
  const ref = useRef<T>(null);
  const [refValue, setRefValue] = useState<T | null>(null);
  useEffect(() => {
    setRefValue(ref.current);
  }, []);
  return [ref, refValue];
}
