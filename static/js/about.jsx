"use strict";

function About() {
  return (
    <div>
      <h2>About the Author!</h2>
      <img src="static/img/seedpy.jpg"></img>
    </div>
  );
}

ReactDOM.render(<About />, document.querySelector('#authors'));