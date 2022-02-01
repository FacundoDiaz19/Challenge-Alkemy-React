import React from "react";

import Auth from "../Auth/Auth";
import NavBar from "../NavBar";
import Team from "../Team";

function Home() {
  return (
    <Auth>
      <NavBar />
      <div className="container">
        <div className="d-md-flex justify-content-center mt-1">
          <Team />
        </div>
      </div>
    </Auth>
  );
}

export default Home;
