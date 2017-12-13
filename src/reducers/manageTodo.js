// reducer- as arguments: default state is empty array; action is passed when called:
// index.js calls store.dispatch({type: '@@INIT'})
//  in index.js, store variable is declared = createStore(manageTodo)
//  in createStore.js, createStore takes reducer function as argument and returns dispatch and getState


export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo) }
    default:
      return state;
  }
}
