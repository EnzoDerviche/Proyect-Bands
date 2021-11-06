import React from "react";
import { useDispatch } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IoMdMenu, IoMdSwap, IoIosFootball, IoIosFlower } from "react-icons/io";
import {
    filterByCountry,
    sortAlphabetically,
    filterByGenre
} from "../actions/index";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));



const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.divider,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
  
export default function Filtro() {
  const dispatch = useDispatch();

  const filterByCountryButton = (name) => {
    dispatch(filterByCountry(name));
  };

  const filterByGenreButton = (name) => {
    dispatch(filterByGenre(name));
  };

  const sortBy = (order) => {
        dispatch(sortAlphabetically(order));
    }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <div>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="grey"
            onClick={handleClick}
          >
          <IoMdMenu/>
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={() => sortBy("asc")}>
              <ListItemIcon>
                <IoMdSwap fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="A-Z" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => sortBy("desc")}>
              <ListItemIcon>
                <IoMdSwap fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Z-A" />
            </StyledMenuItem>
            <hr/>
            <StyledMenuItem onClick={() => filterByCountryButton("United States")}>
              <ListItemIcon>
                <IoIosFlower fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="United States" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByCountryButton("United Kingdom")}>
              <ListItemIcon>
                <IoIosFlower fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="United Kingdom" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByCountryButton("Netherlands")}>
              <ListItemIcon>
                <IoIosFlower fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Netherlands" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByCountryButton("Italy")}>
              <ListItemIcon>
                <IoIosFlower fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Italy" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByCountryButton("Brazil")}>
              <ListItemIcon>
                <IoIosFlower fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Brazil" />
            </StyledMenuItem>
            <hr/>
            <StyledMenuItem onClick={() => filterByGenreButton('rock')}>
              <ListItemIcon>
                <IoIosFootball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Rock" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByGenreButton('rock-roll')}>
              <ListItemIcon>
                <IoIosFootball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Rock & Roll" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByGenreButton('hard-rock')}>
              <ListItemIcon>
                <IoIosFootball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Hard Rock" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByGenreButton('goth-metal')}>
              <ListItemIcon>
                <IoIosFootball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Goth Metal" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByGenreButton('power-metal')}>
              <ListItemIcon>
                <IoIosFootball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Power Metal" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByGenreButton('heavy-metal')}>
              <ListItemIcon>
                <IoIosFootball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Heavy Metal" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByGenreButton('progressive-metal')}>
              <ListItemIcon>
                <IoIosFootball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Progressive Metal" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByGenreButton('black-metal')}>
              <ListItemIcon>
                <IoIosFootball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Black Metal" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
    </div>
  );
}
