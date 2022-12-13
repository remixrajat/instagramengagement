import "./Search.css";
const Search = () => {
  return (
    <div className="Search">
      <input
        style={{
          height: "100%",
          width: "90%",
          border: "none",
          fontSize: "1.3rem",
        }}
        name="search"
        plac
      />
      <button
        style={{
          height: "110%",
          width: "10%",
          backgroundColor: "#3ff2d7",
          border: "none",
          color: "white",
          fontSize: "1rem",
        }}
      >
        Check
      </button>
    </div>
  );
};
export default Search;
