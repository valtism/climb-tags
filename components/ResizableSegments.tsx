import { Children, ReactNode } from "react";
import { useDragX } from "../hooks/useDragX";

interface ResizableSegmentsProps {
  children?: ReactNode;
}
export default function ResizableSegments({
  children,
}: ResizableSegmentsProps) {
  const childrenCount = Children.count(children);
  return (
    <div className="relative flex flex-1 overflow-hidden">
      {Children.map(children, (child, i) =>
        i !== childrenCount - 1 ? (
          <Segment initialSize={335}>{child}</Segment>
        ) : (
          child
        )
      )}
    </div>
  );
}

interface SegmentProps {
  children?: ReactNode;
  initialSize?: number;
}
function Segment({ children, initialSize }: SegmentProps) {
  const [x, sizeRef, dragRef] = useDragX<HTMLDivElement, HTMLDivElement>(
    initialSize
  );
  return (
    <>
      <div ref={sizeRef} className="overflow-hidden" style={{ width: x }}>
        {children}
      </div>
      <div
        ref={dragRef}
        className="flex w-7 flex-shrink-0 cursor-ew-resize items-center px-2 text-gray-500 print:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          viewBox="0 0 192 512"
          fill="currentColor"
        >
          <path d="M64 448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V448zM192 448C192 465.7 177.7 480 160 480C142.3 480 128 465.7 128 448V64C128 46.33 142.3 32 160 32C177.7 32 192 46.33 192 64V448z" />
        </svg>
      </div>
    </>
  );
}
