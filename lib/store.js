// create a store with initial values
let store = {
  center: [40.01, -105.25], // Boulder
  selectedPosition: null,
  selectedPosition2: null,
  fibers: [],
  fibers2: [],
  rivers: [],
  rivers2: []
}

// make it a global variable (easy for debugging in the developer's console)
global.store = store

// export it
export default store
