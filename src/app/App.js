import { h, Component } from 'preact';

class App extends Component {
  render() {
    return (
      <div id="foo">
        <span>Hello, world!</span>
        <button onClick={_e => alert('hi!')}>Click Me</button>
      </div>
    );
  }
}

export default App;
