import React from "react";
import Select from "react-select";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { App1, App2 , App3 , App4, App5, App6, App7, App8, App9, App10 } from "../trial/index1";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Jumbotron
          style={{ margin: "0rem", background: "#fff" }}
          className="text-center"
        >
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
          



        </Jumbotron>
      </Layout>
    );
  }
}

export default App;
