import { Add } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface IPriceFilters {
  Level0: boolean;
  Level10: boolean;
  Level19: boolean;
  Level20: boolean;
}

interface IProps {
  pricesFilters: IPriceFilters;
  setPricesFilters: (value: IPriceFilters) => void;
}

const ProductsFilters: React.FC<IProps> = () => {

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<Add color="primary" />}>
          <Typography fontWeight={"bold"}>Price range</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ justifyContent: "left", display: "grid" }}>
          <Stack spacing={0}>
            <FormControlLabel
              value="indica"
              control={<Checkbox color="secondary" />}
              label="Indica"
              labelPlacement="end"
            />
            <FormControlLabel
              value="sativa"
              control={<Checkbox color="secondary" />}
              label="Sativa"
              labelPlacement="end"
            />
            <FormControlLabel
              value="hybrid"
              control={<Checkbox color="secondary" />}
              label="Hybrid"
              labelPlacement="end"
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ProductsFilters;
