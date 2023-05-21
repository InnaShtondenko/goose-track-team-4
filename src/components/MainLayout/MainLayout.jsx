import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Loader from 'components/Loader/Loader';

import {
  StyledMain,
  WrapperMain,
  WrapperSideBarContent,
  WrapperMainContent,
} from './MainLayout.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLoading } from 'redux/auth/auth.selectors';
import { refreshUser } from 'redux/auth/auth.operations';

const isUserNull = user => {
  const { name, email } = user;
  return name === null || email === null ? true : false;
};

const MainLayout = () => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserNull(user)) dispatch(refreshUser());
  }, [dispatch, user]);

  return (
    <>
      {isLoading
        ? <Loader />
        : <StyledMain>
            <WrapperMain>
              <WrapperSideBarContent>
                <SideBar />
              </WrapperSideBarContent>
              <WrapperMainContent>
                <Header />
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </WrapperMainContent>
            </WrapperMain>
          </StyledMain>
        }
    </>
  );
};
export default MainLayout;
