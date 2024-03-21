import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();
  console.log("error", err)
  return (
    <div>
      <h1>Error</h1>
      <h3>{err.status + " - " + err.statusText}</h3>
    </div>
  )
}

export default Error;