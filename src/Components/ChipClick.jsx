import Chip from "@mui/material/Chip";
import { useState } from "react";
import Stack from "@mui/material/Stack";

export default function ChipClick({ genre, dataId, deleteId }) {
  const [selectedChip, setSelectedChip] = useState(null);
  const handleClick = (val) => {
    dataId(val);
    setSelectedChip(val);
  };
  const handleDelete = (val) => {
    setSelectedChip(null);
    deleteId(val);
  };
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1}>
      {genre.map((item, index) => {
        return (
          <Chip
            label={item.name}
            variant={selectedChip === item.id ? "filled" : "outlined"}
            key={index}
            onDelete={
              selectedChip === item.id ? () => handleDelete(item.id) : undefined
            }
            onClick={() => handleClick(item.id)}
            sx={{
              backgroundColor:
                selectedChip === item.id ? "lightblue" : "#E0E0E0",
              color: selectedChip === item.id ? "black" : "default",
            }}
          />
        );
      })}
    </Stack>
  );
}
