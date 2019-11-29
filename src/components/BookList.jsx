import React from "react";
import Books from "./Books";
import AddBook from "../pages/AddBook";
import { Pagination, Button, Modal, Icon, Affix, Input } from "antd";
const numEachPage = 3;
const { Search } = Input;

export default class BookList extends React.Component {
  async componentDidMount() {
    const { token } = this.props;
    this.props.recieveBooksThunk(token);
  }

  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 3,
      modal1Visible: false,
      modal2Visible: false,
      search: ""
    };
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  handleChange = value => {
    this.setState({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage
    });
  };

  render() {
    const {
      token,
      deleteBookThunk,
      undoDeleteBook,
      loading,
      recieveBookThunk
    } = this.props;
    const books = this.props.books.filter(book => book.deletedAt === null);
    const search = this.state;
    const book = this.props.book;
    console.log(`token_booklist: ${token}`);
    console.log(`props_booklist: ${this.props}`);
    console.log(`props_books: ${book}`);
    console.log(`search: ${this.state.search}`);
    if (loading) {
      return (
        <Icon
          type="loading"
          style={{
            fontSize: "400px",
            marginTop: "280px",
            marginBottom: "280px"
          }}
        />
      );
    }
    return (
      <>
        <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
          <Button
            type="primary"
            onClick={() => this.setModal2Visible(true)}
            style={{
              position: "absolute",
              width: "110px",
              marginTop: "50px",
              backgroundColor: "#b53131",
              border: "black"
            }}
          >
            <Icon type="plus-circle" />
            Add Book
          </Button>
          <Modal
            centered
            visible={this.state.modal2Visible}
            onCancel={this.clickCancel}
            width="600px"
            footer={null}
          >
            <AddBook addBookThunk={this.props.addBookThunk} token={token} />
          </Modal>
        </Affix>

        <Search
          placeholder="search book by title"
          onSearch={search => this.setState({ search: search })}
          style={{
            width: 800,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px"
          }}
        />

        <div
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "2%",
            height: "85vh"
          }}
        >
          {this.state.search !== ""
            ? books &&
              books.length > 0 &&
              books
                .filter(book => book.title == this.state.search)
                .slice(this.state.minValue, this.state.maxValue)
                .map((book, index) => (
                  <Books
                    token={token}
                    {...book}
                    key={index}
                    book={book}
                    deleteBookThunk={deleteBookThunk}
                    undoDeleteBook={undoDeleteBook}
                    search={search}
                    recieveBookThunk={recieveBookThunk}
                  />
                ))
            : books &&
              books.length > 0 &&
              books
                .slice(this.state.minValue, this.state.maxValue)
                .map((book, index) => (
                  <Books
                    token={token}
                    {...book}
                    key={index}
                    book={book}
                    deleteBookThunk={deleteBookThunk}
                    undoDeleteBook={undoDeleteBook}
                    search={search}
                    recieveBookThunk={recieveBookThunk}
                  />
                ))}
        </div>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={numEachPage} //default size of page
          onChange={this.handleChange}
          total={
            this.state.search === ""
              ? books.length
              : books.filter(book => book.title == this.state.search).length
          } //total number of card data available
          onChange={this.handleChange}
          style={{
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      </>
    );
  }
  clickCancel = () => {
    this.setModal2Visible(false);
    window.location.reload();
  };
  searchByTitle = search => {
    this.setState({ search: search });
  };
}
