import React, { Component } from "react";
import Book from "./BookComponent.js";
import API from "./api/API";
import "./style.css";

class Search extends Component {
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
    searchButton = event => {
        event.preventDefault();
        API.searchBooks(this.state.search)
        .then(res => {
            this.setState({books: res.data.items});
        });
        this.setState({searchCopy: this.state.search});
        this.setState({search: ""})
    }

    saveRemove = key => {
        const filtered = this.state.books.filter(book => book.id !== key);
        this.setState({books: filtered});
    }

    render() {
        return(
            <div>
                <h1 className="mb-4">Search Google Books</h1>
                <form className="form-inline">
                    <input id="search" type="text" value={this.state.search} onChange={this.typing} name="search" className="mb-2 mr-3" placeholder="Look for Book!" />
                    <button type="submit" className="btn mb-2" onClick={this.searchButton}>Search</button>
                </form>
                <div className="books">
                {!this.state.books ? <h3>Search Results for {this.state.searchCopy}</h3> : <br />}
                {this.state.books.map(book => (
                    <Book
                    key={book.id}
                    id={book.id}
                    authors={book.volumeInfo.authors}
                    link={book.volumeInfo.previewLink}
                    title={book.volumeInfo.title}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail || "nothing"}
                    synopsis={book.volumeInfo.description}
                    saveRemove={this.saveRemove}
                    />
                ))}
                
                
                </div>

            </div>
        )
    }
}

export default Search;