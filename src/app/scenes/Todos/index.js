import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';

import Todo from './components/Todo';

@inject('todoStore', 'todoCategoryStore')
@observer
class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoForm: {
        description: '',
        category: props.todoCategoryStore.defaultCategory,
      },
    };
  }

  handleTodoFormSubmit = e => {
    e.preventDefault();

    if (
      Object.values(this.state.todoForm).filter(Boolean).length !==
      Object.keys(this.state.todoForm).length
    ) {
      return;
    }

    this.props.todoStore.addTodo(this.state.todoForm);
    this.resetTodoForm();
  };

  handleInputChange = e => {
    this.setState(({ todoForm }) => ({
      todoForm: { ...todoForm, [e.target.name]: e.target.value },
    }));
  };

  handleTodoCategoryChange = e => {
    const { todoCategoryStore } = this.props;

    this.setState(({ todoForm }) => ({
      todoForm: {
        ...todoForm,
        [e.target.name]: todoCategoryStore.categories.find(
          ({ name }) => name === e.target.value
        ),
      },
    }));
  };

  resetTodoForm = () =>
    this.setState({
      todoForm: {
        description: '',
        category: this.props.todoCategoryStore.defaultCategory,
      },
    });

  render({ todoStore, todoCategoryStore }, { todoForm }) {
    return (
      <article>
        <h2>Todos Scene ({todoStore.todoCount})</h2>

        <form onSubmit={this.handleTodoFormSubmit}>
          <input
            type="text"
            placeholder="Todo description"
            value={todoForm.description}
            name="description"
            onChange={this.handleInputChange}
          />
          <select
            name="category"
            value={todoForm.category.name}
            onChange={this.handleTodoCategoryChange}
          >
            {todoCategoryStore.categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <button type="submit">
            <i className="icon-plus" /> Add Todo
          </button>
        </form>

        <hr />

        <div>
          <b>Filters:</b>
          {todoCategoryStore.categories.map(category => (
            <label key={category.id}>
              <input
                type="checkbox"
                value={category.name}
                checked={todoCategoryStore.activeFilters.includes(category)}
                onClick={_e => {
                  todoCategoryStore.toggleCategoryFilter(category);
                }}
              />
              {category.name}
            </label>
          ))}
        </div>

        <ul>
          {todoStore.filteredTodos.map(todo => (
            <Todo key={todo.id} todo={todo} onClick={todoStore.completeTodo} />
          ))}
        </ul>
      </article>
    );
  }
}

export default Todos;
