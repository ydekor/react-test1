import React, {useState} from 'react';
import style from './App.module.css';
import TopLine from "./top/Top";
import LeftPanel from "./leftPanel/LeftPanel";
import Content from "./content/Content";
import Login from "./login/Login"
import {View} from "./helper/LeftButtons";

function App() {
    const [sidePanelVisible, setSidePanelVisible] = useState(false);
    const [currentView, setCurrentView] = useState(View.Login);

    const toggleSidePanel = () => {
        setSidePanelVisible(!sidePanelVisible);
    }

    return <div className={style.App}>
        <TopLine toggleSidePanel={toggleSidePanel}/>
        <div className={style.container}>
            <div>
                {sidePanelVisible && <LeftPanel setCurrentView={setCurrentView} />}
            </div>
            <div>
                {currentView === View.Main && <Content />}
                {currentView === View.Login && <Login />}
            </div>
        </div>
    </div>
}
export default App;
