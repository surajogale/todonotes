export const addNote = eachnote => {
    return {
      type: 'ADD_NOTE',
      eachnote
    }
}
  
export const updateNote = (id, eachnote) => {
    return {
      type: 'UPDATE_NOTE',
      id,
      eachnote
    }
}
  
export const deleteNote = id => {
    return {
      type: 'DELETE_NOTE',
      id
    }
}