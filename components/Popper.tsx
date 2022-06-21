import { ReactNode, useState } from "react";
import {
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react-dom-interactions";

interface GradePickerProps {
  RefNode: ReactNode;
  children: ReactNode;
}

export default function Popper({ RefNode, children }: GradePickerProps) {
  const [open, setOpen] = useState(false);
  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "right",
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useDismiss(context, { outsidePointerDown: true }),
  ]);
  return (
    <>
      <button
        {...getReferenceProps({
          ref: reference,
          onClick: () => setOpen(true),
        })}
      >
        {RefNode}
      </button>
      {open && (
        <div
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? "",
            },
            className: "z-10",
          })}
        >
          {children}
        </div>
      )}
    </>
  );
}
