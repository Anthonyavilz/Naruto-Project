import React from "react";

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <p>Insert text here, this will be the describing text about the site and the purpose</p>
                <button>Styles and Villages</button>
                <button>Create Jutsu</button>
                <button>List of Created</button>
            </div>
        )
    }
}
// here I need to create the nav bar and add the 'linking' to the other components
export default MainPage;