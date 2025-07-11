import { Component } from 'react'
import UserClass from "./UserClass"

class About extends Component {
  constructor(props) {
    console.log("Parent Constructor")
    super(props)
  }

  //ComponentDidMount-It makes API call
  componentDidMount() {
    //Api Call Here

    console.log("Parent ComponentDidMount")
  }

  componentDidUpdate() {
    console.log("parent update")
  }

  render() {
    console.log("Parent Render")
    return (
      <>
        <h1>This About page coming through by react router dom</h1>
        <UserClass name="Namaste Class Component" />
      </>
    )
  }
}

// const About = () => {

//   return (
//     <>
//       <h1>This About page coming through by react router dom</h1>
//       <UserClass name="Namaste Class Component" />
//     </>
//   )
// }

export default About