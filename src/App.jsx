import "./reset.css";
import "./App.css";
import Header from "./components/header/Header";
import Jobs from "./components/jobs/Jobs";
const App = () => {
  return (
    <>
      <Header title="The job board" />
      <Jobs />
    </>
  );
};

export default App;
