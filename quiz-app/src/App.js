import { createContext, useState } from "react"
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";
import './App.css'
export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState("Menu")
  const [score, setScore] = useState(0)
  return (
    <DataContext.Provider value={{ appState, setAppState ,score ,setScore}}>
      <div className="App">
        <h1>Web Development Quiz</h1>
        {appState == "Menu" && <Menu />}
        {appState == "Quiz" && <Quiz />}
        {appState == "Score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
