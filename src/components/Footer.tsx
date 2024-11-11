//
import React from 'react';
import { Todo } from '../types/Todo';
// import { deleteTodos, updateTodos } from '../api/todos';
import { Status } from './status';

interface Props {
  posts: Todo[];
  // filtered:Todo[];
  filterStatus: (status: Status) => void;
  status: Status;
}

export const FooterPart: React.FC<Props> = ({
  posts,
  filterStatus,
  status,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {posts.filter(value => !value.completed).length} items left
      </span>
      <nav className="filter" data-cy="Filter">
        {Object.values(Status).map(val => (
          <a
            key={val}
            href={`#/${val.toLowerCase()}`}
            className={`filter__link ${status === val ? 'selected' : ''}`}
            data-cy={`FilterLink${val}`}
            onClick={() => filterStatus(val)}
          >
            {val}
          </a>
        ))}
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!posts.find(element => element.completed)}
        // onClick={}
      >
        Clear completed
      </button>
    </footer>
  );
};
