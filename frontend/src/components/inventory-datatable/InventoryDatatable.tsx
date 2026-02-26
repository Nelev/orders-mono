import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { IProduct } from "../../model/products";
import { IconButton } from "@mui/material";

const columns: GridColDef<(typeof mockItems)[number]>[] = [
  {
    field: "id",
    width: 90,
    renderHeader: () => <b>Id</b>,
  },
  {
    field: "productName",
    renderHeader: () => <b>Name</b>,
    width: 150,
  },
  {
    field: "batchId",
    renderHeader: () => <b>Batch Id</b>,
    width: 150,
  },
  {
    field: "farm",
    renderHeader: () => <b>Farm</b>,
    width: 150,
  },
  {
    field: "soldBy",
    renderHeader: () => <b>Seller</b>,
    width: 110,
  },
  {
    field: "description",
    renderHeader: () => <b>Description</b>,
    width: 200,
  },
  {
    field: "strain",
    renderHeader: () => <b>Strain</b>,
    sortable: false,
    width: 160,
  },
  {
    field: "price",
    renderHeader: () => <b>Price</b>,
    sortable: false,
    width: 100,
  },
  {
    field: "quantity",
    align: "right",
    headerAlign: "right",
    renderHeader: () => <b>Quantity</b>,
    sortable: false,
    width: 100,
    renderCell: (params) => {
      const quantity = params.row.quantity;
      if (quantity < 50) {
        return (
          <>
            {params.row.quantity}
            <IconButton>
              <FiberManualRecordIcon sx={{ color: "red" }} />
            </IconButton>
          </>
        );
      } else if (quantity < 100) {
        return (
          <>
            {params.row.quantity}
            <IconButton>
              <FiberManualRecordIcon sx={{ color: "yellow" }} />
            </IconButton>
          </>
        );
      } else {
        return (
          <>
            {params.row.quantity}
            <IconButton>
              <FiberManualRecordIcon sx={{ color: "green" }} />
            </IconButton>
          </>
        );
      }
    },
  },
  {
    field: "thc",
    renderHeader: () => <b>THC(%)</b>,
    type: "number",
    sortable: false,
    width: 160,
  },
];

const mockItems: IProduct[] = [...Array(200)].map((index) => ({
  id: index,
  productName: "pink lady",
  farm: "weed company",
  soldBy: "weed reseller",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  strain: "cool strain",
  price: 8,
  effect:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  quantity: Math.floor(Math.random() * 200),
  batchId: 18374636,
  thc: 18,
}));

const InventoryDatatable: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={mockItems}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default InventoryDatatable;
