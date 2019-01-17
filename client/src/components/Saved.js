import React, { Component } from "react";
import SavedBook from "./SavedBook";
import Buttons from "./Button";
import axios from "axios";
import "./style.css";

class Saved extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            searchCopy: "",
            books: []
        }
    }

    typing = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    search = () => {
        axios.get("/api/books")
        .then(res => {
            this.setState({books: res.data});
        });
    }

    saveRemove = key => {
        const filtered = this.state.books.filter(book => book._id !== key);
        this.setState({books: filtered});
    }
    componentDidMount() {
        this.search();
    }

    render() {
        return(
            <div>
                <h1 className="mb-4">Your Saved Books</h1>
                <div className="books">
                {this.state.books.map(book => (
                    <SavedBook
                    key={book._id}
                    id={book._id}
                    authors={book.authors}
                    link={book.link}
                    title={book.title}
                    thumbnail={book.thumbnail || "nothing"}
                    synopsis={book.synopsis}
                    saveRemove={this.saveRemove}
                    />
                ))}
                
                
                </div>

            </div>
        )
    }
}

export default Saved;