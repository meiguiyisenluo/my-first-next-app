import Link from "next/link";

export default function List() {
  const list = Array.from({ length: 10 }, (v, k) => k + 1);
  return (
    <div>
      {list.map((id) => (
        <div key={id}>
          <Link href={`/detail/${id}`} passHref>
            {id}
          </Link>
        </div>
      ))}
    </div>
  );
}
