import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FlightIcon from "@mui/icons-material/Flight";

import weedImage from "./sample.png";
import { IProduct } from "../../model/products";
import { Add, Info as InfoIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  chipClasses,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import "./style.css";
import ProductContentCard from "./ProductCardContent";
import { getTHCLevelColor } from "../../utils";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme?.breakpoints?.down("sm"));

  const handleAddToCart = () => {};

  return (
    <Card
      sx={{ maxWidth: !isSmallScreen ? "250px" : "100%" }}
      className={!isSmallScreen ? "product-card" : ""}
    >
      <Box display={"grid"} justifyContent={"right"}>
        <InfoIcon color="primary" />
      </Box>
      {!isSmallScreen ? (
        <CardMedia component="img" height="150" image={weedImage} />
      ) : null}
      {!isSmallScreen ? (
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h5">
            <b>{product.productName}</b>
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            <b>THC</b>:{" "}
            <span style={{ color: getTHCLevelColor(product.thc) }}>
              {product.thc}%
            </span>
            <br />
            <b>Price</b>: {product.price} eur / g
            <br />
            {product.description}
          </Typography>
          <Box
            marginTop={"10px"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Chip
              label="Hybrid"
              color="primary"
              variant="outlined"
              size="small"
            />
            <Chip
              label="Relaxing"
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
          </Box>
        </CardContent>
      ) : (
        <ProductContentCard product={product} />
      )}
      <CardActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Button
          onClick={handleAddToCart}
          sx={{ width: "100%", textTransform: "none" }}
          variant="contained"
          color="secondary"
          endIcon={<Add sx={{ color: "white" }} />}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
