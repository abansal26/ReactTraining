import React from 'react';
import _ from 'lodash';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone No.</th>
          </tr>
          {_.map(this.props.list, (person) => {
            return (<tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td> 
              <td>{person.address}</td>
              <td>{person.phNo}</td>
            </tr>)})}
        </tbody>
      </table>
    )
  }
}