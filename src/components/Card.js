import "./Card.css";

const datas = [
  {
    name: "Rajat",
    followers: 1.1,
    likes: 31.2,
    comments: 250,
    rate: 80,
  },
  {
    name: "Salmanbhoi",
    followers: 1.1,
    likes: 31.2,
    comments: 250,
    rate: 30,
  },
];
const Card = () => {
  return (
    <div className="Card">
      {datas.map((data, index) => {
        return (
          <div key={index} className="Card-child">
            <div className="Social">
              <a style={{ textDecoration: "none" }} href="https://twitter.com/">
                Li
              </a>
              <a style={{ textDecoration: "none" }} href="https://twitter.com/">
                Tw
              </a>
            </div>
            <div
              className="Status"
              style={{
                backgroundColor: data.rate > 70 ? "#6eff6e" : "orange",
              }}
            >
              {data.rate > 70 ? "Good" : "Avrage"} ER
            </div>
            <div className="Image">
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://avatarfiles.alphacoders.com/117/117402.jpg"
                alt="image"
              />
            </div>
            <div>
              <p>{data.name}</p>
            </div>
            <div
              style={{
                display: "flex",
                width: "80%",
                margin: "20px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>
                  <strong>{data.followers} M</strong>
                </p>
                <p style={{ fontSize: "0.8rem" }}>Followers</p>
              </div>
              <div>
                <p>
                  <strong>{data.likes} K</strong>
                </p>
                <p style={{ fontSize: "0.8rem" }}>Likes</p>
              </div>
              <div>
                <p>
                  <strong>{data.comments}</strong>
                </p>
                <p style={{ fontSize: "0.8rem" }}>Comments</p>
              </div>
            </div>
            <div style={{ position: "relative", width: "100%" }}>
              <p style={{ marginTop: "10px", marginBottom: "30px" }}>
                <strong>Engagement rate</strong>
              </p>
            </div>

            <div className="Meter">
              <div className="Meter1"></div>
              <div className="Meter2"></div>
              <div className="Cap"></div>
              <div className="Meter3"></div>
              <div className="Inside"></div>
              <div
                className="Needle"
                style={{ transform: `rotate(${data.rate * 2 - 90}deg)` }}
              ></div>
            </div>
            <div className="End">
              <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                <strong>{data.rate}%</strong>
              </p>
              <div
                style={{
                  border: "1px solid #3ff2d7",
                  borderRadius: "2rem",
                  padding: "0 2rem",
                  fontSize: "0.8rem",
                }}
              >
                To get the full report
                <a
                  style={{
                    textDecoration: "none",
                    color: "#3ff2d7",
                    paddingLeft: "10px",
                  }}
                  href="https://google.com"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
