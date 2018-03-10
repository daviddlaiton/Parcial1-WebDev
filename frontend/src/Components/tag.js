import React from "react";

import "./../Css/Tag.css";

export class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtag: ""
    }

    this.handleHashtagChange = this.handleHashtagChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHistory = this.handleHistory.bind(this);
  }

  handleHashtagChange(event) {
    this.setState({ hashtag: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let tagList = this.props.onList;
    localStorage.setItem("hashtag", this.state.hashtag);
    tagList();
  }

  handleHistory(event) {

    event.preventDefault();
    console.log(this.props);
    let history = this.props.onHistory;
    localStorage.setItem("hashtag", this.state.hashtag);
    history();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="hashtagForm">
          <header className="App-header">
            <h1 className="App-title">Top Instagram hashtags</h1>
            <img src="https://i2.wp.com/vtography.com/blog/wp-content/uploads/2016/12/instagram_hashtag.png?fit=1200%2C900"
              height="225" width="300" className="hashtagImg" alt="hashtag" />
          </header>

          <div>
            <div className="row">
              <div className="col-sm-2"> </div>
              <div className="col-sm-8">
                <form>
                  <label>Hashtag:</label>
                  <input type="text" id="fname" name="firstname" placeholder="Hashtag..." onChange={this.handleHashtagChange} />
                  <input type="submit" value="Search" onClick={this.handleSubmit} />
                  {/* <input type="submit" value="See history search" onClick={this.handleHistory} />*/}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

