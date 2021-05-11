import React, { state } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Button,
  Row,
  Col,
  Table,
  Form,
  Modal,
} from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";

//  function selectTrafficProfile(item){
//   console.log("selection: " + item)

// };
export class App extends React.Component {
  state = {
    list: [
      { id: 1, label: "counter profile 1", value: false },
      { id: 2, label: "counter profile 2", value: false },
      { id: 3, label: "counter profile 3", value: false },
      { id: 4, label: "counter profile 4", value: false },
    ],
  };

  addItem(e) {
   
    e.preventDefault();

    const { list } = this.state;
   // const newItem = this.newItem;
    const newItem = "counter profile 5";
    const newId = Math.floor(Math.random() * 100) + 1;
    const newValue = false;
    const obj = { id: newId, label: newItem, value: newValue };

   
    newItem !== "" &&
      this.setState({
        list: [...this.state.list, obj],
       
      });
    

    this.addForm.reset();
    console.log(this.state.list);
  }

  handleChange = (e) => {
    const id = e.target.id;
    this.setState((prevState) => {
      return {
        list: prevState.list.map((li) =>
          li.id === +id ? { ...li, value: !li.value } : li
        ),
      };
    });
  };
  handleClick = () => {
    this.setState((prevState) => {
      return {
        list: prevState.list.filter((li) => !li.value),
      };
    });
  };

  change(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <Layout>
        <Jumbotron
          style={{ margin: "0rem", background: "#fff" }}
          className="text-center"
        >
          <h1>verification</h1>

          <Container>
            <div className="App">
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.handleClick}
                >
                  Delete
                </button>
              </div>

              {/* <button onClick={this.handleClick}>Delete</button> */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Traffic Profile</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((e) => {
                    return (
                      <tr key={e.id}>
                        <th scope="row">1</th>
                        <td>{e.label}</td>
                        <td>
                          <div key={e.id}>
                            <input
                              type="checkbox"
                              id={e.id}
                              checked={e.value}
                              onChange={this.handleChange}
                            />
                            <label htmlFor={e.id}></label>
                          </div>

                        </td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <form
              ref={(input) => (this.addForm = input)}
              className="form-inline"
              onSubmit={(e) => this.addItem(e)}
            >
              <div className="form-group">
                <label className="sr-only" htmlFor="newItemInput">
                  Add New Profile
                </label>
                <input
                  ref={(input) => (this.newColumn = input)}
                  type="text"
                  placeholder="Traffic Profile "
                  className="form-control"
                  id="newItemInput"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}

export default App;
