export function MovieCard({ title, year }: { title: string; year: number }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
      }}
    >
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
}
