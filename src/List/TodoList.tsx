import TodoItem from '../ListItem/TodoItem'
import styles from './TodoList.module.css'

const TodoList = () => {
  const arr = ['Reece' , 'Mason', 'Thiago', 'Conor', 'Ruben']

  return (
    <section>
      <ol className={styles.olContainer}>
        {arr.map((str, idx) => {
          return <TodoItem key={`${str}_${idx}`} text={str}/>
        })}
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </section>
  )
}

export default TodoList