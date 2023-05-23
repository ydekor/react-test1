import app from './App.module.css';
import TopLine from "./top/Top";
import LeftPanel from "./leftPanel/LeftPanel";
import Content from "./content/Content";

function App() {
  return (
    <div className={app.App}>
        <TopLine />
        <div className={app.container}>
            <LeftPanel />
            <Content />
        </div>
    </div>
  );
}
export default App;
