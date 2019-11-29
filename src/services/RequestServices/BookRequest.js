import * as axios from "axios";

export const BookRequest = {
  async getBook(token, bookId) {
    return await axios.get(`https://api.marktube.tv/v1/book/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  async getBooks(token) {
    return await axios.get(`https://api.marktube.tv/v1/book`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  async deleteBook(token, bookId) {
    return await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  async addBook(token, body) {
    return await axios.post(`https://api.marktube.tv/v1/book/`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};
