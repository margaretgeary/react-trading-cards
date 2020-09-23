"use strict";

function Homepage() {
  return (
    <div>
      <h2>Welcome!</h2>
      <a href="/cards">Click here!</a>
      <img src="static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
