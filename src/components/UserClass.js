import React from "react"
class UserClass extends React.Component {

  constructor(props) {
    console.log("Child Constructor")
    super(props);

    this.state = {
      name: "dummy",
      avatar_url: "dummy_url",
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/ankit13819');
    const json = await data.json()

    this.setState({
      name: json.name,
      avatar_url: json.avatar_url
    })
    console.log("Child ComponentDidMount")
  }

  //update again and again for stoped this used componentWillUnmount when go you new component then you will get

  componentDidUpdate() {
    this.timer = setInterval(() => {
      console.log("Child update")
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('will unmount')
  }

  render() {
    console.log("Child Render")
    return (
      <>
        <h1>This is CLass based component -- {this.state.name}</h1>
        <img src={this.state.avatar_url} alt="image" />
        <h3>class count : {this.state.count}</h3>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>Clicked CLass</button>
      </>
    )
  }
}
export default UserClass