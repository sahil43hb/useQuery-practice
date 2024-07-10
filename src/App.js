import "./App.css";import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ShowTodos from "./views/ShowTodos";
import { createContext, useState } from "react";
import Increament from "./views/customHooksPractice";
import Appbar from "./views/Appbar";

const ThemeName = createContext(null);
function App() {
    const [name, setName]= useState('John');
    

  return (
  <ThemeName.Provider value={{name,setName}}>
    <Appbar/>
   <Router>
    <Routes>
      
      <Route path="/" element={<ShowTodos/>}  />
      <Route path="/increament" element={<Increament/>}  />
      {/* <Route path="/update-todo" element={<UpdateTodos/>}  /> */}
    </Routes>
   </Router>
   </ThemeName.Provider>
  );
}

export default App;
export { ThemeName };
