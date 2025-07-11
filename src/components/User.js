import { useState } from "react"

function User(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is function Based component {props.name}</h1>
      <h3>count: {count}</h3>
      <button onClick={() => { setCount(count + 1) }}>Clicked function</button>
    </>
  )
}
export default User