import React from "react";
import "./PlayerDetails.css";

const PlayerDetails = () => {
  return (
    <div className="playerDetails-section">
      <div className="card mb-3 playerDetails-card-sizing">
        <div className="row g-0">
          <div className="col-md-4">
            <img
                className="playerDetails-card-img-sizing"
              src={require("./img/HD-wallpaper-messi-football-player - Copy.jpg")}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body playerDetails-card-body-sizing">
              <h1 className="card-title">
                Lionel Messi 94 World Cup TOTT In Game Stats
              </h1>
              <h1 className="card-title text-danger">
                Best Rated Player In FIFA 23
              </h1>
              <p className="card-text">
                Lionel Messi has scored more than 600 goals for Barcelona but
                picked out a header in 2009 as his favourite of them all. Lionel
                Messi picked his header against Manchester United in the 2009
                Champions League final as the standout goal among more than 600
                he has scored in his Barcelona career.
              </p>
              <p className="card-text">
                <small className="text-muted">Ratings :5.0</small>
              </p>
              <button className="btn btn-outline-success">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
