import React, { Component } from 'react'
import axios from "axios";

 class JokeGenerator extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        jokes: "", 
        data: []
     }
   }

   handleSubmit = async e => {
    e.preventDefault();
    const url = `http://api.icndb.com/jokes/random/${this.state.jokes}`;
    const response = await axios.get(url);
   const responses = (response.data.value)
    this.setState({ data: responses })
    console.log(this.state.data);
    this.setState({
      jokes: ""
    });

  }
   
   handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

  }

  render() {
    return (
      <div className="form-group">
      <h1 className="heading display-5 pb-3">Enter Number of Jokes</h1>
      <form onSubmit={this.handleSubmit}>
              <input
                name="jokes"
                id="jokes"
                type="text"
                value = {this.state.jokes}
                required
                className="form-control mb-4"
                onChange={this.handleChange}
                placeholder="Enter number of jokes" />
      <div className="form-group">
              <button className="btn btn-dark " >Submit</button>
        </div>
            </form>
            <div>
            <ul className="list-group list-group-flush mt-5">
                {
                this.state.data.map( (joke, i) =>
                <li className="list-group-item" key={i}>{joke.joke}</li>
                )}
              </ul>
            </div>
      </div>

    
    )
  }
}

export default JokeGenerator
