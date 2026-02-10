import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { getNewOrders } from "../api/orders";
import { IOrder } from "../model/order";

const OrdersPage: React.FC = () => {
  const [newOrders, setNewOrders] = React.useState<IOrder[]>([]);

  useEffect(() => {
    getNewOrders().then((orders) => {
      setNewOrders(orders);
    });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order Id</TableCell>
              <TableCell align="right">Item</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newOrders?.map((newOrder) => (
              <TableRow
                key={newOrder.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {newOrder.id}
                </TableCell>
                <TableCell align="right">{newOrder.productId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrdersPage;
