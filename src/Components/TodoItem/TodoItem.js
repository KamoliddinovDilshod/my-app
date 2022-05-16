import Btn from "../Buttons/Button";
import Todos from "../Todo/Todo";
import "./main.css";

const TodoItem = ({
  title,
  isComplate,
  handleComplate,
  deleteBtn,
  id,
  textarea,
}) => {
  return (
    <details className='task' key={id}>
      <summary className={isComplate ? "task__complate" : "task__title"}>
        {title}
      </summary>
      <div className='task__box'>
        <div className='task__packet'>
          <input
            className='task__input'
            type='checkbox'
            checked={isComplate}
            onChange={handleComplate}
            data-todo-id={id}
          />
          <strong className={isComplate ? "task__complate" : "task__subtitle"}>
            {title}
          </strong>
        </div>
        <div className='task__trunk'>
          <textarea
            className='task__textarea'
            cols='45'
            rows='10'
            placeholder='Entry your idea...'></textarea>
          <button
            className='task__delatebtn'
            onClick={deleteBtn}
            data-todo-id={id}>
            Delete
          </button>
          {/* <div className='btn__packet'>
            <Btn title='I' color='red' textcolor='green' />
            <Btn title='II' color='yellow' textcolor='black' />
            <Btn title='III' color='green' textcolor='red' />
          </div> */}
        </div>
      </div>
      <hr />
    </details>
  );
};

export default TodoItem;
