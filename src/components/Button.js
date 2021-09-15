import React from 'react'
class Button extends React.Component {
    shouldComponentUpdate(nextprops){
        const {change:currentChange}=this.props;
        const {change:nextchange}=nextprops;
        // console.log(nextchange);
        if(currentChange === nextchange){
            return false;
        }
            return true;
    }
    render(){
        console.log("Button Component render");
        const {change,local}= this.props;
        // console.log(local);
        return <button className="btn" onClick={()=>change(local)}>Click her</button>
    }
}

export default Button;