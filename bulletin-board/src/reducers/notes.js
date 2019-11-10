// const initialState = [
//     {text: "Write code!"}
//   ];
  
const initialState = [
    
];


export default function notes(state=initialState, action) {
    let noteList = state;
    let newnotelist = [];
    console.log(action);
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, action.eachnote];

        case 'UPDATE_NOTE':
            let updatednote = action.eachnote;
            newnotelist = noteList.map((onenote)=>{
                if(action.id===onenote.id){
                    onenote = updatednote;
                }
                return onenote;
            });

            return newnotelist;

        case 'DELETE_NOTE':
            newnotelist = noteList.map((onenote)=>{
                if(action.id!==onenote.id){
                    onenote = updatednote;
                    return onenote;
                }
            });

            return newnotelist;

        default:
            return state;
    }
}