import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex" }}>
            <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </Link>
            </Typography>
            <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Cart
              </Link>
            </Typography>
            <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/counter"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Counter
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
