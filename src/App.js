import { useState } from "react"
import Header from "./components/Header";
import MainCard from "./ui/MainCard";
import Tasks from "./components/Tasks";
import ShadowRoot from "./ShadowRoot";
import GlobalCSS from "./styled/GlobalStyles";
// import "./App.css"

function App() {
  const [ fabIsOpen, setFabIsOpen ] = useState(true);

  return (
    <ShadowRoot>
      <div className="App">
        <GlobalCSS />
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red" onClick={(e) => {
            console.log(e.target)
            setFabIsOpen(() => !fabIsOpen)
          }}>
            <i className="large material-icons">mode_edit</i>
          </a>
          <ul>
            <li>
              <a className="btn-floating red">
                <i className="material-icons">insert_chart</i>
              </a>
            </li>
            <li>
              <a className="btn-floating yellow darken-1">
                <i className="material-icons">format_quote</i>
              </a>
            </li>
            <li>
              <a className="btn-floating green">
                <i classNameName="material-icons">publish</i>
              </a>
            </li>
            <li>
              <a className="btn-floating blue">
                <i className="material-icons">attach_file</i>
              </a>
            </li>
          </ul>
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
