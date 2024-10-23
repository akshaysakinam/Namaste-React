import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>OOps!!</h1>
            <p>Something went wrong</p>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}
export default ErrorPage;