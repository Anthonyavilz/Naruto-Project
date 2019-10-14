import React from "react";
import StylesVillages from "./Styles-Villages";
import CreateJutsu from "./Create Jutsu";
import NewJutsu from "./New Jutsu";

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            page: ''
        }
    }

    changeToMain = () => {
        this.setState({page: 'main-page'})
      }
    
      changeToStyleVillages = () => {
        this.setState({page: 'style-villages'})
      }
    
      changeToCreateJutsu = () => {
        this.setState({page: 'create-jutsu'})
      }
    
      changeToListNewJutsu = () => {
        this.setState({page: 'new-jutsu'})
      }
    
    
    render() {
        console.log(this.props);
        return(
            <div>
                {this.state.page === "" ? 
                <>
                <p class='siteInfo'>Insert text here, this will be the describing text about the site and the purpose</p>
                <button onClick={this.changeToMain}>Home</button>
                <button onClick={this.changeToStyleVillages}>Styles and Villages</button>
                <button onClick={this.changeToCreateJutsu}>Create</button>
                <button onClick={this.changeToListNewJutsu}>List of Jutsu</button>
                </>
                :
                
                this.state.page === 'create-jutsu' 
                ?
                (<CreateJutsu />)
                :
                this.state.page === 'new-jutsu'
                ?
                (<NewJutsu />)
                :
                this.state.page === 'style-villages'
                ?
                (<StylesVillages />)
                :
                this.state.page === 'main-page'
                ?
                (<MainPage />)
                : 
                null
        }
                
            </div>
        )
    }
}
// here I need to create the nav bar and add the 'linking' to the other components
export default MainPage;