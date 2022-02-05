import "./App.css";
import Landing from "./components/Landing/Landing";
import Waitlist from "./components/Waitlist/Waitlist";
import Education from "./components/Education/Education";
import Vision from "./components/Vision/Vision";
import { Drawer } from "@material-ui/core";
import { useState } from "react";
import BBDrawer from './components/Drawer/Drawer';

function App() {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <div className="App">
      <Landing onSideNavClick = {() => setShowDrawer(true)}/>
      {/* <div style={{ height: "100vh" }}>hi</div> */}
      <Education />
      {/* <div style={{ height: "100vh" }}>bye</div> */}
      <Vision/>
      <Waitlist />
      <BBDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer}/>
    </div>
  );
}

export default App;
