import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
function UserPagination({ setPage, totalPages }) {
  const handleChange = (e) => {
    setPage(e.target.textContent);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        color="primary"
        onChange={handleChange}
        sx={{ position: "relative", left: "400px" }}
      />
    </Stack>
  );
}
export default UserPagination;
