import React, { Component } from "react";
import BootstrapTable from "../../node_modules/react-bootstrap-table-next";


const columnsTable = [{
    dataField: "hashtag",
    text: "Hashtag",
    headerStyle: {
        backgroundColor: "red",
        color: "white"
    }
}, {
    dataField: "lastSearch",
    text: "Last search was in",
    headerStyle: {
        color: "white",
        backgroundColor: "red"
    },
}];

var history = [];

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: "",
            winnerTag: "",
            part: "initial"
        }
    }
    componentWillMount() {

        fetch("/history" + localStorage.getItem("hashtag")
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        tag: json.tag,
                        winnerTag: json.winnerTag
                    });
                })
        ).catch((error)=>{
            alert("There was an error");
          });

        let tagToAdd = {
            tag: this.state.tag,
            winnerTag: this.state.tag
        }


        history.push(tagToAdd);

        this.setState({
            part: "loaded"
        });
    }
    render() {
        if (this.state.part === "initial") {
            return (
                <div>
                    <div className="loader"></div>
                </div>
            );
        }
        if (this.state.part === "loaded") {
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <BootstrapTable keyField="id" data={history} columns={columnsTable} />
                        </div>
                    </div>
                </div>
            </div>
        }
    }
}

export default History;