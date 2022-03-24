import {nanoid} from 'nanoid';

export const addTodo = (input) => {
  return {
    type: "ADDTODO",
    payload : {
        id: nanoid(),
        input:input,
    }
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETETODO",
     id
    
  };
};

// export const editTodo = (input,id) => {
//   return {
//     type: "EDITTODO",
//     payload :{
//       input:input,
//       id:id
//     }
    
//   };
// };
