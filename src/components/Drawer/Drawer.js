import { Drawer } from "@material-ui/core";
import React from "react";
import {ReactComponent as Logo} from '../../assets/icons/bb.svg'
import './styles.scss'

const BBDrawer = ({showDrawer, setShowDrawer}) => {
    return <Drawer
    anchor={'left'}
    open={showDrawer}
    onClose={() => setShowDrawer(false)}
    className="drawer-container"
  >
      <div className="drawer-container"> 
      <Logo width={'6rem'} height={'6rem'}/>
        <p className="button-text-bb drawer-text">Support Us</p>
        <p className="button-text-bb drawer-text">About Us</p>
        <p className="button-text-bb drawer-text">Join Community</p>
      </div>
    
  </Drawer>
    
}

export default BBDrawer;