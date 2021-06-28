import React from 'react';
import './pin.css';

const  Pin = (props) => {
   

    const imgStyle= {
        position: 'absolute', 
        left: props.pinDetails.position[0], 
        top: props.pinDetails.position[1]
    };

    return (
    <>
        {props.isSelected ?        
        <> 
            <img onClick={(event) => { props.handleClick(event, props.pinDetails)}} 
            src={`${process.env.PUBLIC_URL}/image/marker-selected.png`} 
            alt="HTML5"
            id={props.pinDetails.name}
            style={imgStyle}
            />
            <div className='pin-info'>
                <h2 className = 'pin-detail' style={{textAlign: 'left', marginLeft: '5px'}}>Details</h2>
                {Object.keys(props.pinDetails).length == 1 && <span className = 'pin-detail'>No details available for this pin.</span>}
                {Object.keys(props.pinDetails).map((key) => {
                 return ( key!=='position' &&  <span className = 'pin-detail'>{key} : { props.pinDetails[key] }</span>)
                })}
            </div>
        </>  
        :
        <img onClick={(event) => {props.handleClick(event, props.pinDetails)}} 
            src={`${process.env.PUBLIC_URL}/image/marker.png`} 
            alt="HTML5"
            id={props.pinDetails.name}
            style={imgStyle}
        />   
        }
    </>     
    );
};

export default Pin;