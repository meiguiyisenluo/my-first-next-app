import DetailPage from "@/app/detail/[id]/page";
export default async function InterceptDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "20%",
        width: "60%",
        border: "1px solid #ccc",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <DetailPage params={params}></DetailPage>
    </div>
  );
}
