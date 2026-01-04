import "./Grid.css";

export default function Grid() {
  const items = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="grid">
      {items.map((item) => (
        <div key={item} className="grid-item">
          {item}
        </div>
      ))}
    </div>
  );
}
