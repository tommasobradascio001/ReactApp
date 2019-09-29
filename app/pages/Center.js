import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://d2wlwsqa344wg5.cloudfront.net/images/workStation.svg',
  'https://d2wlwsqa344wg5.cloudfront.net/images/workStation.svg',
  'https://d2wlwsqa344wg5.cloudfront.net/images/workStation.svg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
class Center extends Component{
    render() {
        return (
            <div className="mainContent">
                <div className="leftContent">
                    <div className="dataBox padding-right-0">
                        <h2 className="marginBottom">ID C-003412452</h2>
                        <div className="dataContent noFixHeight">
                            <div className="userData ">
                                <ul className="actions">
                                    <li  className="active">
                                        <div className="userAction">
                                        	Entrance
                                        </div>
                                        <div className="playBtn">                                            
                                        </div>
                                        <div className="time">	
                                            1min											
                                        </div>
                                        <div className="duration">
                                            -05%											
                                        </div>
                                        <div className="pictue">
                                            <div className="blankPic"></div>												
                                        </div>
                                    </li>
                                    <li>
                                        <div className="userAction">
                                        	waiting
                                        </div>
                                        <div className="playBtn">                                            
                                        </div>
                                        <div className="time">	
                                            3min											
                                        </div>
                                        <div className="duration">
                                            50%										
                                        </div>
                                        <div className="pictue">	
                                            <div className="blankPic"></div>											
                                        </div>
                                    </li>
                                    <li >
                                        <div className="userAction">
                                        	Interacting
                                        </div>
                                        <div className="playBtn">                                            
                                        </div>
                                        <div className="time">	
                                            8min											
                                        </div>
                                        <div className="duration">
                                            60%											
                                        </div>
                                        <div className="pictue">
                                            <div className="blankPic"></div>												
                                        </div>
                                    </li>    
                                    <li>
                                        <div className="userAction">
                                            exit
                                        </div>
                                        <div className="playBtn">                                            
                                        </div>
                                        <div className="time">  
                                            10min                                            
                                        </div>
                                        <div className="duration">
                                            100%                                            
                                        </div>
                                        <div className="pictue">  
                                            <div className="blankPic"></div>                                              
                                        </div>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dataBox padding-right-0">								
                        <h2>Map</h2>
                        <div className="dataContent">
                            <div className="slide-container">
                                <Slide {...properties}>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                                    </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                                        </div>
                                    </div>
                                </Slide>
                            </div>								
                        </div>
                    </div>
                </div>
                <div className="rightContent">
                    <div className="dataBox">
                        <h2>HX Curv</h2>
                        <div className="dataContent">
                        </div>
                    </div>
                    <div className="dataBox">
                        <h2>Actions</h2>
                        <div className="dataContent">
                        </div>
                    </div>
                    <div className="dataBox">
                        <h2>Footage</h2>
                        <div className="fixWidth">
                            <ul className="footageList">
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                                <li><div className="defaultPic"></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Center