import "./App.css";
import Landing from "./components/Landing/Landing";
import Waitlist from "./components/Waitlist/Waitlist";
import Education from "./components/Education/Education";
import Vision from "./components/Vision/Vision";

function App() {
  return (
    <div className="App">
      <Landing />
      {/* <div style={{ height: "100vh" }}>hi</div> */}
      <Education />
      {/* <div style={{ height: "100vh" }}>bye</div> */}
      <Vision/>
      <Waitlist />
    </div>
  );
}

export default App;
