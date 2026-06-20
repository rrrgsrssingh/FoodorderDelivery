import { createContext } from "React";



const UserContext=createContext({
    loggedInuser:"DefaultUser"
});
export default UserContext;