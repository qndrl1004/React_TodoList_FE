import React, { useState } from "react";

export function TodoList() {
  // useState의 초기 상태를 배열로 변경합니다.
  const [todos, setTodos] = useState([
    {
      id: 123,
      text: "123",
      status: "active",
    },
  ]);

  return (
    <div>
      <ul>
        {todos.map((x) => (
          // 반환되는 요소에 key를 추가하고, 반환 문을 감싸야 합니다.
          <li key={x.id}>{x.text}</li>
        ))}
      </ul>
    </div>
  );
}
