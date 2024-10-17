import Chip from "@mui/material/Chip";

import Stack from "@mui/material/Stack";

export default function ChipClick({ genre, dataId }) {
  const handleClick = (val) => {
    dataId(val);
  };

  return (
    <Stack direction="row" spacing={1}>
      {genre.map((items, index) => {
        return (
          <Chip
            label={items.name}
            variant="outlined"
            key={index}
            onClick={() => handleClick(items.id)}
          />
        );
      })}
    </Stack>
  );
}
