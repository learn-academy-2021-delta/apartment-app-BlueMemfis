import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import logo from '../assets/Parfume Logo.gif'
// import aptLogo from '../assets/apt-logo.png'


class Header extends Component {
  render() {
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route
      } = this.props
    // console.log("logged in:",this.props.logged_in)
    // console.log("user:",this.props.current_user)
    // console.log("sign in:",this.props.sign_in_route)
    // console.log("sign out:",this.props.sign_out_route)
      return(
        <header>
            <NavLink to="/">
                <img src={logo} alt="logo for Apartment" className="Parfume Logo"/>
            </NavLink>
            <div className="nav-links">
                <ul>
                    <li>Apartment Index</li>
                    </ul>
            <ul>
              {logged_in &&
                <a href={sign_out_route} className="nav-link">Sign Out</a>
              }
              {!logged_in &&
                <a href={sign_in_route} className="nav-link">Sign In</a>
              }
            </ul>
            <ul>
              {!logged_in &&
                <a href={new_user_route} className="nav-link">Sign Up</a>
              }
            </ul>
            </div>
        </header>
    )
  }
}
// class Header extends Component {
//     render() {
//       const {
//         logged_in,
//         current_user,
//         new_user_route,
//         sign_in_route,
//         sign_out_route
//       } = this.props
//       return (
//         <header>
//           <NavLink to="/">
//             <img src={logo} alt="apartment app logo" className="logo"/>
//           </NavLink>
//           <div className="nav-bar">
//             <ul>
//               <NavLink to="/apartmentindex" className="nav-link">See All the Apartments</NavLink>
//             </ul>
//             <ul>
//               {logged_in &&
//                 <a href={sign_out_route} className="nav-link">Sign Out</a>
//               }
//               {!logged_in &&
//                 <a href={sign_in_route} className="nav-link">Sign In</a>
//               }
//             </ul>
//             <ul>
//               {!logged_in &&
//                 <a href={new_user_route} className="nav-link">Sign Up</a>
//               }
//             </ul>
//             <ul>
//               {logged_in &&
//                 <NavLink to="/myapartments" className="nav-link">My Apartments</NavLink>
//               }
//             </ul>
//           </div>
//         </header>
//       )
//     }
//   }
  export default Header


