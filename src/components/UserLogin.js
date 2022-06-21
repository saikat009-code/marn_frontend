import React from 'react'
import NavigationBar from './NavigationBar';

function UserLogin() {
  return (
    <div>
      <NavigationBar />
      <br />
      <h3>USER LOGIN</h3>
      <form>
        <input type="email" placeholder="ENTER EMAIL" required />
        <br />
        <br />
        <input type="password" placeholder="ENTER PASSWORD" required />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default UserLogin
