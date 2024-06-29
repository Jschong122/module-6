import { useState } from "react";

export function BigCats() {
  const originalCatsData = [
    { name: "Cheetah", latinName: "Acinonyx jubatus" },
    { name: "Tiger", latinName: "Panthera tigris" },
    { name: "Leopard", latinName: "Panthera pardus" },
    { name: "Lion", latinName: "Panthera leo" },
    { name: "Cougar", latinName: "Puma concolor" },
    { name: "Jaguar", latinName: "Panthera onca" },
    { name: "Snow leopard", latinName: "Panthera uncia" },
  ];

  // FOR LAB 4-----------------------------------------------------------------------------------------------------------------

  const [catsData, setCatsData] = useState(originalCatsData);
  const [isFiltered, setIsFiltered] = useState(false);
  //function for reverse the list

  const reverseList = () => {
    let reverseOrder = [...catsData].reverse();
    console.log(" Reverse List ", reverseOrder);
    setCatsData(reverseOrder);
    setIsFiltered(true);
  };

  //function for alphabetically sorting the list

  const alphabetSorting = () => {
    let newCats = [...catsData];
    const alphabetCats = newCats;
    alphabetCats.sort((a, b) => {
      console.log(" after sorting", a, b);
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    //ship to state
    setCatsData(alphabetCats);
    setIsFiltered(true);
  };

  // display only cat family - ‘Panthera’
  const sortingFamily = () => {
    let sortingCats = [...catsData].filter((cat) => {
      return cat.latinName.includes("Panthera");
    });
    console.log(" display only Panthera ", sortingCats);
    setCatsData(sortingCats);
    setIsFiltered(true);
  };

  // function for reset

  const resetBtn = () => {
    let dataForResetAll = [...originalCatsData];
    console.log([dataForResetAll]);
    setCatsData(dataForResetAll);
    setIsFiltered(false);
  };

  // FOR LAB 4 ----------------------------------------------------------------------------------------------------------------------

  const cardStyle = {
    background: "white",
    color: "black",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div className="catsList-componentBox">
      <div>
        <button onClick={sortingFamily}> Display only Panthera </button>
        <button onClick={reverseList}> Reverse</button>
        <button onClick={alphabetSorting}> Sorting </button>
        <button onClick={resetBtn}>Reset</button>
      </div>

      <ul style={{ listStyleType: "none" }}>
        {" "}
        {catsData.map((cat) => (
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
