import React,{ Component } from 'react'
	class Toggle extends Component{
		constructor(props){
			super(props);
			this.state = {istoggleon: true }
			this.handle=this.handle.bind(this)
		}

        handle(){
            this.setState(prevState=>({
                istoggleon : !prevState.istoggleon}
            )
            )
		}
		
		render(){ 
			return(
				<div>
					<button onClick={this.handle}> {this.state.istoggleon ? 'ON' : 'OFF' }</button>
				</div>

			)

		}
	}	

export default Toggle