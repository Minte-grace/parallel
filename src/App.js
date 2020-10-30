import HeroSectionContainer from "./components/HeroSectionContainer";
import {Spring} from "react-spring/renderprops";
import CardsContainer from "./components/CardsContainer";
import Contact from "./components/Contact";
import Feature from "./components/Feature";


function App() {
  return (
    <div className="App">
       <HeroSectionContainer/>
          <Spring
            from={{opacity:0}}
            to={{opacity:1}}
            config={{delay:2500, duration:2500}}    
          >
              {(props)=>
                <div style={props}>
                    <CardsContainer/>
                    <Feature/>
                    <Contact/>
                </div>
              }
          </Spring>
    </div>
  );
}

export default App;
