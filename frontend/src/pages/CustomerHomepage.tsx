import React from "react";

import InfiniteScrollComponent from "../components/infinite-scroll/InfiniteScroll";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import ProductsFilters from "../components/products-filters/ProductsFilters";

const CustomerHomepage: React.FC = () => {
  const [inputFilter, setInputFilter] = React.useState<string | null>("");
/*   const [typeFilters, setTypeFilters] = React.useState({
    hybrid: false,
    sativa: false,
    indica: false,
  }); */
  const [priceFilterd, setPriceFilters] = React.useState({
    Level0: false,
    Level10: false,
    Level19: false,
    Level20: false,
  });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme?.breakpoints?.down("md"));

  return (
    <>
      <Typography variant="h4">Products</Typography>
      {!isSmallScreen ? (
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="h5">Filters</Typography>
            <ProductsFilters
              pricesFilters={priceFilterd}
              setPricesFilters={setPriceFilters}
            />
          </Grid>
          <Grid item xs={7}>
            <InfiniteScrollComponent />
          </Grid>
          <Grid item xs={2} justifyContent={"left"}>
            <Grid item xs={12}>
              <TextField
                value={inputFilter}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setInputFilter(event.target.value);
                }}
                placeholder="Search a product..."
                variant="outlined"
                color="secondary"
                aria-label="search"
                size="small"
                sx={{ height: "40px", maxWidth: "170px" }}
              />
              <Button
                color="secondary"
                variant="contained"
                endIcon={<Search />}
                sx={{ height: "40px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Box flex={1}>
              <TextField
                value={inputFilter}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setInputFilter(event.target.value);
                }}
                placeholder="Search a product..."
                variant="outlined"
                color="secondary"
                aria-label="search"
                size="small"
                sx={{ height: "40px" }}
              />
              <Button
                color="secondary"
                variant="contained"
                endIcon={<Search />}
                sx={{ height: "40px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <InfiniteScrollComponent />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CustomerHomepage;
