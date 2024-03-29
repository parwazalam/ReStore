
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, ListItem, Switch, Toolbar, Typography,List ,IconButton,Badge, Box} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks=[
  { title:'catalog',path:"/catalog"},
  { title:'about',path:"/about"},
  { title:'contact',path:"/contact"}
  
];

const rightLinks=[
  { title:'register',path:"/register"},
  { title:'login',path:"/login"}
];
const navStyles={color:'inherit',typography:'h6','&:hover':{color:'grey.500'},'&.active':{color:'text.secondary'},textDecoration:'none'}
interface Props{
  darkMode:boolean;
  handleThemeChange:()=>void;
}
export default function Header({darkMode,handleThemeChange}:Props)
{
   
  return (
   <AppBar position="static" sx={{mb:4}}>
    <Toolbar sx={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant='h6' component={NavLink} to='/' sx={navStyles} >ReStore</Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>
        <List sx={{ display: 'flex' }}>
          {
          midLinks.map(({title,path})=>(
                <ListItem component={NavLink}
                to={path}
                key={path} sx={navStyles}>
                 {title.toUpperCase()}
              </ListItem>
          ))
          }

        </List>
        <Box display={"flex"} alignItems={"center"}>
        <IconButton size="large" edge="start" color="inherit"   sx={{mr:2}}>
          <Badge badgeContent="5" color="secondary">
            <ShoppingCart/>
          </Badge>
        </IconButton>
        <List sx={{ display: 'flex' }}>
          {
          rightLinks.map(({title,path})=>(
                <ListItem component={NavLink}
                to={path}
                key={path} sx={navStyles}>
                 {title.toUpperCase()}
              </ListItem>
          ))
          }

        </List></Box>
    </Toolbar>
   </AppBar>
  );
}

   