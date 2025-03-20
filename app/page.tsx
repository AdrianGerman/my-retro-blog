export default function Home() {
  const categories = ["Tech", "Art", "Finance"]
  return (
    <div>
      <h2 className="text-2xl font-pixel mb-6">Latest Pixelated Wisdom</h2>
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-pixel mb-4">{category}</h3>
        </div>
      ))}
    </div>
  )
}
