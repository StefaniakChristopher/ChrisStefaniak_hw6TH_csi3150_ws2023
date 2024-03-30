import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";

function App() {
  return (
    <div className="App">
      <Hero />
      <TravelBlog />
      <TravelBlog />
      <TravelBlog />
    </div>
  );
}

export default App;
