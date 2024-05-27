import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import api from "./utils/api";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const getTasks = async () => {
    try {
      const response = await api.get('/tasks');
      console.log("Data fetched: ", response);
      setTodoList(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const addTask = async () => {
    try {
      const response = await api.post('/tasks', {
        task: todoValue,
        isComplete: false,
      });
      if (response.status === 200 || response.status === 201) {
        console.log("성공");
        setTodoValue("");
        await getTasks();
      } else {
        throw new Error('task can not be added')
      }
    } catch (err) {
      console.log("error", err);
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        console.log("삭제 성공");
        await getTasks();
      } else {
        throw new Error('task can not be deleted');
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const updateTask = async (id, isComplete) => {
    try {
      const response = await api.put(`/tasks/${id}`, { isComplete });
      if (response.status === 200) {
        console.log("업데이트 성공");
        await getTasks();
      } else {
        throw new Error('task can not be updated');
      }
    } catch (err) {
      console.log("error", err);
    }
  };



  useEffect(() => {
    getTasks();
  }, [])


  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="input-box"
            value={todoValue}
            onChange={(event) => setTodoValue(event.target.value)}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add" onClick={addTask}>추가</button>
        </Col>
      </Row>

      <TodoBoard todoList={todoList} deleteTask={deleteTask} updateTask={updateTask} />
    </Container>
  );
}

export default App;
