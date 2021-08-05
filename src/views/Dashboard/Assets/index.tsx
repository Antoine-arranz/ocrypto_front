import React from "react";
import { Table } from "semantic-ui-react";
import Wrapper from "../../../components/Wrapper";

const Assets = () => {
  return (
    <Wrapper margin='auto' width='80%'>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Logo</Table.HeaderCell>
            <Table.HeaderCell>Asset</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Fees</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>PNL</Table.HeaderCell>
            <Table.HeaderCell>PNL%</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>logo</Table.Cell>
            <Table.Cell>Bitcoin</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>4</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
</Wrapper>  );
};

export default Assets;
