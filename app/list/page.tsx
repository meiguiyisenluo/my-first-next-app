import ListLink from "./_component/ListLink";
export default async function List() {
  const list = await fetch("http://localhost:3000/lol.json").then((_) =>
    _.json()
  );
  return (
    <div>
      {list.map((item: { id: number; desc: string; href: string }) => (
        <div key={item.id}>
          <ListLink href={`/detail/${item.id}`}>{item.desc}</ListLink>
        </div>
      ))}
    </div>
  );
}
