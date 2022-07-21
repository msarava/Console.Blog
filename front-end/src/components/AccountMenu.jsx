import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Link from 'next/link';
import AuthContext from 'services/auth.service';
import { useRouter } from 'next/router';
import { logOutApi } from 'services/api.services';
import { Button } from '@mui/material';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function AccountMenu() {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelog = () => {
    setUser(null);
    logOutApi().then(router.push('/login'));
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <KeyboardIcon sx={{ width: 32, height: 32, color: 'white' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          {user ? (
            <>
              <Avatar src={user.picture} />
              {user.firstname}
            </>
          ) : (
            <>
              <ListItemIcon>
                <LoginIcon fontSize='small' />
              </ListItemIcon>
              <Link href='/login'>
                <a>_Connexion</a>
              </Link>
            </>
          )}
        </MenuItem>
        <Divider />
        {user?.role === 'admin' ? (
          <MenuItem>
            <ListItemIcon>
              <AdminPanelSettingsIcon fontSize='small' />
            </ListItemIcon>
            <Link href='/admin'>
              <a>Admin</a>
            </Link>{' '}
          </MenuItem>
        ) : (
          ''
        )}
        {user?.role === 'admin' ? <Divider /> : ''}
        <MenuItem>
          <ListItemIcon>
            <SearchIcon fontSize='small' />
          </ListItemIcon>
          <Link href='/search'>
            <a>_Rechercher</a>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          {user ? (
            <span onClick={handleDelog}>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              _Deconnexion
            </span>
          ) : (
            <>
              <ListItemIcon>
                <SensorOccupiedIcon fontSize='small' />
              </ListItemIcon>
              <Link href='/signup'>_S'inscrire</Link>
            </>
          )}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
