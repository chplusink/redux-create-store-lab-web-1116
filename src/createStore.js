export default function createStore(reducer){
  const store = {}
  let state

  store.getState = function() {
    return state
  }

  store.dispatch = function(action) {
    state = reducer(state, action)
    render()
  }
  store.dispatch({type: 'ARBITRARY'})
  return store

}

function render(){
}
