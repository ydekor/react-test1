import './App.css';
import TopLine from "./top/Top";
import LeftPanel from "./leftPanel/LeftPanel";
import Content from "./content/Content";

function App() {
  return (
    <div className="App">
        <TopLine />
        <div className="container">
            <LeftPanel />
            <Content />
        </div>
    </div>
  );
}
export default App;
