import {box, title, list, to_do, text, buttons, button_green, button_red} from '../css_modules/list.module.css'

const List = ({todos, removeTodo, completeTodo, editTodo1, isEditing, idEdit}) => {

    const edit = {
        backgroundColor: 'whiteSmoke'
    };


    return (
        <div className={box}>
            <h1 className={title}>Lista de Tarefas</h1> 
            <div className={list}>
            {todos.map((todo) => (
                <div 
                className={to_do} key={todo.id}
                style={isEditing && todo.id == idEdit ? edit : null}>
                    <p className={text}>
                    Categoria: {todo.category}
                    </p>
                    <p className={text}>
                    {todo.text}
                    </p>
                    <p className={buttons}>
                        <button onClick={() => completeTodo(todo.id)} 
                        className={button_green}>Finalizar</button>
                        <button onClick={() => editTodo1(todo.id)}
                        className={button_green}>Editar</button>
                        <button onClick={() => removeTodo(todo.id)} 
                        className={button_red}>X</button>
                        {todo.link ? (
                            <a href={todo.link} target='_blank' rel='noopener noreferrer'>
                                Link
                            </a>
                        ) : null }
                    </p>
                </div>
            ))}
            </div>
      </div>
    );
};

export default List;