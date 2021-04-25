// import React, { useState } from "react";
import Table from "../components/Table";

const App = () => {
  return (
    <div style={{width: "100%", padding: "30px", margin: 0}}>
      <h1>Preços SINAPI AL</h1>
      <div style={{height: 600}}>
        <Table/>
      </div>
    </div>
  );
};

export default App;
