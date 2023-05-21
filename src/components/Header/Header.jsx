import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getTasks } from 'redux/tasks/tasks.selectors';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import UserInfo from 'components/UserInfo/UserInfo';
import {
  HeaderStyled,
  ButtonStyled,
  ForTheGloryOfMentors,
  PageName,
  BurgerSVGStyled,
  UserMenu,
  SiteNameContainer,
  GooseContainer,
  PageContainer,
  TakeToWork,
} from './Header.styled';

const handleClick = ({ currentTarget }) => {
  currentTarget.disabled = true;
  currentTarget.style.pointerEvents = 'none';
  currentTarget.blur();

  document.querySelector('#sideBar').style.display = 'block';
};

const Header = () => {
  const { pathname } = useLocation();

  const tasks = useSelector(getTasks);

  const isVisibleGoose = tasks.some(
    task =>
      new Date(task.date).setHours(0, 0, 0, 0) ===
      new Date().setHours(0, 0, 0, 0) && task.category !== "Done"
  );

  return (
    <HeaderStyled>
      <ButtonStyled type="button" onClick={handleClick} id="burgerBtn">
        <BurgerSVGStyled />
      </ButtonStyled>
      <SiteNameContainer>
        <GooseContainer isVisible={isVisibleGoose}>
          <ForTheGloryOfMentors />
        </GooseContainer>
        <PageContainer>
          <PageName isVisible={isVisibleGoose}>
            {pathname === '/account' ? 'User Profile' : 'Calendar'}
          </PageName>
          <TakeToWork isVisible={isVisibleGoose}>
            <p>
              <span>Let go</span> of the past and focus on the present!
            </p>
          </TakeToWork>
        </PageContainer>
      </SiteNameContainer>
      <UserMenu>
        <ThemeToggle />
        <UserInfo />
      </UserMenu>
    </HeaderStyled>
  );
};

export default Header;
