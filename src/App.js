import { useState } from "react"
import Header from "./components/Header";
import MainCard from "./ui/MainCard";
import Tasks from "./components/Tasks";
import ShadowRoot from "./ShadowRoot";
import GlobalCSS from "./styled/GlobalStyles";

function App() {
  const [ fabIsOpen, setFabIsOpen ] = useState(true);

  return (
    <ShadowRoot>
      <div className="App">
        <GlobalCSS />
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large blue darken-1" onClick={(e) => {
            console.log(e.target)
            setFabIsOpen(() => !fabIsOpen)
          }}>
            <i className="large material-icons">playlist_add</i>
          </a>
        </div>
        <MainCard className={fabIsOpen && "hide"}>
          <Header title="Task Tracker" />
          <Tasks></Tasks>
        </MainCard>
      </div>
    </ShadowRoot>
  );
}

export default App;
