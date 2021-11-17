
import "./App.css";
import HighScoreTable from "./HightScoreTable";
import allCountryScores from "./Scores";

function App() {
  return (
    <div className="App">
      <HighScoreTable countries = {allCountryScores} />
    </div>
  );
}

export default App;
