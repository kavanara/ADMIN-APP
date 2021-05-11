import React from "react";
import Select from "react-select";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Jumbotron, InputGroup, FormControl } from "react-bootstrap";
import {
  App1,
  App2,
  App3,
  App4,
  App5,
  App6,
  App7,
  App8,
  App9,
  App10,
} from "../Traffic_profiles/index1";
import { GiSaveArrow } from "react-icons/gi";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Jumbotron
          style={{ margin: "0rem", background: "#fff" }}
          className="text-center"
        >
          <Container>
            <div>
              <h1>
                <InputGroup>
                  <InputGroup.Text className="h-25 d-inline-block">
                    Name of the Traffic Profile
                  </InputGroup.Text>
                  &nbsp;&nbsp;
                  <FormControl
                    className="h-10 d-inline-block"
                    className="w-50 p-3"
                    className="block-example border border-primary"
                  />
                </InputGroup>
              </h1>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col" class="text-left">
                    Counters
                  </th>
                  <th scope="col" class="text">
                    Counter Profiles
                  </th>

                  <th scope="col" class="text-right">
                    Description
                  </th>
                </tr>
              </thead>
            </table>

            <App1 />

            <App2 />

            <App3 />

            <App4 />

            <App5 />

            <App6 />

            <App7 />

            <App8 />

            <App9 />

            <App10 />

            <Link to="/Global_Traffic_profiles" className="navbar-brand">
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.handleClick}
                >
                  <GiSaveArrow /> Save
                </button>
              </div>
            </Link>
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}

export default App;
