import { h, render } from 'preact';

import App from '@app/App';

if (module.hot) {
  require('preact/debug');
}

const container = document.body;

// REVIEW: https://github.com/developit/preact/issues/24
render(<App />, container, container.lastElementChild);
