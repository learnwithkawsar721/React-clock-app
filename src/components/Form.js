import React from 'react'
export default class Form extends React.Component {
    state={
        title:'',
        text:'JavaScript is AweSome',
        library:'',
        isAwesome:false,
    }
    
    hendelChange =(e)=>{
        if(e.target.type === 'text'){
            this.setState({
                title: e.target.value,
            })
        }else if(e.target.type === 'textarea'){
            this.setState({
                text: e.target.value,
            })
        }else if(e.target.type === 'select-one'){
            this.setState({
                library: e.target.value,
            })
        }else if(e.target.type === 'checkbox'){
            this.setState({
                isAwesome: e.target.checked,
            })
        }

        
    }
    submintHandler =(e)=>{
       e.preventDefault();
       const {title,text,library,isAwesome} = this.state;
       console.log(title,text,library,isAwesome);
    }
    render(){
        const {title,text,library,isAwesome}=this.state;
        return (
            <div className="clock">
               <form onSubmit={this.submintHandler}>
                     <input name="title" type="text" value={title} onChange={this.hendelChange} className="form" placeholder="Enter Title" />
                    <br/>
                    <br/>
                    <textarea name="text" value={text} onChange={this.hendelChange} className="form"/>
                    <br/>
                    <br/>
                    <select className="form" value={library} onChange={this.hendelChange}>
                        <option value="React">React</option>
                        <option value="Angolar">Angolar</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" checked={isAwesome} onChange={this.hendelChange} />
                    <br/>
                    <br/>
                    <input type="submit" className="btn" value="Submit" />
               </form>
            </div>
        )
    }
}