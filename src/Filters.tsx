import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface FiltersProps {
  yearRange: number[];
  selectedYearRange: number[];
  onYearRangeChange: (newRange: number[]) => void;
}

const Filters: React.FC<FiltersProps> = ({
  yearRange,
  selectedYearRange,
  onYearRangeChange,
}) => {
  return (
    <Box p={2} sx={{ borderRadius: 2 }} className="bg-green-300">
      <Typography gutterBottom sx={{ fontWeight: 500 }}>
        Filter by Year
      </Typography>
      <Slider
        value={selectedYearRange}
        onChange={(event, newValue) => onYearRangeChange(newValue as number[])}
        valueLabelDisplay="auto"
        min={yearRange[0]}
        max={yearRange[1]}
      />
    </Box>
  );
};

export default Filters;
