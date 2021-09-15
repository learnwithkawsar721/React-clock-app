import React from 'react'
class Button extends React.Component {
    
    render(){
        const {change,local}= this.props;
        // console.log(local);
        return <button className="btn" onClick={()=>change(local)}>{(local==='bn-BD')?'Click hear':`ঘড়ি পরিবর্তন করুন`}</button>
    } 
}

export default Button;