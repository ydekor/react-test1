import React, {useState} from 'react';
import style from './App.module.css';
import TopLine from "./top/Top";
import LeftPanel from "./leftPanel/LeftPanel";
import Content from "./content/Content";
import Login from "./login/Login"

function App() {
    const [sidePanelVisible, setSidePanelVisible] = useState(false);

    const toggleSidePanel = () => {
        setSidePanelVisible(!sidePanelVisible);
    }

    return <div className={style.App}>
        <TopLine toggleSidePanel={toggleSidePanel}/>
        <div className={style.container}>
            {sidePanelVisible && <LeftPanel />}
            <Login />
        </div>
    </div>
}
export default App;
