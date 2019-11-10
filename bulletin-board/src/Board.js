import React, {Component} from 'react'
import Note from './Note'
// import FaPlus from 'react-icons/lib/fa/plus'
import axios from 'axios';
// import './Board.css';
import Add from './plus.svg';
import Notifications, {notify} from 'react-notify-toast';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import { createStore } from "redux";
import notesApp from "./reducers";
import {notes} from "./actions";

let store = createStore(notesApp);

class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            notes:[],
            editflag:false
        }
        this.update=this.update.bind(this);
        this.remove=this.remove.bind(this);
        this.add=this.add.bind(this);
        // this.nextID=this.nextID.bind(this);
        this.getList = this.getList.bind(this);
        this.toggleedit = this.toggleedit.bind(this);
    }

    // componentWillMount(){
    //     var self=this
    // }

    componentDidMount(){
        this.getList();
    }

    getList(){
        let thisView = this;
        axios
          .get("http://localhost:8000/api/todos/")
          .then(function(res){
                // console.log(res);
                if(res && res.data){
                    thisView.setState({ notes: res.data });
                }
                thisView.setState({ todoList: res.data });
          }
        )
        .catch(err => console.log(err));
    }

    add(text){
        let thisView = this;
        let item = {
            title: 'Add Title',
            description:"Add Description",
            completed:false
        };

        axios.post("http://localhost:8000/api/todos/", item)
        .then(function(res){
            let myColor = { background: '#77ab59', text: "#FFFFFF" };
            notify.show("New Todo Note Added", "custom", 2000, myColor);
            thisView.props.addNote(item);
            thisView.getList();
        })
        .catch(err => console.log(err));

    }
    remove(id){
        let thisView = this;
        axios.delete(`http://localhost:8000/api/todos/${id}`)
        .then(function(res){
            thisView.props.deleteNote(id);
            let myColor = { background: '#77ab59', text: "#FFFFFF" };
            notify.show("Todo Note Deleted", "custom", 2000, myColor);
            thisView.getList();
        })
        .catch(err => console.log(err));

    }
    

    update(title, description,completed, i){
        let thisView = this;
        console.log('Updating i=' ,i, title, description,completed);
        let item = {
            title: title,
            description:description,
            completed:completed

        };

        axios.put(`http://localhost:8000/api/todos/${i}/`, item)
        .then(function(res){
            thisView.props.updateNote(i, item);
            thisView.getList();
        })
        .catch(err => console.log(err));
    }

    toggleedit(editflag){

        this.setState({editflag: editflag});
    }

    render(){
        return(
            <div className={"board "+ (this.state.editflag ? "edit": "")}>
             <Notifications options={{zIndex: 1, top: '40px'}} />
                <div className={"header"}>
                    <span className="header_name">{"Todo Notes"}</span> 
                </div>
                <div className={"board_body"}>
                    {this.state.notes.map((note)=>{
                    return(
                        <Note key={note.id}
                                description = {note.description}
                                title = {note.title}
                                completed = {note.completed}
                                index={note.id}
                                onChange = {this.update}
                                onRemove ={this.remove}
                                toggleedit = {this.toggleedit}>
                            
                        </Note>
                        )  
                    })}
                </div>

            <img onClick={this.add.bind(null,'New Note')} className="Add" src={Add} alt="" /> 
            {/* <img onClick={this.add.bind(null,'New Note')} id='add' ><FaPlus/></button> */}
                   
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      notes: state.notes,
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      addNote: (eachnote) => {
        dispatch(notes.addNote(eachnote));
      },
      updateNote: (id, eachnote) => {
        dispatch(notes.addNote(id, eachnote));
      },
      deleteNote: (id) => {
        dispatch(notes.deleteNote(id));
      },
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Board);

// export default Board