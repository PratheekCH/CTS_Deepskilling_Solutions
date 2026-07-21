import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
  const flag = false;

  return (
    <div style={{ padding: "20px" }}>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;