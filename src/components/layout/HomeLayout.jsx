import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Box } from "@mui/material";

function HomeLayout() {
  return (
    <>
      <div className="head1">
        <NavBar />

        <Box style={{ marginTop: "64px" }}>
          <Outlet />
        </Box>

        <div className="foot1">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
