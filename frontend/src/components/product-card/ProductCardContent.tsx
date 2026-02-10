import React from "react";
import { Box, Chip, chipClasses, Grid } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";

import sampleImage from "./sample.png";
import { IProduct } from "../../model/products";
import { getTHCLevelColor } from "../../utils";

interface IProps {
  product: IProduct;
}

const ProductCardContent: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Box
            component={"img"}
            src={sampleImage}
            sx={{ height: "100px", width: "100px" }}
          />
        </Grid>
        <Grid item xs={8} sx={{ textAlign: "left" }}>
          <b>THC</b>:{" "}
          <span style={{ color: getTHCLevelColor(product.thc) }}>
            {product.thc}%
          </span>
          <br />
          {product.description}
          <br />
          <Chip
            label="tag"
            color="primary"
            variant="outlined"
            size="small"
          />
          <Chip
            label="tag"
            sx={{
              [`& .${chipClasses.icon}`]: {
                color: "white",
              },
              backgroundColor: "green",
              color: "white",
            }}
            icon={<FlightIcon sx={{ color: "white" }} />}
            size="small"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductCardContent;
