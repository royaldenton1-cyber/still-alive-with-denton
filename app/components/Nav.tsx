import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/poetry", label: "Poetry" },
  { href: "/quiet-corner", label: "Quiet Corner" },
  { href: "/community", label: "Community" },
  { href: "/journal", label: "Journal" },
  { href: "/ai-still", label: "Still" },
];

export default function Nav() {
  return (
    <nav className="flex flex-col justify-between border-b border-slate/30 bg-nightlight px-6 py-6 md:h-screen md:w-56 md:border-b-0 md:border-r md:px-5 md:py-8">
      <div>
        <Link href="/" className="block font-display text-lg italic text-parchment">
          still, alive
        </Link>
        <ul className="mt-8 flex flex-row flex-wrap gap-x-5 gap-y-3 md:flex-col md:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-parchment/70 transition hover:text-ember"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/get-support"
        className="mt-8 block rounded-lg border border-ember/40 bg-ember/10 px-4 py-3 text-center text-sm font-medium text-ember transition hover:bg-ember/20 md:mt-0"
      >
        Get support
      </Link>
    </nav>
  );
}
