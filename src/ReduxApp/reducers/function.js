const initialState = {
  list: [],
};
// console.log(list);
const Function = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { id, input } = action.payload;
    //   console.log(state.list);
    // console.log(id,Input);
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            input: input,
          },
        ],
        
      };
      
    case "DELETETODO":
      const newList = state.list.filter((ele) => ele.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "EDITTODO":
      const upDateItem = [...state.list].map((ele) => {
        if (ele.id === action.payload.edit.edit) {
            console.log('matched')
            return {
                ...ele,
                input: action.payload.input.input
            }
        } else {
            return ele
        }
      });
      console.log('edittodo', upDateItem)
      return {
          ...state,
          list: upDateItem
      };

    default:
      return state;
  }
};

export default Function;
