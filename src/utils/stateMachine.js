import Error from "../components/error/Error";
import Skeleton from "../components/skeleton/Skeleton";
import Spinner from "../components/spinner/Spinner";


function stateMachine(process, Component, data, waiting, loading, confirmed, error) {
    
     const waitingFn   = waiting? waiting : () => <Spinner />,
           loadingFn   = loading? loading : () => <Skeleton />,
           confirmedFn = confirmed? confirmed : () => <Component {...data}/>,
           errorFn     = error? error : () => <Error />;


    switch(process){
        case "waiting": 
            return waitingFn()
        break;
        case "loading":
            return loadingFn()
        break;
        case "confirmed":
            return confirmedFn()
        break;
        case "error":
            return errorFn()
        break;
        default:
            throw new Error("unexpected state error")
    }
}

export default stateMachine