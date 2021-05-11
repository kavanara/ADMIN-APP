import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Layout from "../../components/Layout";
import { Container, InputGroup, FormControl, Tabs } from "react-bootstrap";
import { Jumbotron,Button } from "react-bootstrap";
import { App1, App2, App3, App4, App10, App11 } from "../synthetic/index1";
import { App5, App6, CustomerForm, App12 } from "../synthetic/index2";
import { GiSaveArrow} from "react-icons/gi";
import TabNav from "../synthetic/TabNav";
import Tab from "../synthetic/Tab";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Synthetic",
    };
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  };
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
                    Name of the Counter Profile
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

            <div>
              <Tabs
                className="flex-row"
                defaultActiveKey="Synthetic"
                id="uncontrolled-tab-example"
              >
                <Tab eventKey="Synthetic" title="Synthetic">
                  <Tabs
                    className="flex-row"
                    defaultActiveKey="Signal"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="Signal" title="Signal">
                      <br />
                      <br />
                      <App11 />
                    </Tab>
                    <br />
                    <Tab eventKey="Residue" title="Residue">
                      <br />
                      <br />
                      <App10 />
                    </Tab>

                    <Tab eventKey="Anomaly" title="Anomaly">
                      <br />
                      <br />
                      <App3 />
                    </Tab>
                    <Tab eventKey="Seasonality" title="Seasonality">
                      <br />
                      <br />
                      <App1 />
                    </Tab>
                    <Tab eventKey="Trend" title="Trend">
                      <br />
                      <br />
                      <App2 />
                    </Tab>
                  </Tabs>
                  {/* <br />
                  <br />
                  <App3/>
                  <br/>
                  <br/>
                  <App1 />
                  <br />
                  <br />
                  <App2 />
                  <br />
                  <br />
                 
                 
                  */}
                </Tab>
                <Tab eventKey="Field" title="Field">
                  <Tabs
                    className="flex-row"
                    defaultActiveKey="Signal"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="Signal" title="Signal">
                      <br />
                      <br />
                      <App12 />
                    </Tab>

                    <Tab eventKey="Customer Data" title="Customer Data">
                      <br />
                      <br />
                      <App5 />
                    </Tab>

                    <Tab eventKey="Anomaly" title="Anomaly">
                      <br />
                      <br />
                      <App6 />
                    </Tab>
                  </Tabs>
                </Tab>
              </Tabs>
              <br/>
              <br/>
              <br/>
              <Link to="/Run_profiles" className="navbar-brand">
              <Button> <GiSaveArrow/> Save</Button> 
              </Link>
            </div>
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}

//render(<App />, document.body);
export default App;
