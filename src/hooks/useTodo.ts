import { onMounted, ref } from "vue";

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export default function useTodo() {
  const todos = ref<Todo[]>([]);

  const newTodo = ref("");
  const SESSION_STORAGE_KEY = "todos";

  onMounted(() => {
    loadTodosFromSessionStorage();
  });

  const loadTodosFromSessionStorage = () => {
    const storedTodos = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (storedTodos) {
      todos.value = JSON.parse(storedTodos);
    }
  };

  const saveTodosToSessionStorage = () => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(todos.value));
  };

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
    saveTodosToSessionStorage();
  };

  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
    saveTodosToSessionStorage();
  };

  const toggleTodo = (id: number) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
    saveTodosToSessionStorage();
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
  };
}
