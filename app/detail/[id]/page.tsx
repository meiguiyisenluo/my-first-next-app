// export const dynamicParams = false;

// export function generateStaticParams() {
//   const  slugs = ["1", "2", "3", "4", "5", "6"];
//   return slugs.map((slug) => ({ id: slug }));
// }

import BackBtn from "./_component/BackBtn";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const list = await fetch("http://localhost:3000/lol.json").then((_) =>
    _.json()
  );
  const targetItem = list.find(
    (_: { href: string; id: number }) => _.id === Number(id)
  );
  return (
    <div>
      <h2>
        <BackBtn />
        {" " + targetItem.desc}
      </h2>
      <video src={targetItem.href} controls></video>
    </div>
  );
}
