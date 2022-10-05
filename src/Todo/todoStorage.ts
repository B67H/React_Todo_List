import { TodoType } from "./todoReducer";

export const saveTodos = (todos: TodoType[]) => {
  // 로컬스토리지에는 string형식으로 저장해야함
  localStorage.setItem("todos", JSON.stringify(todos)); // 따라서 객체를 stringify해주어야 한다
};

export const loadTodos = () => {
  const todoJson = localStorage.getItem("todos");

  if (!todoJson) {
    return [];
  }

  try {
    return JSON.parse(todoJson); // 저장한 string 다시 객체화 (실패 가능하므로 try&catch 사용)
  } catch (e) {
    console.error(e);
    return [];
  }
};
