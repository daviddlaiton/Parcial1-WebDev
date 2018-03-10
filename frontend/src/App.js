import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtag: "",
      top: []
    }

    this.handleHashtagChange = this.handleHashtagChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHashtagChange(event) {
    this.setState({ hashtag: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://www.instagram.com/explore/tags/" + this.state.hashtag + "/?__a=1")
      .then(response => response.json())
      .then(response => {

        let resultArray = response.graphql.hashtag.edge_hashtag_to_top_posts.edges;

        let dCount = [],
          tags = []
        for (let result of Array.from(resultArray)) {
          let w = result.node.edge_media_to_caption.edges[0].node.text;


          for (let word1 of w.split(" ")) {
            let word = word1.toLowerCase();
            if (word.startsWith("#")) {
              if (word !== ("#" + this.state.hashtag)) {
                if (!(word in dCount)) {
                  dCount[word] = 0;
                }
                dCount[word] += 1;
              }
            }
          }

        }

        for (let tag in dCount) {
          tags.push({
            tag: tag,
            count: dCount[tag]
          })
        }
        tags.sort((a, b) => b.count - a.count);

        let topTen = {},
            max = 0;

        if( tags.length <10)
        {
          max = tags.length;
        }
        else{
          max = 10;
        }
        for (let i =0; i<max ;i++) {
          topTen[i] = tags[i]
        }

        this.setState({ top: topTen });
        console.log(this.state.top);
      });


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
