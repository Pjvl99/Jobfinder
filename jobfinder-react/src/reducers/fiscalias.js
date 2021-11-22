
const fiscaliasReducer = (state, action) => { //reducer de la lista de fiscalias, el estado es definido por la accion
    switch(action.type){
      case 'POPULATE_FISCALIA':
        return action.fiscalias
      case 'ADD_FISCALIA':
        return [
          ...state,
          action.fiscalia
        ]
      case 'REMOVE_FISCALIA':
        return state.filter((fiscalia) => fiscalia.id !== action.id)
      default:
        return state
    }
  }

  export {fiscaliasReducer as default}