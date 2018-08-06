import { h, Component } from 'preact';
import { observer } from 'mobx-preact';

@observer
class Todo extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.onClick(this.props.todo);
  };

  render({ todo }) {
    return (
      <li onClick={this.handleClick}>
        {todo.description} ({todo.category.name})
        {todo.isCompleted && <i className="icon-energy" />}
      </li>
    );
  }
}

export default Todo;
