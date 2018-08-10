import { h, render } from 'preact';
import { Provider } from 'mobx-preact';

import '@styles/main';

import App from '@app/App';

import { rootStore } from '@app/stores';

/*eslint-disable */
if (module.hot || process.env.NODE_ENV === 'development') {
  require('preact/debug');
}
/*eslint-enable */

const container = document.body;

// REVIEW: https://github.com/developit/preact/issues/24
render(
  <Provider
    todoStore={rootStore.todoStore}
    todoCategoryStore={rootStore.todoCategoryStore}
  >
    <App />
  </Provider>,
  container,
  container.lastElementChild
);
