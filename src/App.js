import React from "react";
import './App.css';
import AxiosFetch from "./Components/AxiosFetch";
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import UseReducer from './Components/UseReducer';
import UseMemo from './Components/UseMemo';

function App() {
  return (
    <div>
    <h1>Day-3 React Interview Questions</h1>
   <AxiosFetch/>
   <UseState/>
   <UseEffect/>
   <UseReducer/>
   <UseMemo/>
    </div>
  );
}

export default App;