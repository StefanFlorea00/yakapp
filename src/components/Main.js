import React from "react";
import ListContainer from "./ListContainer";
export default function Main(props) {
  const todoList = props.cards.filter((c) => c.list === "todo");
  const doingList = props.cards.filter((c) => c.list === "doing");
  const doneList = props.cards.filter((c) => c.list === "done");
  return (
    <main>
      <ListContainer cardAdded={props.cardAdded} cards={todoList} message={props.message} showForm={true} name="Todo" />
      <ListContainer cardAdded={props.cardAdded} cards={doingList} message={props.message} name="Doing" />
      <ListContainer cardAdded={props.cardAdded} cards={doneList} message={props.message} name="Done" />
    </main>
  );
}
