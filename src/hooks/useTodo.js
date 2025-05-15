import { ref } from "vue";

const useTodo = () => {
  const todos = ref([
    { id: 1, title: "タイトル01", done: true },
    { id: 2, title: "タイトル02", done: false },
    { id: 3, title: "タイトル03", done: false },
  ]);

  const newTodo = ref("");

  const addTodo = () => {
    if (!validate()) {
      return;
    }
    const todo = {
      id: todos.value.length + 1,
      title: newTodo.value,
      done: false,
    };
    todos.value.push(todo);
    newTodo.value = "";
  };

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
    // todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const toggleTodo = (id) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  };

  const validate = () => {
    if (newTodo.value.trim() === "") {
      alert("タスクを入力してください");
      return false;
    }
    return true;
  };

  return {
    todos,
    newTodo,
    addTodo,
    deleteTodo,
    toggleTodo,
    validate,
  };
};

export default useTodo;
