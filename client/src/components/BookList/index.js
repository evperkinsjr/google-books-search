import React from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button";
import { Container, Row, Col } from "../Grid";

// BookList renders a bootstrap list item
export function BookList({ type, children }) {
    return (
        <div>
            <h2>{type}:</h2>
            <ul className="list-group">{children}</ul>
        </div>
    );
}

// BookListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
    thumbnail,
    title,
    authors,
    description,
    link,
    index,
    onClick,
    buttonName,
    type
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="sm-2 md-2 lg-2">
                        <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
                    </Col>
                    <Col size="sm-8 md-8 lg-9">
                        <h3>{title}</h3>
                        <p>By: {authors}</p>
                        <p>{description}</p>
                        <a rel="noopener noreferrer" target="_blank" href={link}>View book</a>
                    </Col>
                    <Col size="sm-2 md-2 lg-1">
                        <Button
                            id={index}
                            onClick={onClick}
                            type={type}
                            className={"input-lg"}>
                            {buttonName}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}