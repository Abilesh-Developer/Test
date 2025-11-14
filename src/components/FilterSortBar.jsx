import SearchBar from './SearchBar'
 const FiltersortBar = ({search, setsearch,gender,setgender,sort }) => {
    return (
        <div className="controls">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      <select onChange={(e) => sort(e.target.value)}>
        <option value="">Sort</option>
        <option value="firstName">Name</option>
        <option value="age">Age</option>
      </select>

      <select value={gender || ""} onChange={(e) => setgender(e.target.value)}>
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    );
  };

  export default FiltersortBar;
