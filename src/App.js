// Without Redux


import React, { useState, useMemo } from "react";
// import Todolist from "./todolist";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [add, setAdd] = useState([]);
  const [edit, setEdit] = useState(null);
  const [toggleItem, setToggleItem] = useState(true);
  const [search, setSearch] = useState("");

  const searchData = useMemo(() => {
    if (!search) return add;

    return add.filter((ele) => {
      return ele.name.toLowerCase().includes(search.toLocaleLowerCase());
    });
  }, [search, add]);


  const inputEvent = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  const addData = () => {
    if (!input) {
      alert("please fill the data");
    } else if (input && !toggleItem) {
      setAdd(
        add.map((ele) => {
          if (ele.id === edit) {
            return { ...ele, name: input };
          }
          return ele;
        })
      );
      setEdit(null);
      setToggleItem(true);
      setInput("");
    } else {
      const allInputs = { id: nanoid(), name: input };
      setAdd([...add, allInputs]);

      setInput("");
      setToggleItem(true);
    }
  };

  const sortData = () => {
    const sortData = [...add].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setAdd(sortData);
  };

  const sortRevData = () => {
    const sortRevData = [...add].sort((a, b) => {
      return a.name < b.name ? 1 : -1;
    });
    setAdd(sortRevData);
  };

  const deleteData = (id) => {
    // console.log("deleted");
    setAdd((olditem) => {
      return olditem.filter((ele, ) => {
        return ele.id !== id;
      });
    });
  };

  const editData = (id) => {
    const editItem = add.find((ele, ) => {
      return ele.id === id;
    });
    console.log(editItem);
    setEdit(id);
    setToggleItem(false);
    setInput(editItem.name);
  };
  return (
    <>
      <div className="todo1">
        <div className="todo2">
          <div className="todo">TO DO LIST</div>

          <div className="input">
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
              onChange={inputEvent}
              name="input"
              value={input}
              rules={[
                {
                  required: true,
                  message: "please enter a data",
                },
              ]}
            />
            {toggleItem ? (
              <button onClick={addData} className="sort">
                ADD
              </button>
            ) : (
              <button onClick={addData} className="sort">
                Edit
              </button>
            )}

            <button
              onClick={() => {
                sortData();
              }}
              className="sort"
            >
              sortData
            </button>
            <button
              onClick={() => {
                sortRevData();
              }}
              className="sort"
            >
              sort Reversed Data
            </button>
          </div>

          <ul>
            {searchData?.map((e) => {
              return (

                <div   key={e.id}  id={e.id}>

{e.name}
<button onClick={()=>{deleteData(e.id)}}>delete</button>
<button onClick={()=>{editData(e.id)}}>Edit</button>
</div>
             
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
