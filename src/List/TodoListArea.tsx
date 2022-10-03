import { ReactNode } from "react";

// HOC : High Order Component

interface TodoListAreaProps {
  children: ReactNode;
  todoCount : number
}

const TodoListArea = (props: TodoListAreaProps) => {
  if(props.todoCount < 1) {
    return null
  }

  return <>{props.children}</>;
};

export default TodoListArea;
