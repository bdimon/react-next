import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-green-200">
      <div><h1>Main Page</h1></div>
      <br />
      <Link className="bg-blue-400" href="/props">Go to Props Page</Link>
      <br />
      <br />
      <Link href="/props/1">Go to Dynamic Page</Link>
    </main>
  );
}
