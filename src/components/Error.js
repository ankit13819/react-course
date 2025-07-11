import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError()
  return (
    <div>
      <h1>Oop's</h1>
      <h4>Something Went Wrong</h4>
      <h3>{err.status} , {err.statusText}</h3>
      <h3>{err.data}</h3>
    </div>
  )
}

export default Error