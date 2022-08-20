import React from 'react'
import { ListGroup } from 'react-bootstrap'
function Room(props) {
  const {user} = props

    return (
      <>
        <tr>
          <td><strong>ห้อง</strong> {user.room}</td>
          <td>{user.user.first_name}</td>
          <td>{332}</td>
        </tr>
      </>
    )
}

export default Room