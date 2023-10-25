import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-10">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/new">O que Ver Hoje?</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
