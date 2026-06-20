import User from "./User.js";
import UserClass from "./UserClass.js";
const About=()=>{
    return(
        <div>
          <h1>By Using This Application You Can Order Delicious Food </h1>
          <User/>
          <UserClass MetaProfileName={" SAURAV KUMAR SINGH"}/>
        </div>
    )    
};
export default About;