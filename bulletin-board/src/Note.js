import React,{ Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'
// import './Note.css';
import OptionYes from './yes.svg';
import OptionNo from './no.svg';
import pencil from './pencil.svg';
import remove from './bin.svg'

class Note extends Component{
	constructor(props){
		super(props)
			this.state = {
				Editing : false
			}

			this.editalert=this.editalert.bind(this)
			this.remove=this.remove.bind(this)
			// this.renderForm=this.renderForm.bind(this)
			this.save=this.save.bind(this)
			// this.renderDisplay=this.renderDisplay.bind(this)
			this.randomBetween=this.randomBetween.bind(this);
			this.ondescriptionChange  = this.ondescriptionChange.bind(this);
			this.ontitleChange  = this.ontitleChange.bind(this);
			this.oncompletedChange = this.oncompletedChange.bind(this);

	}
	componentWillMount(){
		// this.style = {
		// 	right: this.randomBetween(0, window.innerWidth - 150, 'px'),
		// 	top: this.randomBetween(0,window.innerHeight - 150, 'px'),
		// 	transform: `rotate(${this.randomBetween(-25,25,'deg')})`
		// }
	}
	
	componentDidUpdate(){
	// var textArea
	// if (this.state.Editing){
	// 	textArea=this._newText
	// 	textArea.focus()
	// 	textArea.select()
	// 	}
	}

	// shouldComponentUpdate(nextProps, nextState){
	// 	return (
	// 		this.state !== nextState || this.props.children!== nextProps.children
	// 	)
	// }
	randomBetween(x,y,s){
		return x + Math.ceil(Math.random() * (y-x)) + s
	}

	editalert(title, description, completed, Editing){
		
		this.setState({Editing:Editing,
			title:title,
			description:description,
			completed: completed
		});
		this.props.toggleedit(Editing);

	}
	remove(){
		this.props.onRemove(this.props.index);
	}

	save(e){
		//alert(this._newText.value)
		//this.setState({Editing:false})
		// e.preventDefault()
		let Editing = false;
		let title = this.state.title;
		let description  = this.state.description;
		let completed = this.state.completed;
		this.props.onChange(title, description, completed, this.props.index);
		this.setState({
			Editing: Editing
		});
		this.props.toggleedit(Editing);
	}
	// renderForm(){
	// 	return(
	// 	<div className="noteoptions">
	// 		<div className="header">
    //             <span className="header_name">{"Update Desscription"}</span> 
	// 		</div>
	// 		<form onSubmit={this.save}>
	// 			<div className = {"title_main"}>
	// 				<span className = {"title"}>Title:</span>
	// 				<input className = {"title_value"} value = {this.props.title}/>
	// 			</div>
	// 			<div className = {"desc_main"}>
	// 				<span className = {"description"}>Description:</span>
	// 				<input className = {"description_value"} ref = {input => this._newText = input } value={this.props.description}/>
	// 			</div>
	// 			<button className = {"save"} id="save"><FaFloppyO/> </button>
	// 		</form>
	// 	</div>)
		
	// }


	// renderDisplay(){
	// 	return(
	// 		<div className="note">
	// 			<span className={"title"}>{this.props.title}</span>
	// 			<span className={"description"}>{this.props.description}</span>
	// 			<span className={"action"}>
					
	// 				<button id="edit" onClick = {this.editalert}><FaPencil/></button>
	// 				<button id="remove" onClick = {this.remove}><FaTrash/> </button>

	// 			</span>
	// 		</div>

	// 		)
	// 	}

	ontitleChange(event){
		if(event){
			let titleinput = event.target.value;
			this.setState({title: titleinput});
		}
	}

	ondescriptionChange(event){
		if(event){
			let descriptioninput = event.target.value;
			this.setState({description: descriptioninput});
		}
	}

	oncompletedChange(){
		let completed = this.state.completed;
		this.setState({completed: !completed});
	}
	render(){
		// console.log(this.props);
		return(
		<div className = {"note_main"}>
			{this.state.Editing && 
				<div className="noteoptions">
					<div className="header">
						<span className="header_name">{"Update Your Note"}</span> 
					</div>
					<div className="body">
						<div className = {"title_main"}>
							<span className = {"title"}>Title:</span>
							<input className = {"title_value"} value = {this.state.title}
								onChange={this.ontitleChange}/>
						</div>
						<div className = {"desc_main"}>
							<span className = {"description"}>Description:</span>
							<input className = {"description_value"} value={this.state.description}
								onChange={this.ondescriptionChange}/>
						</div>
						<div className={"completed_main"}>
							<span className="toggle_check">
								<span className="option_name">Completed: </span>
								<label className="switch">
									<input type="checkbox" checked={this.state.completed} 
										onChange={()=>{this.oncompletedChange()}}/>
									<span className="slider round"></span>
								</label>
							</span>
						</div>
					</div>
					<div className="footer">
						<span className="save" onClick = {() => {this.save()}}>Save</span>
						<span className="clear" onClick = {() => {this.editalert('','', false, false)}}>Cancel</span>
					</div>
			</div>
			}
			{
			<div className="note">
					<span className={"title"}>{this.props.title}</span>
					<span className={"description"}>{this.props.description}</span>
					<div className={"completed_main"}>
						<span className = {"completed"}>Completed</span>
						{this.props.completed ?
							<img className="Option" src={OptionYes} alt="" /> 
							: 
							<img className="Option" src={OptionNo} alt="" />
						}
					</div>
					<span className={"action"}>
						{/* <button id="edit" onClick = {() => {this.editalert(this.props.title, this.props.description, this.props.completed, true)}}><FaPencil/></button> */}
						<img className="edit" onClick = {() => {this.editalert(this.props.title, this.props.description, this.props.completed, true)}} 
							src={pencil} alt="" /> 
						<img className="remove"  onClick = {this.remove} src={remove} alt="" />
						{/* <button id="remove" onClick = {this.remove}><FaTrash/> </button> */}
					</span>
			</div>
			}
		</div>
		)
	}
		
}

export default Note
