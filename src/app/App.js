import { h, Component } from 'preact';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Lorem from '@app/scenes/Lorem';
import Todos from '@app/scenes/Todos';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="foo">
          <div>
            <span>Hello, world!</span>
            <button onClick={_e => alert('hi!')}>Click Me</button>
          </div>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/lorem">lorem</Link>
            </li>
            <li>
              <Link to="/todos">todos</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/lorem" component={Lorem} />
            <Route path="/todos" component={Todos} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
