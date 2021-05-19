import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import h337 from "heatmap.js";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";

function App() {

  useEffect(() => {
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.querySelector('.App')
    });
    // now generate some random data
    var points = [0,0,0,2];
    var max = 0;
    var width = 840;
    var height = 400;
    var len = 200;

    while (len--) {
     var val = Math.floor(Math.random()*100);
     max = Math.max(max, val);
     var point = {
      x: Math.floor(Math.random()*width),
      y: Math.floor(Math.random()*height),
      value: val
     };
     points.push(point);
   }
   // heatmap data format
  var data = {
    max: max,
    data: points
  };
  // if you have a set of datapoints always use setData instead of addData
  // for data initialization
  heatmapInstance.setData(data);
 })
  

  
  return (
    <Layout>
      <Container>


        <br/>
    <div className="App">
      <h1>hi</h1>
    
    </div>
    </Container>
    </Layout>
  );
}

export default App;

