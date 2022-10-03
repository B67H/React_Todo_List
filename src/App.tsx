import "./App.css";
import Divider from "./Divider/Divider";
import TodoHeader from "./Header/TodoHeader";
import TodoInput from "./Input/TodoInput";
import TodoListTools from "./Tools/TodoListTools";
import TodoList from "./List/TodoList";
import { useState } from "react";
import TodoListArea from "./List/TodoListArea";

export type TodoType = {
  id: number;
  text: string;
  isChecked: boolean;
};

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]); // todos 하나하나가 TodoType의 형태를 가진다

  const handleSubmit = () => {
    if(!text) {
      return
    }

    const newTodos = todos.concat({
      id: Date.now(),
      text: text,
      isChecked: false,
    });
    setTodos(newTodos);
    setText("");
  };

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleToggle = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const isTodoAllChecked = () => {
    return todos.every((todo) => todo.isChecked);
  };

  const handleRemove = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id; // 제거버튼을 누른 todo 항목의 id와 대조하여 다른 id를 가진 todo들만 남긴다
    });

    setTodos(newTodos);
  };

  const handleToggleAllClick = () => {
    const isAllChecked = isTodoAllChecked();
    const newTodos = todos.map((todo) => {
      return {
        ...todo,
        isChecked: !isAllChecked,
      };
    });

    setTodos(newTodos);
  };

  const handleRemoveAllClick = () => {
    setTodos([]);
  };

  return (
    <main className="App">
      <TodoHeader count={todos.filter((todo) => !todo.isChecked).length} />
      <TodoInput
        text={text}
        onSubmit={handleSubmit}
        onTextChange={handleTextChange}
      />
      <TodoListArea todoCount={todos.length}>
        <TodoListTools
          isAllChecked={isTodoAllChecked()}
          onToggleAllClick={handleToggleAllClick}
          onRemoveAllClick={handleRemoveAllClick}
        />
        <Divider />
        <TodoList
          todos={todos}
          onToggleClick={handleToggle}
          onRemoveClick={handleRemove}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
