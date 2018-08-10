import { h, Component } from 'preact';
import { observer } from 'mobx-preact';
import cn from 'classnames';

import style from './style.scss';

console.log("Lookie here what CSS module styles we've got:");
console.log(style);

@observer
class Todo extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.onClick(this.props.todo);
  };

  render({ todo }) {
    return (
      <li
        className={cn(
          todo.id % 2 === 0 ? style.todoItemAlt : style.todoItem,
          todo.isCompleted && style.isDone
        )}
        onClick={this.handleClick}
      >
        {todo.description} ({todo.category.name})
        {todo.isCompleted && <i className="icon-energy" />}
      </li>
    );
  }
}

export default Todo;
