import { useState } from 'react'
import {box2, title, to_do_form, input, select, button} from '../css_modules/edit.module.css'

const Edit = ({isEditing, idEdit, editTodo1, editTodo2}) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("")
  const [category, setCategory] = useState("")

  const handleName = (e) => {
    e.preventDefault();
    if (!name || !isEditing) return;
    editTodo2(idEdit, 'text', name); // 'text' representa a propriedade a ser atualizada
    editTodo1(idEdit)
    setName("");
  };
  
  const handleLink = (e) => {
    e.preventDefault();
    if (!link || !isEditing) return;
    editTodo2(idEdit, 'link', link); // 'link' representa a propriedade a ser atualizada
    editTodo1(idEdit)
    setLink("");
  };
  
  const handleCategory = (e) => {
    e.preventDefault();
    if (!category || !isEditing) return;
    editTodo2(idEdit, 'category', category); // 'category' representa a propriedade a ser atualizada
    editTodo1(idEdit)
    setCategory("");
  };

  return (
    <div className={box2}>
        <h1 className={title}>Editar Tarefa</h1>
        <div className={to_do_form}>
            <form onSubmit={handleName}>
                <input className={input} type="text" 
                placeholder='Digite o novo título' value={name}
                onChange={(e) => setName(e.target.value)}/>
                <button className={button} type='submit'>Confirmar</button>
            </form>
            <form onSubmit={handleLink}>
                <input className={input} type="text" 
                placeholder='Digite o novo link' value={link}
                onChange={(e) => setLink(e.target.value)}/>
                <button className={button} type='submit'>Confirmar</button>
            </form>
            <form onSubmit={handleCategory}>
                <select className={select} value={category}
                onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Mudar de categoria</option>
                    <option value="Computacao">Computação</option>
                    <option value="Dev">Dev</option>
                    <option value="Outros">Outros</option>
                </select>
                <button className={button} type='submit'>Confirmar</button>
            </form>
        </div>
    </div>
  )
}

export default Edit