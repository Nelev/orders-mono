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

interface IThcFilters {
  Level0: boolean;
  Level10: boolean;
  Level19: boolean;
  Level20: boolean;
}

interface IProps {
  thcLevelFilters: IThcFilters;
  setThcLevelFilters: (value: IThcFilters) => void;
}

const ProductsFilters: React.FC<IProps> = ({
  thcLevelFilters,
  setThcLevelFilters,
}) => {
  /*   const handlTypeFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  }; */

  const handlTHCLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThcLevelFilters({
      ...thcLevelFilters,
      [event.target.value]: event.target.checked,
    });
  };

  const { Level0, Level10, Level19, Level20 } = thcLevelFilters;

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<Add color="primary" />}>
          <Typography fontWeight={"bold"}>Indica, Sativa, Hybrid</Typography>
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
      <Accordion>
        <AccordionSummary expandIcon={<Add color="primary" />}>
          <Typography fontWeight={"bold"}>THC%</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ justifyContent: "left", display: "grid", flexGrow: 1 }}
        >
          <Stack spacing={0}>
            <FormControlLabel
              value="Level0"
              control={
                <Checkbox
                  color="secondary"
                  onChange={handlTHCLevelChange}
                  checked={Level0}
                />
              }
              label="0%"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Level10"
              control={
                <Checkbox
                  color="secondary"
                  onChange={handlTHCLevelChange}
                  checked={Level10}
                />
              }
              label="1-10%"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Level19"
              control={
                <Checkbox
                  color="secondary"
                  onChange={handlTHCLevelChange}
                  checked={Level19}
                />
              }
              label="11-20%"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Level20"
              control={
                <Checkbox
                  color="secondary"
                  onChange={handlTHCLevelChange}
                  checked={Level20}
                />
              }
              label="20%+"
              labelPlacement="end"
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ProductsFilters;
