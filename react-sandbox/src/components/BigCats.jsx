import { useState } from "react";
import { originalCatsData } from "../assets/data/catsData";
import { AddCatForm } from "../components/AddCatForm";

export function BigCats({ showFormAndDelete, showResetButton }) {
  const [catList, setCatList] = useState(originalCatsData);

  const reverseList = () => {
    setCatList([...catList].reverse());
  };

  const alphabeticallySortList = () => {
    setCatList(
      [...catList].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
    );
  };

  const showOnlyPanthera = () => {
    setCatList(
      originalCatsData.filter((cat) => cat.latinName.includes("Panthera"))
    );
  };

  const resetList = () => {
    setCatList(originalCatsData);
  };

  const updateCat = (newCat) => {
    setCatList((prevCatList) => [...prevCatList, newCat]);
  };

  const deleteCat = (name) => {
    setCatList((prevCatList) => prevCatList.filter((cat) => cat.name !== name));
  };

  return (
    <div>
      <button onClick={reverseList}>Reverse List</button>
      <button onClick={alphabeticallySortList}>Alphabetically Sort List</button>
      <button onClick={showOnlyPanthera}>Show Only Panthera</button>
      {showResetButton && <button onClick={resetList}>Reset List</button>}
      {showFormAndDelete && <AddCatForm onFormSubmit={updateCat} />}
      <ul>
        {catList.map((cat) => (
          <li key={cat.name}>
            {cat.name} ({cat.latinName})
            {showFormAndDelete && (
              <button onClick={() => deleteCat(cat.name)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
