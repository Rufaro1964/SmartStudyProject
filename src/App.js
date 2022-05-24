import "./styles.css";
import ProminentAppBar from "./ProminentAppBar";
// import BasicCard from "./BasicCard";
import FixedButtomNavigation from "./FixedBottomNavigation";

export default function App() {
  return (
    <div className="App">
      <ProminentAppBar />
      {/* <BasicCard /> */}
      <FixedButtomNavigation />
    </div>
  );
}
