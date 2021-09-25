import axios from "axios";

const API = {
    // Get books from Google Books Search API
    getBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?", { params: { q: query } });
    },

    // Get saved books from the database
    getSavedBooks: function() {
        return axios.get("/api/books");
    },

    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

    // Deletes a book from the database
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}

export default API;