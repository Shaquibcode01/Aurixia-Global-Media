import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Aurixia Global Media — home">
      <span className="logo-word">AURIXIA</span>
      <span className="logo-sub">GLOBAL MEDIA</span>
    </Link>
  );
}
