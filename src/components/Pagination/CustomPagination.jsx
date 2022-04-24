import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CustomPagination = ({setPage,numOfPages}) => {
    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0)
        
    }

  return (
    <div>
      
      <Stack spacing={2}>
        <Pagination count={numOfPages} onChange={(e)=>handlePageChange(e.target.textContent)} color="secondary" />
      </Stack>
    </div>
  );
};

export default CustomPagination;
