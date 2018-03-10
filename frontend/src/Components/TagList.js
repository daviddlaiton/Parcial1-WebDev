import React, { Component } from "react";
import "./../Css/TagList.css";
import BootstrapTable from "../../node_modules/react-bootstrap-table-next";
import BarChart from "react-bar-chart";

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const columnsTable = [{
    dataField: "hashtag",
    text: "Hashtag",
    headerStyle: {
        backgroundColor: "red",
        color: "white"
    }
}, {
    dataField: "count",
    text: "Number of appearances",
    headerStyle: {
        color: "white",
        backgroundColor: "red"
    }
}];

var info = [];

var data = [];

class TagList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            part: "initial",
            width: 1300,
            top : []

        }

        this.handleTryagain = this.handleTryagain.bind(this);
    }

    handleTryagain(event) {
        window.location.reload();
    }

    componentWillMount() {
        fetch("https://www.instagram.com/explore/tags/" + localStorage.getItem("hashtag") + "/?__a=1")
            .then(response => {
                if (response.status.toString() === "404") {

                    this.setState({ part: "notValidHashtag" });
                    let resp = "";
                    return (resp);
                }
                else {
                    return (response.json());
                }
            }

            )
            .then(response => {

                if (response !== "") {
                    let resultArray = response.graphql.hashtag.edge_hashtag_to_top_posts.edges;

                    let dCount = [],
                        tags = []
                    for (let result of Array.from(resultArray)) {
                        let w = result.node.edge_media_to_caption.edges[0].node.text;


                        for (let word1 of w.split(" ")) {
                            let word = word1.toLowerCase();
                            if (word.startsWith("#")) {
                                if (word !== ("#" + localStorage.getItem("hashtag"))) {
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

                    let max = 0;

                    if (tags.length < 10) {
                        max = tags.length;
                    }
                    else {
                        max = 10;
                    }
                    for (let i = 0; i < max; i++) {
                        let tagNuevo = {
                            hashtag: tags[i].tag,
                            count: tags[i].count
                        }

                        info.push(tagNuevo);

                        let graphElement = {
                            text: tags[i].tag,
                            value: tags[i].count
                        }

                        data.push(graphElement);
                    }
                    this.setState({top : tags});
                    this.setState({ part: "loaded" });
                }
            })
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
            return (
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4">
                                <BootstrapTable keyField="id" data={info} columns={columnsTable} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-8">
                                <h3> See the comparison in a graph! </h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (this.state.part === "notValidHashtag") {
            return (
                <div className="container-fluid">
                    <h1> Hashtag not found, please try again! </h1>
                    <input type="submit" value="Try again" onClick={this.handleTryagain} />

                </div>
            );
        }

    }
}

export default TagList;