import Image from "next/image";

export default function TokenIcon({
  src,
  size,
}: {
  src: string;
  size: number;
}) {
  return (
    <Image
      className="flex overflow-hidden rounded-[50%]"
      height={size}
      width={size}
      src={src}
      alt="token icon"
    />
  );
}
