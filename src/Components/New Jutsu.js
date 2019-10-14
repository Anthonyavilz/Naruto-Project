import React from "react";
import axios from "axios";
import Justu from "./Jutsu";


class NewJutsu extends React.Component {
    constructor() {
        super();
        this.state = {
            ownJutsu: []
        }
    }

    updateUserJutsu = newArr => {
        this.setState({ownJutsu: newArr})
    }

    componentDidMount() {
        axios.get("/api/naruto")
        .then(Response => {
            console.log(Response.data);
            this.setState({ownJutsu: Response.data});
        })
        .catch(error => {
            console.log(error);
        })
    }


    render() {

        let inputtedJutsu = this.state.ownJutsu.map((val) => { 
            console.log(val);
            return(
                <Justu val={val} updateUserJutsu={this.updateUserJutsu} />
            )
        }) 

        return(
            <div>
                <p>List of Created Justu</p>
                {inputtedJutsu}
            </div>
        )
    }
}
//possibly find a better way to display the list created from the create jutsu component
export default NewJutsu;