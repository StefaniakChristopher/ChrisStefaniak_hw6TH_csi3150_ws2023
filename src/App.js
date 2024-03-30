import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

function App() {
  return (
    <div className="App">
      <Hero />
      {TravelData.map((travel) => (
        <TravelBlog
          key={travel.id}
          placeHeading={travel.placeHeading}
          placeImg1={travel.placeImg1}
          placeImg2={travel.placeImg2}
          placeImg3={travel.placeImg3}
          placeDescription={travel.placeDescription}
        />
      ))}
    </div>
  );
}

export default App;
