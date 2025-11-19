// export const dynamicParams = false;

// export function generateStaticParams() {
//   const  slugs = ["1", "2", "3", "4", "5", "6"];
//   return slugs.map((slug) => ({ id: slug }));
// }

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>detail {id}</div>;
}
