import "./App.css";
import * as React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "./Assets/logo.jpg";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import SweetList from "./Components/SweetList";
import SweetDetail from "./Components/SweetDetail";
import { NavLink } from "react-router-dom";
import sweetStore from "./Store/sweetStore";
import Order from "./Components/Order";
// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });
function App() {
  const [value, setValue] = React.useState(0);
  // const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="sticky" style={{ background: "#1c1347" }}>
        <Toolbar>
          <Box variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>
        </Toolbar>
      </AppBar>
      <img src={logo} style={{ width: "400px", height: "300px" }} alt="logo" />
      <Routes>
        <Route path="/sweet-list" element={<SweetList />} />
        <Route path="order/:id" element={<Order />} />
      </Routes>
      <NavLink to="https://www.instagram.com/danias.lastcourse/">
        Powered By CozyTech
      </NavLink>

      <BottomNavigation
        style={{ background: "#1c1347" }}
        value={value}
        onChange={(event, NewValue) => {
          setValue(NewValue);
        }}
        // showLabels
        // className={classes.root}
      >
        <Box variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <BottomNavigationAction
            label="Instagram"
            icon={<InstagramIcon style={{ color: "#FFFFFF" }} />}
          />
          <BottomNavigationAction
            label="Contacts"
            icon={<ContactMailIcon style={{ color: "#FFFFFF" }} />}
          />
          <BottomNavigationAction
            label="Cart"
            icon={<ShoppingCartIcon style={{ color: "#FFFFFF" }} />}
          />
        </Box>
      </BottomNavigation>
    </div>
  );
}

export default App;
