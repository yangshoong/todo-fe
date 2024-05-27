import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, deleteTask, updateTask }) => {
  const handleDelete = () => {
    deleteTask(item._id);
  };

  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "completed" : ""}`}>
          <div className="todo-content">{item.task}</div>
          <div>
            <button className="button-delete" onClick={handleDelete}>
              삭제
            </button>
            <button
              className="button-complete"
              onClick={() => updateTask(item._id, !item.isComplete)}
            >
              {item.isComplete ? "취소" : "완료"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;