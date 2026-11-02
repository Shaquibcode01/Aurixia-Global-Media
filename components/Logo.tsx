import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Aurixia Global Media — home">
      <Image src="/logo-crop.jpg" alt="Aurixia Global Media" width={900} height={640} priority className="logo-img" />
    </Link>
  );
}
