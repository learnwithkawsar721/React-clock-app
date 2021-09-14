import React from 'react'

class Clock extends React.Component{
    /* যদি propos এর প্রয়োজন হয় তাহলে consttuctor লিখতে হবে । আর যদি প্রয়োজন না হয় তাহলে লিখতে হবে না।  */
//    constructor(props){
//        super(props);
//        this.state ={date:new Date()};
//    }
  /* যদি propos এর প্রয়োজন না হয় তাহলে consttuctor লিখতে হবে না। */
   state = {date:new Date()};

   componentDidMount(){
       this.timeOut =setInterval(()=>this.tick(),1000);
   }
   componentWillUnmount(){
       clearInterval(this.timeOut);
   }
   tick(){
        /* component এর মান change করতে হলে setState() লিখতে হবে। এবং নতুন মান সেট করতে হবে।  */
    this.setState({
        date:new Date()
    })
   }
   /* Class component এ rander() মেথড লিখতে হয়। এই মেথড কম্পনেন্ট কে re-use করে।  */
    render(){
      return (
       <div className="clock">
          <div className="text-center">
          <h1 className="text">First React Clock App By <span>Kawsar</span></h1>
            <h1 className="text">
                 {this.state.date.toLocaleTimeString(this.props.local)}
            </h1>
          </div>
       </div>
      );
    }
}

export default Clock;