import { useEffect, useRef, useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  // title: string;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");
  const idRef = useRef(0);

  const onChangeTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const onClickAddTodo = () => {
    setTodos([...todos, { id: idRef.current++, content: inputText }]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <input value={inputText} onChange={onChangeTodoInput} />
      <button onClick={onClickAddTodo}> add</button>
    </div>
  );
}

export default App;
