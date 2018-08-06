import { observable, computed, action } from 'mobx';

class TodoStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable
  todos = [
    {
      id: 0,
      description: 'Lorem ipsum dolor et sit amet',
      category: this.rootStore.todoCategoryStore.defaultCategory,
      isCompleted: false,
    },
  ];

  @action
  addTodo = todo =>
    this.todos.push({ ...todo, id: this.todoCount, isCompleted: false });

  @action
  completeTodo = completedTodo => {
    const todo = this.todos.find(todo => todo === completedTodo);

    if (!todo) {
      return;
    }

    todo.isCompleted = !todo.isCompleted;
  };

  @computed
  get todoCount() {
    return this.todos.length;
  }

  @computed
  get filteredTodos() {
    const { todoCategoryStore } = this.rootStore;

    if (todoCategoryStore.activeFilters.length === 0) {
      return this.todos;
    }

    return this.todos.filter(todo =>
      todoCategoryStore.activeFilters.includes(todo.category)
    );
  }
}

export default TodoStore;
