import Image, { ImageProps } from "next/image";

export default function Avatar({ className, ...props }: ImageProps) {
  return (
    <Image
      width={48}
      height={48}
      className={`rounded-full ${className}`}
      alt="user avatar"
      {...props}
    ></Image>
  );
}
