import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

function Saved() {
    // Setting our component's initial state
    const [savedBooks, setSavedBooks] = useState([])

    // Load all books and store them with setSavedBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getSavedBooks()
            .then(res =>
                setSavedBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book, then reloads saved books
    const handleDeleteBook = event => {
        event.preventDefault();

        API.deleteBook(event.target.id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        {!savedBooks.length ? (
                            <h2 className="text-center">No Books to Display</h2>
                        ) : (
                            <BookList type="Saved Books">
                                {savedBooks.map(book => {
                                    return (
                                        <BookListItem
                                            key={book._id}
                                            thumbnail={book.image}
                                            title={book.title}
                                            authors={book.authors}
                                            description={book.description}
                                            link={book.link}
                                            index={book._id}
                                            type="danger"
                                            onClick={handleDeleteBook}
                                            buttonName="Delete"
                                        />  
                                    );
                                })}
                            </BookList>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Saved;