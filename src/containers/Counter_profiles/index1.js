import React from "react";
import Select from "react-select";
import Layout from "../../components/Layout";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";


class App1 extends React.Component {
  state = {
    name: "io_app_count         ",
    selectedOption: 0,
    options: [
      { value: "counter 1", label: "Counter 1" },
      { value: "counter 2", label: "counter 2" },
      { value: "counter 3", label: "counter 3" },
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
          <td scope="col" width="20%" md="4" class="text-left">
            {this.state.name}
          </td>
          <td scope="col" width="20%" class="text">
            <Col>
              {" "}
              <Select onChange={this.handleChange} options={options} />
            </Col>
          </td>
          <td scope="col" width="20%" class="text-right">
            {this.state.options[this.state.selectedOption].label}
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
      { value: "counter 1", label: "Counter 1" },
      { value: "counter 2", label: "counter 2" },
      { value: "counter 3", label: "counter 3" },
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
          <td width="20%" scope="col" class="text-left">
            {this.state.name}
          </td>

          <td width="20%" scope="col" class="text">
            <Col>
              <Select onChange={this.handleChange} options={options} />
            </Col>
          </td>

          <td width="20%" scope="col" class="text-right">
            {this.state.options[this.state.selectedOption].label}
          </td>
        </tr>
      </table>
    );
  }
}

class App3 extends React.Component {
  state = {
    name: "total_write_io_count",
    selectedOption: 0,
    options: [
      { value: "counter 1", label: "Counter 1" },
      { value: "counter 2", label: "counter 2" },
      { value: "counter 3", label: "counter 3" },
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
          <td scope="col" width="20%" class="text-left">
            {this.state.name}
          </td>
          <td scope="col" width="20%" class="text">
            <Col>
              {" "}
              <Select onChange={this.handleChange} options={options} />
            </Col>
          </td>
          <td scope="col" width="20%" class="text-right">
            {this.state.options[this.state.selectedOption].label}
          </td>
        </tr>
      </table>
    );
  }
}

class App4 extends React.Component {
    state = {
      name: "peak_read_io_rate",
      selectedOption: 0,
      options: [
        { value: "counter 1", label: "Counter 1" },
        { value: "counter 2", label: "counter 2" },
        { value: "counter 3", label: "counter 3" },
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
            <td scope="col" width="20%" class="text-left">
              {this.state.name}
            </td>
            <td scope="col" width="20%" class="text">
              <Col>
                {" "}
                <Select onChange={this.handleChange} options={options} />
              </Col>
            </td>
            <td scope="col" width="20%" class="text-right">
              {this.state.options[this.state.selectedOption].label}
            </td>
          </tr>
        </table>
      );
    }
  }

  class App5 extends React.Component {
    state = {
      name: "peak_write_io_rate",
      selectedOption: 0,
      options: [
        { value: "counter 1", label: "Counter 1" },
        { value: "counter 2", label: "counter 2" },
        { value: "counter 3", label: "counter 3" },
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
            <td scope="col" width="20%" class="text-left">
              {this.state.name}
            </td>
            <td scope="col" width="20%" class="text">
              <Col>
                {" "}
                <Select onChange={this.handleChange} options={options} />
              </Col>
            </td>
            <td scope="col" width="20%" class="text-right">
              {this.state.options[this.state.selectedOption].label}
            </td>
          </tr>
        </table>
      );
    }
  }

  class App6 extends React.Component {
    state = {
      name: "total_read_io_time",
      selectedOption: 0,
      options: [
        { value: "counter 1", label: "Counter 1" },
        { value: "counter 2", label: "counter 2" },
        { value: "counter 3", label: "counter 3" },
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
            <td scope="col" width="20%" class="text-left">
              {this.state.name}
            </td>
            <td scope="col" width="20%" class="text">
              <Col>
                {" "}
                <Select onChange={this.handleChange} options={options} />
              </Col>
            </td>
            <td scope="col" width="20%" class="text-right">
              {this.state.options[this.state.selectedOption].label}
            </td>
          </tr>
        </table>
      );
    }
  }


  class App7 extends React.Component {
    state = {
      name: "total_read_io_bytes",
      selectedOption: 0,
      options: [
        { value: "counter 1", label: "Counter 1" },
        { value: "counter 2", label: "counter 2" },
        { value: "counter 3", label: "counter 3" },
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
            <td scope="col" width="20%" class="text-left">
              {this.state.name}
            </td>
            <td scope="col" width="20%" class="text">
              <Col>
                {" "}
                <Select onChange={this.handleChange} options={options} />
              </Col>
            </td>
            <td scope="col" width="20%" class="text-right">
              {this.state.options[this.state.selectedOption].label}
            </td>
          </tr>
        </table>
      );
    }
  }

  class App8 extends React.Component {
    state = {
      name: "total_write_io_bytes",
      selectedOption: 0,
      options: [
        { value: "counter 1", label: "Counter 1" },
        { value: "counter 2", label: "counter 2" },
        { value: "counter 3", label: "counter 3" },
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
            <td scope="col" width="20%" class="text-left">
              {this.state.name}
            </td>
            <td scope="col" width="20%" class="text">
              <Col>
                {" "}
                <Select onChange={this.handleChange} options={options} />
              </Col>
            </td>
            <td scope="col" width="20%" class="text-right">
              {this.state.options[this.state.selectedOption].label}
            </td>
          </tr>
        </table>
      );
    }
  }

  class App9 extends React.Component {
    state = {
      name: "total_time_metric_based_read_io_count",
      selectedOption: 0,
      options: [
        { value: "counter 1", label: "Counter 1" },
        { value: "counter 2", label: "counter 2" },
        { value: "counter 3", label: "counter 3" },
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
            <td scope="col" width="10%" class="text-left">
              {this.state.name}
            </td>
            <td scope="col" width="20%" class="text">
              <Col>
                {" "}
                <Select onChange={this.handleChange} options={options} />
              </Col>
            </td>
            <td scope="col" width="20%" class="text-right">
              {this.state.options[this.state.selectedOption].label}
            </td>
          </tr>
        </table>
      );
    }
  }

  class App10 extends React.Component {
    state = {
      name: "total_time_metric_based_read_io_bytes",
      selectedOption: 0,
      options: [
        { value: "counter 1", label: "Counter 1" },
        { value: "counter 2", label: "counter 2" },
        { value: "counter 3", label: "counter 3" },
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
            <td scope="col" width="10%" class="text-left">
              {this.state.name}
            </td>
            <td scope="col" width="20%" class="text">
              <Col>
                {" "}
                <Select onChange={this.handleChange} options={options} />
              </Col>
            </td>
            <td scope="col" width="20%" class="text-right">
              {this.state.options[this.state.selectedOption].label}
            </td>
          </tr>
        </table>
      );
    }
  }
export { App1, App2, App3 ,App4,App5,App6,App7,App8,App9,App10};
