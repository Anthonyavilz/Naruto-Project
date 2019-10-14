import React from "react";
import Axios from "axios";

class CreateJutsu extends React.Component {
    constructor() {
        super();
        this.state = {
            sealOne: '',
            sealTwo: '',
            sealThree: '',
            sealFour: '',
            sealFive: '',
            sealSix: '',
            jutsuName: ''
        }
    }

    handleSealOne = e => {
        this.setState({sealOne: e.target.value})
    }

    handleSealTwo = e => {
        this.setState({sealTwo: e.target.value})
    }

    handleSealTHree = e => {
        this.setState({sealThree: e.target.value})
    }

    handleSealFour = e => {
        this.setState({sealFour: e.target.value})
    }

    handleSealFive = e => {
        this.setState({sealFive: e.target.value})
    }

    handleSealSix = e => {
        this.setState({sealSix: e.target.value})
    }

    handleName = e => {
        this.setState({jutsuName: e.target.value})
    }

    handleClick = e => {
        const {sealOne, sealTwo, sealThree, sealFour, sealFive, sealSix, jutsuName} = this.state;
        e.preventDefault();
        Axios.post("/api/naruto/", {
            sealOne,
            sealTwo,
            sealThree,
            sealFour,
            sealFive,
            sealSix,
            jutsuName

        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }


    render() {
        return(
            <form>
                <input placeholder="Hand Sign 1" onChange={this.handleSealOne}></input>
                <input placeholder="Hand Sign 2" onChange={this.handleSealTwo}></input>
                <input placeholder="Hand Sign 3" onChange={this.handleSealThree}></input>
                <input placeholder="Hand Sign 4" onChange={this.handleSealFour}></input>
                <input placeholder="Hand Sign 5" onChange={this.handleSealFive}></input>
                <input placeholder="Hand Sign 6" onChange={this.handleSealSix}></input>
                <input placeholder="Jutsu Name" onChange={this.handleName}></input>
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }
}
//here I need to add design. I will need to import Austin's hands design and find a way to let the user select or type in the name of the hand seals to create the jutsu they want. 
export default CreateJutsu;