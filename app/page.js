import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-green-200">
      <h2>Main Page</h2>
      <Link href="/props">Go to Props Page</Link>
    </main>
  );
}
