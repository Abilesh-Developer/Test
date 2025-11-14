import { use, useContext, useEffect, useState } from "react";
import './App.css';
import EmployeTable from "./components/EmployeTable";
import FiltersortBar from "./components/FilterSortBar";
import useSort from "./hooks/useSort";
import { ThemeContext } from "./Context/ThemeContext";

  const App = () => {
    const[users, setUsers] = useState([]);
    const[search, setSearch] = useState("");
    const[gender, setGender] = useState("");

    const{ theme, toggleTheme } = useContext(ThemeContext);
    const{ sortedData, sort } = useSort(users);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.users));   
    },[]);

    const filtered = sortedData
     .filter((u) =>
        `${u.firstName} ${u.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((u) => (gender ? u.gender === gender : true));

    return(
        <div className={`app ${theme}`}>
            <button className="theme-btn" onClick={toggleTheme}>
                 Toggle {theme === "light" ? "Dark" : "Light"} Mode
            </button>

            <h2>Employe Directory</h2>
            <p>Total Employes: {filtered.length}</p>

            <FiltersortBar
              search={search}
              setsearch={setSearch}
              gender={gender}
              setgender={setGender}
              sort={sort}
             />

             <EmployeTable users= {filtered} />
        </div>
    );
  };
export default App;

