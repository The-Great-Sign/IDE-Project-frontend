import useUserStore from '../../store/userStore';
import StyledLink from '../../styles/StyledLink';
import LoginSignUpLink from './LoginSignUpLink/LoginSignUpLink';
import { HeaderContainer, Logo } from './MainHeader.style';
import UserInfo from './UserInfo/UserInfo';

const MainHeader = () => {
  const { isLoggedIn } = useUserStore();

  return (
    <>
      <HeaderContainer>
        <Logo>DJIDE</Logo>
        <StyledLink
          to="/mypage"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {isLoggedIn ? <UserInfo /> : <LoginSignUpLink />}
        </StyledLink>
      </HeaderContainer>
    </>
  );
};

export default MainHeader;
