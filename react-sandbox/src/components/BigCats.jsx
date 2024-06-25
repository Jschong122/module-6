export function CatsList() {
  // collection of objects representing movies
  const cats = [
    { name: "Cheetah", latinName: "Acinonyx jubatus" },
    { name: "Cougar", latinName: "Puma concolor" },
    { name: "Jaguar", latinName: "Panthera onca" },
    { name: "Leopard", latinName: "Panthera pardus" },
    { name: "Lion", latinName: "Panthera leo" },
    { name: "Snow leopard", latinName: "Panthera uncia" },
    { name: "Tiger", latinName: "Panthera tigris" },
  ];

  return (
    <div className="catsList-componentBox">
      <ul>
        {" "}
        {/* iterate over each movie, print the title in a list */}
        {cats.map((cat) => (
          <div key={Math.random()}>
            <li>{cat.latinName}</li>
            <li>{cat.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
