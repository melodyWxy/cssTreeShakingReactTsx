import * as React from "react";
import * as ReactDOM from "react-dom";
import { Icon } from './components/Icon/index';  
import "./index.css";

function Test (){
    return (
      <div
        className="test-wrap"
        style={{ width: "300px", height: "300px", background: "#ddd" }}
      >
        <Icon style={{ background: "#ee0", margin: "20px 20px" }} />
        <Icon style={{ background: "#0e0", marginRight: "20px" }} spin={true} />
        <Icon style={{ background: "#00e" }} rotate={45} />
        <br />
        <Icon
          style={{ background: "#00e", marginRight: "20px" }}
          rotate={45}
          spin={true}
        />
        <Icon
          className= "xixi"
          style={{ background: "#00e", marginRight: "20px" }}
          rotate={45}
          spin={true}
        />
      </div>
    );
}

ReactDOM.render(<Test />, document.getElementById("example"));