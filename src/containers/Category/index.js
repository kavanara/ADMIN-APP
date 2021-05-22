import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import h337 from "heatmap.js";
import Layout from "../../components/Layout";
import { Container ,Button} from "react-bootstrap";



class App extends React.Component {
  state = { count:0};
  
  increment = () => {
    this.setState({ count : this.state.count+1});

  }
  
  

  
render(){
  return (

    <Layout>
      <Container>


       
       <div className="App">
           <h1>hi</h1>
            {this.state.count}
            
        </div>
        <button onClick={this.increment}>Incrmenet by 1</button>
      </Container>
    </Layout>
  )
 }
}


// class App extends React.Component {

//   state = { count: 0 }
  
//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 })
//   }
  
//   handleDecrement = () => {
//     this.setState({ count: this.state.count - 1 })
//   }
//     render() {
//       return (
//         <div>
//           <div>
//             {this.state.count}
//           </div>
//           <button onClick={this.handleIncrement}>Increment by 1</button>
//           <button onClick={this.handleDecrement}>Decrement by 1</button>
//         </div>
//       )
//     }
//   }
export default App;

