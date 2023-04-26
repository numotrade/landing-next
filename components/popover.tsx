import { Popover as HeadlessPopover } from "@headlessui/react";
import { useState } from "react";
import { usePopper } from "react-popper";

export default function Popover({
  button,
  contents,
}: {
  button: React.ReactNode;
  contents: React.ReactNode;
}) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "auto-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
  return (
    <HeadlessPopover className="relative">
      <HeadlessPopover.Button
        ref={setReferenceElement}
        className="flex items-center gap-2 rounded-xl px-4 py-2"
      >
        {button}
      </HeadlessPopover.Button>

      <HeadlessPopover.Panel
        className="absolute z-10"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {contents}
      </HeadlessPopover.Panel>
    </HeadlessPopover>
  );
}
