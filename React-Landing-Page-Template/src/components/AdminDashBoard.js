import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLogin } from "./LoginContext";
// import { Button } from "react-bootstrap"
import { Button } from "@mui/material";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "none",
  },
}));

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const StyledNavLink = ({ to, text }) => (
  <StyledLink to={to}>
    <CustomListItemButton>
      <CustomListItemText primary={text} />
    </CustomListItemButton>
  </StyledLink>
);

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    background: `url('/images/bgimage.jpg') no-repeat center center fixed`,
    backgroundSize: 'cover',
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background: "linear-gradient(270deg, white -6%, rgb(35, 49, 71) 9%);"

}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AdminDashBoard = () => {

  const navigate = useNavigate();
  const logout = (event) => {
    event.preventDefault();

    sessionStorage.clear();
    if(window.confirm("Are you sure to Logout ?")){
      setShowadminDashboard(false);

      navigate("/landing");

      }
      
    
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {
    login,
    setLogin,
    showUserDashboard,
    setShowuserDashboard,
    showAdminDashboard,
    setShowadminDashboard,
    adminLogin,
    setAdminlogin,
  } = useLogin();
  React.useEffect(() => {
    if (sessionStorage.getItem("admin")) {
      setLogin(true);
      setShowuserDashboard(false);
      setShowadminDashboard(true);
    }
    
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" ,  background: "linear-gradient(270deg, white -6%, rgb(35, 49, 71) 9%);"}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/logo-color.png"
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <Typography variant="h6" noWrap component="div">
              SNKM ROOMS
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
          <Button
          variant="contained"
          color="secondary"
          onClick={logout}
          >
          Log Out
        </Button>
        </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          background: "linear-gradient(270deg, white -6%, rgb(35, 49, 71) 9%);",

          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(270deg, white -6%, rgb(35, 49, 71) 9%)",

          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <Box sx={{ display: "flex", alignItems: "center",margin:"10px" }} >
            <Button
              variant="contained"
              color="primary"
              onClick={()=>navigate("userslist")}
              fullWidth
            >
              Users List
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center",margin:"10px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={()=>navigate("roomadd")}
              fullWidth
            >
              Room Add
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center",margin:"10px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={()=>navigate("editandupdate")}
              fullWidth
            >
              Edit and Update
            </Button>
          </Box>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <Outlet />
      </Main>
    </Box>
  );
};

export default AdminDashBoard;
