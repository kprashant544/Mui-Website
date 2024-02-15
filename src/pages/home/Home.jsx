import "./home.css";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { MdCoPresent, MdComputer } from "react-icons/md";
import { experimentalStyled as styled } from "@mui/material/styles";
// import { IoSettingsOutline } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { SiBisecthosting } from "react-icons/si";
import { BiReset } from "react-icons/bi";
import { PiCaretCircleDoubleLeftBold } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
// import { IconButton } from "@material-ui/core";
function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundcolor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <div className="contain">
        <div className="image"></div>
        <div className="content2">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ p: "10px" }}>
              <Grid xs={4} sx={{ px: "50px" }}>
                <Item>
                  <BiReset style={{ fontSize: "50px", color: "#1976d2" }} />
                  <h1>Our Story</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis earum obcaecati molestias possimus provident vero
                    tempore debitis enim iure quibusdam qui laudantium officia
                    quam facilis distinctio, fuga amet. Doloremque, officiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum expedita temporibus odio molestias, voluptates
                    corrupti. Adipisci voluptatem dolorem illo velit distinctio
                    minus architecto, dignissimos saepe, sint omnis quia rem
                    expedita. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolorum voluptas aut quasi vitae.
                  </p>
                </Item>
              </Grid>
              <Grid xs={4} sx={{ px: "50px" }}>
                <Item>
                  <PiCaretCircleDoubleLeftBold
                    style={{ fontSize: "50px", color: "#1976d2" }}
                  />
                  <h1>Our Mission</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis earum obcaecati molestias possimus provident vero
                    tempore debitis enim iure quibusdam qui laudantium officia
                    quam facilis distinctio, fuga amet. Doloremque, officiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum expedita temporibus odio molestias, voluptates
                    corrupti. Adipisci voluptatem dolorem illo velit distinctio
                    minus architecto, dignissimos saepe, sint omnis quia rem
                    expedita. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolorum voluptas aut quasi vitae.
                  </p>
                </Item>
              </Grid>
              <Grid xs={4} sx={{ px: "50px" }}>
                <Item>
                  <LiaEyeSolid style={{ fontSize: "50px", color: "#1976d2" }} />
                  <h1>Our Vision</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis earum obcaecati molestias possimus provident vero
                    tempore debitis enim iure quibusdam qui laudantium officia
                    quam facilis distinctio, fuga amet. Doloremque, officiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum expedita temporibus odio molestias, voluptates
                    corrupti. Adipisci voluptatem dolorem illo velit distinctio
                    minus architecto, dignissimos saepe, sint omnis quia rem
                    expedita. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolorum voluptas aut quasi vitae.
                  </p>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="content3">
          <Box sx={{ flexGrow: 1 }}>
            <Grid>
              <Grid xs={4}>
                <Item>
                  <h1>Our Services</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vel ad quaerat eius assumenda excepturi ipsam,Lorem, ipsum
                    dolor sit amet
                  </p>
                  <Grid container rowSpacing={1}>
                    <Grid xs={3} sx={{ px: "50px" }}>
                      <Item>
                        <Stack direction="row" spacing={2}>
                          <Button variant="outlined" startIcon={<MdComputer />}>
                            Web Design
                          </Button>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid xs={3} sx={{ px: "50px" }}>
                      <Item>
                        <Stack direction="row" spacing={2}>
                          <Button
                            variant="outlined"
                            startIcon={<MdCoPresent />}
                          >
                            Web Development
                          </Button>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid xs={3} sx={{ px: "50px" }}>
                      <Item>
                        <Stack direction="row" spacing={2}>
                          <Button
                            variant="outlined"
                            startIcon={<SiBisecthosting />}
                          >
                            Hosting
                          </Button>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid xs={3} sx={{ px: "50px" }}>
                      <Item>
                        <Stack direction="row" spacing={2}>
                          <Button
                            variant="outlined"
                            startIcon={<FaAppStoreIos />}
                          >
                            Apps Development
                          </Button>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid xs={3} sx={{ px: "50px" }}>
                      <Item>
                        <Stack direction="row" spacing={2}>
                          <Button
                            variant="outlined"
                            startIcon={<IoGameController />}
                          >
                            Game Development
                          </Button>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid xs={3} sx={{ px: "50px" }}>
                      <Item>
                        <Stack direction="row" spacing={2}>
                          <Button
                            variant="outlined"
                            startIcon={<SlScreenDesktop />}
                          >
                            Desktop Application
                          </Button>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid xs={3} sx={{ px: "50px" }}>
                      <Item>
                        <Stack direction="row" spacing={2}>
                          <Button
                            variant="outlined"
                            startIcon={<FaWordpress />}
                          >
                            WordPress Themes
                          </Button>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid xs={3} sx={{ px: "50px" }}>
                      <Item>
                        <Stack direction="row" spacing={2}>
                          <Button variant="outlined" startIcon={<BiSupport />}>
                            Support & IT
                          </Button>
                        </Stack>
                      </Item>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Home;
