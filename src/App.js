import "./styles.css";
import Posts from "./Components/posts";
import Postform from "./Components/postforms";

export default function App() {
  return (
    <div className="App">
      <Postform />
      <Posts />
    </div>
  );
}
