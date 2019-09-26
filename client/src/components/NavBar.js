import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class NavBar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
          style={{color: "white"}}
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          >logout</Menu.Item>
        </Menu.Menu>
      )
    } else {
        return (
          <Menu.Menu position='right'>
            <Link to='/login'>
              <Menu.Item
              style={{color: "white"}}
                id='login'
                name='login'
                active={location.pathname === '/login'}
              >login</Menu.Item>
            </Link>
            <Link to='/register'>
              <Menu.Item
              style={{color: "white"}}
                id='register'
                name='register'
                active={location.pathname === '/register'}
              >register</Menu.Item>
            </Link>
          </Menu.Menu>
        )
      }
    }
    render() {
        return (
          <div>
            <Menu pointing secondary>
              <Link to='/'>
                <Menu.Item
                  style={{color: "white"}}
                  name='home'
                  id='home'
                  active={this.props.location.pathname === '/'}
                >myspace</Menu.Item>
              </Link>
              <Link to='/friends'>
                <Menu.Item
                  style={{color: "white"}}
                  name='friends'
                  id='friends'
                  active={this.props.location.pathname === '/friends'}
                >friends</Menu.Item>
              </Link>
                { this.rightNavItems() }
            </Menu>
          </div>
        )
      }
    }

    export class ConnectedNavBar extends React.Component {
        render() {
          return (
            <AuthConsumer> 
              { auth => 
                <NavBar { ...this.props } auth={auth} />
              }
            </AuthConsumer>
          )
        }
      }
      
      export default withRouter(ConnectedNavBar);