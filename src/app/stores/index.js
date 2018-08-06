import { configure } from 'mobx';
configure({ enforceActions: true });

import TodoStore from './TodoStore';
import TodoCategoryStore from './TodoCategoryStore';

class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.todoCategoryStore = new TodoCategoryStore(this);
  }
}

const rootStore = new RootStore();

export { rootStore };
