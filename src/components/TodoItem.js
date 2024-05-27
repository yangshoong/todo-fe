import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, deleteTask, updateTask }) => {
  const handleComplete = () => {
    updateTask(item._id, !item.isComplete);
  };

  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "completed" : ""}`}>
          <div className="todo-content">{item.task}</div>
          <div>
            <button className="button-delete" onClick={() => deleteTask(item._id)}>
              삭제
            </button>
            <button className="button-complete" onClick={handleComplete}>
              {item.isComplete ? "취소" : "완료"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;