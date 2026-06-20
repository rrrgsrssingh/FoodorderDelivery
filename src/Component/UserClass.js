import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //How to Create State Varibale in Class Based Component
        /*this.state={
            count1:1,
            count2:2
        
        };  functionality inside the component 
        <button onClick={()=>{
                //How to Update a state in class based component
                this.setState({
                    count1:this.state.count1+1
                })
            }}>Click Me</button>  <h4>Count1:{count1}</h4>*/
    this.state={
        userInfo:{
            name:"Dummy",
            Location:"Default",
        },

    };
    }
    //rrrgsrssingh akshaymarch7
    async componentDidMount(){
        const data =await fetch("https://api.github.com/users/rrrgsrssingh");
        const json=await data.json();
        this.setState({
            userInfo:json,
        });
        console.log(json);
    }
    render(){
          
        const{MetaProfileName}=this.props;
        const{name,location,avatar_url}=this.state.userInfo
        
        return (<div className="user-class">
               <h1>Name: {name}</h1>
               <h2>Location: {location}</h2>
               <img src={avatar_url}/>
            <h1>Social Media</h1>
            <h2> Instagram: Singh_boy_Sauravv</h2>
            <h3>Meta Profile Id:-{MetaProfileName}</h3>
           
            
            
        </div>
        );
    }
}
export default UserClass;