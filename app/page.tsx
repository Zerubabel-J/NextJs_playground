import Link from "next/link";
import ProductCard from "./users/components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>What a big move !</h1>
      <Link href="/users">Get Users</Link>
      <br />
      <ProductCard />
    </main>
  );
}
