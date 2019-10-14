import React from "react";
import MainPage from "./Components/Main Page";
import StylesVillages from "./Components/Styles-Villages";
import CreateJutsu from "./Components/Create Jutsu";
import NewJutsu from "./Components/New Jutsu";
import EnterButton from "./Components/EnterButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    
    }

  }

  

  render() {
    return(
      <div>
          <h1>World of Naruto: Jutsu Maker</h1>
          <EnterButton />
          <MainPage />
          <StylesVillages />
          <CreateJutsu />
          <NewJutsu />
      </div>
    )
  }
}

export default App;