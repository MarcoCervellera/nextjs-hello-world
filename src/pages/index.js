import Link from "next/link";

export default function Home() {
  return (
    <div>
      Micia ti amo, comunque sto facendo un pochino di ricerca per capire cosa è successo nel mondo negli ultimi quattro anni come puoi vedere.
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
