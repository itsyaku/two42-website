import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Two42 Christian Church"
        width={160}
        height={50}
        className="h-10 w-auto"
        priority
      />
    </Link>
  );
}
