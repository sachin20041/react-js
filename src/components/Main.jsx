import React from "react";

const Main = () => {
  return (
    <div>
      <center>
        <br></br>
        <label for="name">Email Id: &emsp;</label>
        <input id="name" type="box" placeholder="Email ID"></input>
        <br></br>
        <br></br>
        <label for="na">Password: &emsp;</label>
        <input id="na" type="Password" placeholder="Password"></input>
        <br></br>
        <br></br>
        <label for="Feedback">Feedback: &emsp;</label>
        <textarea id="Feedback" name="Feedback" rows="4" cols="50"></textarea>
        <br></br>
        <br></br>
        <button>Submit</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </center>
    </div>
  );
};

export default Main;