import "./Styles/Global.css";

import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import AddToDo from "./components/AddToDo";

function App() {
  return (
    <>
      <Navbar />
      <div className="actions">
        <Filter />
        <SearchBar />
      </div>
      <div className="cards--container">
        <div className="card--grid">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>

      <div className="add-new-todo">
        <AddToDo />
      </div>
    </>
  );
}

export default App;
