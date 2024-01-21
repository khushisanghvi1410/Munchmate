import React from "react";
import { json } from "react-router-dom";
class AboutClass extends React.Component{
    constructor(props){
        super(props);
        console.log("This is the contructor");
        this.state={
           name:"Dummy Name",
           url:"abc"
        };
    }
    render(){
        return (
            <div>
                <img src={this.state.url} alt="Image"></img>
               <h1>Name of the Author is {this.state.name}</h1>
            </div>
        );
    }

    async componentDidMount(){
        const fetchdata=await fetch("https://api.github.com/users/khushisanghvi1410");
        const jsonData=await fetchdata.json();
        console.log(jsonData);

        this.setState({
                name:jsonData.name,
                url:jsonData.avatar_url
        })
    }
    
    componentDidUpdate(){
        
        console.log(this.state.url)
    }
}

export default AboutClass;