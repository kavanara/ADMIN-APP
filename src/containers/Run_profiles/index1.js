import React from "react";
import Select from "react-select";
import Layout from "../../components/Layout";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";


class App1 extends React.Component {
    state = {
        name: "total_read_io_count",
        selectedOption: 0,
        options: [
            { label: "Switch Profile - 1", value: "60,000" },
            { label: "Switch Profile - 2", value: "40,000" },
            { label: "Switch Profile - 3", value: "30,000" },
        ],
      };
    
      handleChange = (selectedOption) => {
        console.log(selectedOption);
    
        for (let i = 0; i < this.state.options.length; i++) {
          if (this.state.options[i].value === selectedOption.value) {
            this.setState({ selectedOption: i });
            break;
          }
        }
      };
    
      render() {
        const { selectedOption, options } = this.state;
    
        return (
          <table className="table">
            <tr>
              
    
              <td width="20%" scope="col" class="text">
                <Col>
                  <Select onChange={this.handleChange} options={options} />
                </Col>
              </td>
    
              <td width="20%" scope="col" class="text-right">
                {this.state.options[this.state.selectedOption].value}
              </td>
            </tr>
          </table>
        );
      }
    }

class App2 extends React.Component {
  state = {
    name: "total_read_io_count",
    selectedOption: 0,
    options: [
        { label: "Switch Profile - 1", value: "60,000" },
        { label: "Switch Profile - 2", value: "40,000" },
        { label: "Switch Profile - 3", value: "30,000" },
    ],
  };

  handleChange = (selectedOption) => {
    console.log(selectedOption);

    for (let i = 0; i < this.state.options.length; i++) {
      if (this.state.options[i].value === selectedOption.value) {
        this.setState({ selectedOption: i });
        break;
      }
    }
  };

  render() {
    const { selectedOption, options } = this.state;

    return (
      <table className="table">
        <tr>
          

          <td width="20%" scope="col" class="text">
            <Col>
              <Select onChange={this.handleChange} options={options} />
            </Col>
          </td>

          <td width="20%" scope="col" class="text-right">
            {this.state.options[this.state.selectedOption].value}
          </td>
        </tr>
      </table>
    );
  }
}
export { App1, App2};