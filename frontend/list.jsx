import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  FloatingActionButton
} from 'material-ui';

import _ from 'lodash';

export default class List extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { list } = nextProps;
    this.setState({list, index: list.length})
  }

  handleClick = (index) => {
    this.props.callbackParent(index)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (!this.state || nextState.index !== this.state.index)
  }

  render() {
    return (
      <div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Index</TableHeaderColumn>
              <TableHeaderColumn>Task</TableHeaderColumn>
              <TableHeaderColumn>
                {
                  <FloatingActionButton mini={true} disabled={true}>
                    {this.props.button}
                  </FloatingActionButton> }
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {(this.state) ?
              _.map(this.state.list, (item, index) => {
                return (
                  <TableRow key={index.toString()}>
                    <TableRowColumn>{index+1}</TableRowColumn>
                    <TableRowColumn>{item.value}</TableRowColumn>
                    <TableRowColumn>
                      {
                        <FloatingActionButton mini={true} onClick={() => this.handleClick(item.index)}>
                          {this.props.button}
                        </FloatingActionButton>
                      }
                    </TableRowColumn>
                  </TableRow>
                )
              }) : null
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}
