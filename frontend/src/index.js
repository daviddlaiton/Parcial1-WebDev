import React, { Component }from "react";
import ReactDOM from "react-dom";
import {Tag} from "./Components/tag";
import TagList from "./Components/TagList";
import History from "./Components/History";
import registerServiceWorker from "./registerServiceWorker";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            display : "tag" 
        }

        this.handleList = this.handleList.bind(this);
        /* this.handleHistory = this.handleHistory.bind(this); */
    }

    handleList(event){
        this.setState({display: "tagList"});
    }
/* 
    handleHistory(event){
        this.setState({display: "history"});
    } */

    render(){
        if(this.state.display === "tag"){
            return(
                <div>
                    <Tag  onList={this.handleList} onHistory={this.handleHistory}/>
                </div>
            );
        }

        if(this.state.display === "tagList"){
            return(
                <div>
                    <Tag  onList={this.handleList} onHistory={this.handleHistory} />
                    <br />
                    <br />
                    <TagList />
                </div>
            );
        }

        /* if(this.state.display === "history"){
            return(
                <div>
                    <Tag  onList={this.handleList} onHistory={this.handleHistory} />
                    <br />
                    <br />
                    <History />
                </div>
            );
        } */
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
