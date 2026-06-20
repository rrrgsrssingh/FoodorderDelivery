import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1> Opps This Page is Not Found please Try some Other url or You can try /About ,/Contact Etc.</h1>
            <h2>{err.status}:{err.statusText}</h2>
        </div>
    )
};
export default Error;