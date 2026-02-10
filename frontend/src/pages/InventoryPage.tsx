import { Grid } from "@mui/material";
import InventoryDatatable from "../components/inventory-datatable/InventoryDatatable";

function InventoryPage() {
  return (
    <>
      <Grid container flex={1}>
        <Grid item xs={12} flex={1} flexDirection={"row"}></Grid>
        <InventoryDatatable />
      </Grid>
    </>
  );
}

export default InventoryPage;
