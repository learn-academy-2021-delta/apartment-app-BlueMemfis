import React from "react"

class App extends React.Component {
  render() {

    console.log("logged in:", this.props.logged_in)

    console.log("user:", this.props.current_user)
    
    console.log("sign up:", this.props.new_user_route)
    
    console.log("sign in", this.props.sign_in_route)
    
    console.log("sign out", this.props.sign_out_route)
    
    return(

      <>
      <h3>This is the Home Page</h3>
    </>

    )
  }
}

export default App