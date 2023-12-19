import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js App!</h1>
      <p>Click below to see all users:</p>
      <Link href="/users">
        <button>Show Users</button>
      </Link>
    </div>
  );
}
