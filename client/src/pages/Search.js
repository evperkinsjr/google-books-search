import React, { useState } from "react";
import API from "../utils/API";
import Input from "../components/Input";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

function Search() {
    const [books, setBooks] = useState([]);
    const [bookSearch, setBookSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        setBookSearch(value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        API.getBooks(bookSearch)
            .then(
                res => {
                    console.log(res.data.items);
                    setBooks(res.data.items);
                }
            )
            .catch(err => console.log(err));
    };

    const saveBookHandler = event => {
        event.preventDefault();

        API.saveBook({
            id: books[event.target.id].id,
            image: books[event.target.id].volumeInfo.imageLinks.thumbnail,
            title: books[event.target.id].volumeInfo.title,
            authors: books[event.target.id].volumeInfo.authors,
            description: books[event.target.id].volumeInfo.description,
            link: books[event.target.id].volumeInfo.link
        })
        .then(() => alert('Added to Saved Books List'))
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <form>
                            <Input
                                name="bookSearch"
                                value={bookSearch}
                                onChange={handleInputChange}
                                placeholder="Search by keyword, title, or author"
                            />
                            <Button
                                className="input-lg"
                                type="success"
                                onClick={formSubmitHandler}
                            >Search</Button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        {!books.length ? (
                            <h2 className="text-center">No Books to Display</h2>
                        ) : (
                            <BookList type="Results">
                                {books.map((book, index) => {
                                    return (
                                        <BookListItem
                                            key={book.id}
                                            thumbnail={book.volumeInfo.imageLinks.thumbnail}
                                            title={book.volumeInfo.title}
                                            authors={book.volumeInfo.authors}
                                            description={book.volumeInfo.description}
                                            link={book.volumeInfo.link}
                                            index={index}
                                            onClick={saveBookHandler}
                                            buttonName="Save Book"
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

export default Search;