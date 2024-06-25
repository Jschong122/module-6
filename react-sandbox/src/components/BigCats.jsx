export function BigCats() {
  const cats = [
    { name: "Cheetah", latinName: "Acinonyx jubatus" },
    { name: "Cougar", latinName: "Puma concolor" },
    { name: "Jaguar", latinName: "Panthera onca" },
    { name: "Leopard", latinName: "Panthera pardus" },
    { name: "Lion", latinName: "Panthera leo" },
    { name: "Snow leopard", latinName: "Panthera uncia" },
    { name: "Tiger", latinName: "Panthera tigris" },
  ];

  const cardStyle = {
    background: "white",
    color: "black",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div className="catsList-componentBox">
      <ul style={{ listStyleType: "none" }}>
        {" "}
        {cats.map((cat) => (
          <div style={cardStyle} key={Math.random()}>
            <p style={{ textDecoration: "underline" }}> Latin Name</p>
            <li>{cat.latinName}</li>
            <p style={{ textDecoration: "underline" }}> Name :</p>

            <li>{cat.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
