/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import { PlusCircle as PlusIcon } from 'react-feather';
import Logo from '../../Logo';
import User from '../images/avatar.png'
import NavItem from './NavItem';
import { THEMES } from '../../../constants/theme';

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth = 0
}) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 100,
    height: 100
  },
  actionIcon: {
    marginRight: theme.spacing(1)
  },
  logo:{
    [theme.breakpoints.down('lg')]: {
      width: 150
    }
  },
  navBox:{
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.background.primary
    } : {},
    ...theme.name === THEMES.ONE_DARK ? {
      backgroundColor: theme.palette.background.default
    } : {}
  },
  colorText:{
    color:  '#fff'
  }
}));

function NavBar({ openMobile, onMobileClose, }) {
  const classes = useStyles();
  const location = useLocation();


  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      className={classes.navBox}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
          >
            <RouterLink to="/">
              <Logo className={classes.logo} />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2} mt={3}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <RouterLink to="">
              <Avatar
                alt="User"
                className={classes.avatar}
                src={User}
              />
            </RouterLink>
          </Box>
          <Box
            mt={2}
            textAlign="center"
          >
            <Link
              component={RouterLink}
              to=""
              variant="h5"
              className={classes.colorText}
              underline="none"
            >
              ASHK123
              {/* {`${user.firstName} ${user.lastName}`} */}
            </Link>
            <Typography
              variant="body2"
              className={classes.colorText}
              gutterBottom
            >
              Level 1
              
            </Typography>
            <Box p={2}>
              <Typography
                variant="body1"
                className={classes.colorText}
              >
                "Work hard on your Test"
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box p={2}>
        <Button
              color="white"
              fullWidth
              size="large"
              variant="contained"
            >
             <SvgIcon
            fontSize="small"
            className={classes.actionIcon}
          >
            <PlusIcon />
          </SvgIcon>
              Log Out
            </Button>
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
