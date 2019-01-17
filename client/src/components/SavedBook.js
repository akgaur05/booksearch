import React, { Component } from "react";
import axios from "axios";
import Buttons from "./Button";
import "./style.css";


class SavedBook extends Component {
    constructor(props) {
        super(props);
        this.state = {book: {}}
    }
    details = event => {
        event.preventDefault();
        window.open(this.props.link);
    }
    delete = event => {
        event.preventDefault();
        axios.delete(`/api/books/${this.state.book.id}`).then(response => {
            this.props.saveRemove(this.state.book.id);
            console.log(response);

    })
}

    componentDidMount() {
        const bookInfo = {id: this.props.id, title: this.props.title, authors: this.props.authors, thumbnail: this.props.thumbnail, synopsis: this.props.synopsis, link: this.props.link};
        this.setState({book: bookInfo});
    }
    
    render() {
      return  (
        <div className="book mx-auto">
            <img className="img-fluid mb-2" src={this.props.thumbnail} alt="Book Jacket" />
            <h2>{this.props.title} by {this.props.authors}</h2>
            <p>{this.props.synopsis}</p>
            <Buttons
            function1={this.details}
            buttonName1="Details"
            function2={this.delete}
            buttonName2="Delete"
            />
            <hr />
        </div>
    )
        }
}

export default SavedBook;