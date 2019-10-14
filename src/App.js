import React from "react";
import styles from "./Styles.css";
import MainPage from "./Components/Main Page";
import Bird from "./Bird.jpg";
import Boar from './Boar.jpg';
import Dog from './Dog.jpg';
import Dragon from './Dragon.jpg';
import Hare from './Hare.jpg';
import Horse from './Horse.jpg';
import Monkey from './Monkey.jpg';
import Ox from './Ox.jpg';
import Ram from './Ram.jpg';
import Rat from './Rat.jpg';
import Serpernt from './Serpernt.jpg';
import Tiger from './Tiger.jpg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: ''
    }

  }


  render() {
    return(
      <div>
        <div class="first row">
          <div class="first-bird">
              <img class="bird" src={Bird} alt="bird"></img>
              <div class="middle-bird">
              <div class="text-bird">Bird</div>
          </div>
          </div>
          <img class="boar" src={Boar} alt="bird"></img>
          <img class="dog" src={Dog} alt="bird"></img>
          <img class="dragon" src={Dragon} alt="bird"></img>
          <img class="hare" src={Hare} alt="bird"></img>
          <img class="horse" src={Horse} alt="bird"></img>
          </div>
          <h1 class="main-text">World of Naruto: Jutsu Maker</h1>
          {this.state.page === '' ? <button onClick={() => this.setState({page: 'home'})}>Home</button> : null}
       
          {this.state.page === 'home'
          ?
          (<MainPage page={this.state.page} changeToMain={this.changeToMain} changeToStyleVillages={this.changeToStyleVillages} changeToCreateJutsu={this.changeToCreateJutsu} changeToListNewJutsu={this.changeToListNewJutsu}/>)
          :
          null
          }

          <div class="second-row">
          <img class="monkey" src={Monkey} alt="bird"></img>
          <img class="ox" src={Ox} alt="bird"></img>
          <img class="ram" src={Ram} alt="bird"></img>
          <img class="rat" src={Rat} alt="bird"></img>
          <img class="serpernt" src={Serpernt} alt="bird"></img>
          <img class="tiger" src={Tiger} alt="bird"></img>
          </div>
      </div>
    )
  }
}

export default App;