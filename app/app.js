import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Uri from './components/Uri'
class App extends Component{
	constructor(props) {
        super(props);
        
        this.state = {
            current_path: "/"
        }

        this.props.history.listen((location, action) => {
            this.setState((state) => ({
               current_path: location.pathname
            }))
        })
    }

    componentDidMount() {
        const {pathname} = this.props.location
        
        this.setState({
            current_path: pathname
        })
	}
	
	header() {
		return (
			<div className="header">
				<div className="headNumber">
					<div className="headText">CENTER</div> 
					<div className="headerData">090912</div>
					<div className="headTextSmall borderDiv">OFFICER 12312</div>
				</div>
				<div className="headNumberRight">
					<div className="headTextRight">00;30;31;45</div>
				</div>
			</div>
		)
	}

	leftPanel() {
		return (
			<div className="leftSection">
				<div className="leftTop"> 
				<div className="arrowbar"> </div>      
				</div>
				<div className="leftNav">
					<ul className="menu">
						<li className={(this.state.current_path == '/' ? 'active' : '')}><Link to="/"><span className="icon" ></span></Link></li>
						<li className={(this.state.current_path == '/center' ? 'active' : '')}><Link to="/center"><span className="icon"></span></Link></li>
						<li className={(this.state.current_path == '/officer' ? 'active' : '')}><Link to="/officer"><span className="icon"></span></Link></li>
					</ul>
				</div>
			</div>
		)
	}

	footer() {
		return null
	}
    render(){
        return(
            <div>
				{this.leftPanel()}
				<div className="rightSection">
					{this.header()}
					<Uri />
                </div>
            </div>
        )
    }
}

export default withRouter(App)