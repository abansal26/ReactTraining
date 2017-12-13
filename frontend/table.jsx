import React from 'react';
import _ from 'lodash';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Id</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
              <TableHeaderColumn>Phone No.</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {_.map(this.props.list, (person) => {
              return (
                <TableRow key={person.id}>
                  <TableRowColumn>{person.id}</TableRowColumn>
                  <TableRowColumn>{person.name}</TableRowColumn>
                  <TableRowColumn>{person.address}</TableRowColumn>
                  <TableRowColumn>{person.phNo}</TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}