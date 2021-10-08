import React from 'react';


var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "0px",
    margintop:"50px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var plain = {
  display: "block",
  padding: "20px",
  height: "20px",
  width: "100%",
}

function footer(props) {
    return (
        <div>
            <div style={plain} />
            <div style={style}>
               <p>Mentor: Marc Faggion</p>
               <p>Mentee: Alice Shen</p>
            </div>
        </div>
    );
}

export default footer;