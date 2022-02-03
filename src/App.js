import "./App.css";
import Landing from "./components/Landing/Landing";
import Waitlist from "./components/Waitlist/Waitlist";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="App">
      <Landing />
      {/* <div style={{ height: "100vh" }}>hi</div> */}
      <Education />
      {/* <div style={{ height: "100vh" }}>bye</div> */}
      <Waitlist />
    </div>
  );
}

export default App;
