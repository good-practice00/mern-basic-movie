import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Movie />
      <br />
      <User />
    </div>
  );
};

export default App;
