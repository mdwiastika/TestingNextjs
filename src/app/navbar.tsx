"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar({ navLinks }: any) {
  const pathname = usePathname();
  return (
    <nav className="sticky flex justify-between backdrop-blur-sm bg-white/40 shadow-md text-black h-[80px] mx-auto rounded-3xl">
      <div className="items-center flex">
        <h2 className="items-center text-xl ml-10">
          <Link href="/">Logo</Link>
        </h2>
      </div>
      <ul className="flex items-center justify-start gap-10 mr-10 text-xl">
        {navLinks.map((link: { href: string; name: string }, index: number) => {
          const isActive = pathname.match(link.href);
          return (
            <li key={index} className={isActive ? "text-blue-500" : "text-black"}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
