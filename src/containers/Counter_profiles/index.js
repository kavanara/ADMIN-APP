import React from "react";
import Select from "react-select";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Jumbotron,InputGroup,FormControl } from "react-bootstrap";
import { App1, App2 , App3 , App4, App5, App6, App7, App8, App9, App10 } from "../Traffic_profiles/index1";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Jumbotron
          style={{ margin: "0rem", background: "#fff" }}
          className="text-center"
        >
          <h1><InputGroup>
                <InputGroup.Text>Name of the Traffic Profile</InputGroup.Text>
                <FormControl />
              </InputGroup></h1>
              <br/>
              <br/>
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

          <App3/>

          <App4/>

          <App5/>

          <App6/>

          <App7/>

          <App8/>

          <App9/>

          <App10/>
          

          <button
                  type="button"
                  class="btn btn-primary"
                 
                >
                  Save
                </button>

        </Jumbotron>
      </Layout>
    );
  }
}

export default App;
