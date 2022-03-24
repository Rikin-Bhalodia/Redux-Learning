//With Redux


import React, { useState, useMemo } from "react";
import { addTodo, deleteTodo, editTodo } from "./ReduxApp/action/index";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const NewApp = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.Function.list);
  console.log(list);

  const [search, setSearch] = useState("");
  const [toggleItem, setToggleItem] = useState(true);
  const [edit, setEdit] = useState(null);

  const searchData = useMemo(() => {
    if (!search) return list;

    return list.filter((ele) => {
      return ele.input.toLowerCase().includes(search.toLocaleLowerCase());
    });
  }, [search, list]);

  const editData = (id) => {
    const newEditItem = list.find((el) => {
      return el.id === id;
    });

    setEdit(id);
    setToggleItem(false);
    setInput(newEditItem.input);
  };

  const editHandler = () => {
    dispatch(
      { type: "EDITTODO", payload: { edit: { edit }, input: { input } } },
      setInput("")
    );
    setToggleItem(true);
  };
  return (
    <>
      <div>newApp</div>
      <div>
        <input
          type="text"
          placeholder="search the data"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <input
          type="text"
          placeholder="enter the data"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        {toggleItem ? (
          <button onClick={() => dispatch(addTodo(input), setInput(""))}>
            Add
          </button>
        ) : (
          <button onClick={editHandler}>Edit</button>
        )}
      </div>

      {searchData?.map((ele) => {
        return (
          <div key={ele.id} id={ele.id}>
            <h3>{ele.input}</h3>
            <button onClick={() => dispatch(deleteTodo(ele.id))}>delete</button>

            <button onClick={() => editData(ele.id)}>edit</button>
          </div>
        );
      })}
    </>
  );
};

export default NewApp;
