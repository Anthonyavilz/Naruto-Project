import React from "react";
import axios from 'axios';


class Jutsu extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    deleteJutsu = () => {
        axios.delete(`/api/naruto/${this.props.val.id}`).then(Response => {
            console.log(Response.data);
            this.props.updateUserJutsu(Response.data);
        })
    }

    render() {
        return(
            <div>
                <h1 class="outputOfJutsu">{this.props.val.sealOne}</h1>
                <h1 class="outputOfJutsu">{this.props.val.sealTwo}</h1>
                <h1 class="outputOfJutsu">{this.props.val.sealThree}</h1>
                <h1 class="outputOfJutsu">{this.props.val.sealFour}</h1>
                <h1 class="outputOfJutsu">{this.props.val.sealFive}</h1>
                <h1 class="outputOfJutsu">{this.props.val.sealSix}</h1>
                <h1 class="outputOfJutsu">{this.props.val.jutsuName}</h1> 
                <button class="editButton">Edit</button> 
                <button class="deleteButton" onClick={this.deleteJutsu}>Delete</button>
            </div>
        )
    }
}

export default Jutsu;

// need to add the functionality for the edit button