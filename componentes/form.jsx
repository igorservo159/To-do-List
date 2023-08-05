import { useState } from 'react'
import {box1, title, to_do_form, input, select, button} from '../css_modules/form.module.css'

const Form = ({addTodo}) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("")
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !category) return;
    addTodo(name, link, category);
    setName("")
    setLink("")
    setCategory("")
  };

  return (
    <div className={box1}>
        <h1 className={title}>Criar Tarefa</h1>
        <div className={to_do_form}>
            <form onSubmit={handleSubmit}>
                <input className={input} type="text" 
                placeholder='Digite o título' value={name}
                onChange={(e) => setName(e.target.value)}/>
                <input className={input} type="text" 
                placeholder='Digite o link' value={link}
                onChange={(e) => setLink(e.target.value)}/>
                <select className={select} value={category}
                onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
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

export default Form