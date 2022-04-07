import { createContext, useReducer } from 'react';

//Creates new state object based on the action it receives
const AppReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expense : [
    { id: 12, name: 'shopping', cost: 40},
    { id: 13, name: 'holiday', cost: 400}
  ]
};

//Context allows passing down props deep down the component tree
//without the need to pass props manually at every level.
export const AppContext = createContext();

//The child component is able to use get the required props from the nearest 
//provider up in the tree using context. Provider wraps certain components 
//which needs access to certain state values.
//AppProvider holds the state needed to pass to certain components 
//using the useRecuder hook.
//useRecuder is preferable to useState when we have complex state
//logic that involves multiple sub-values or when the nest state
//depends on prev state. You pass dispatch actions(to update) down instead of callbacks. 

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return(<AppContext.Provider value={{
    budget: state.budget,
    expenses: state.expenses,
    dispatch
  }}>
    {props.children}
  </AppContext.Provider>)
};