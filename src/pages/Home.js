import Search from "../components/Search";
import Card from "../components/Card";
const Home = () => {
  return (
    <>
      <div>
        <div>
          <p style={{ fontSize: "2rem", margin: "10px" }}>
            <strong>
              <span style={{ color: "#5eedd7" }}>Free</span> Instagram
              Engagement Rate Calculator
            </strong>
          </p>
          <p style={{ color: "#7a7d7d" }}>
            <strong>
              Try out free engagement Rate Calculator to find out the engagement
              of any Instagram account.
            </strong>
          </p>
        </div>
      </div>
      <div style={{ margin: "30px" }}>
        <Search />
      </div>
      <div>
        <Card />
      </div>
    </>
  );
};
export default Home;
