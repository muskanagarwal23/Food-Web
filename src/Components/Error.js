import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    

    return(
        <div>
            <h1 className="text-red-600">Opps! something Went Wrong </h1>
            <h3> {err.status}:{err.statusText} </h3>
        </div>
    )
}

export default Error;