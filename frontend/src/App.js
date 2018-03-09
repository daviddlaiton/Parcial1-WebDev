import React, { Component } from 'react';
import './Css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtag : ""
    }

    this.handleHastagChange = this.handleHastagChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHastagChange(event){
    this.setState({ hashtag : event.target.value});
    console.log(this.state);
  }

  handleSubmit(event){
    
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Top Instagram hashtags</h1>
            <img src="https://i2.wp.com/vtography.com/blog/wp-content/uploads/2016/12/instagram_hashtag.png?fit=1200%2C900"
              height="225" width="300" className="hashtagImg" />
          </header>

          <div>
            <div className="row">
              <div className="col-sm-2"> </div>
              <div className="col-sm-8">
                <form>
                  <label for="fname">Hashtag:</label>
                  <input type="text" id="fname" name="firstname" placeholder="Hashtag..." onChange={this.handleHastagChange} />
                  <input type="submit" value="Submit"  onClick={this.han} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
