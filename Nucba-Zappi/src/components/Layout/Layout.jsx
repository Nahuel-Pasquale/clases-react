import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { LayoutWrapper } from './LayoutStyles';
import * as userActions from '../../redux/user/user-actions'

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const hiddenMenu = useSelector(state => state.user.hiddenMenu)

  useEffect(() => {
    if(!hiddenMenu) {
      dispatch(userActions.toggleMenuHidden());
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname, dispatch]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
