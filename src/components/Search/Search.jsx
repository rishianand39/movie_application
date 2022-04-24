import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Search = () => {
  const [type, setType] = useState(0);
    


  return (
    <div>
      <div style={{ display: "flex", margin: "15px 0" }}>
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          label="Search"
          variant="filled"
        />
        <Button>
          <SearchIcon />
          Search
        </Button>
      </div>
      <Tabs
        value={type}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab style={{width:"50%", color:"white"}} value="one" label="Search Movies" />
        <Tab style={{width:"50%",color:"white"}}  value="two" label="Search TV Series" />
      </Tabs>
    </div>
  );
};

export default Search;
