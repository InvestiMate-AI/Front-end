import React from "react";
import * as H from "../../styles/header.style";
import { Link } from "react-router-dom";
import constants from "../../utils/constants";

function Header({ isLoggedIn, userName }) {
  return (
    <header>
      <H.HeaderLayout>
        <Link to="/">
          <H.HomeButton>{constants.names.SERVICE_NAME_UPPER}</H.HomeButton>
        </Link>
        <H.NavContainer>
          <H.NavButton as={Link} to="/chat">
            {constants.names.CHAT_SERVICE_NAME}
          </H.NavButton>
          <H.NavButton as={Link} to="/feature2">
            {constants.names.FEEDBACK_SERVICE_NAME}
          </H.NavButton>
          <H.NavButton as={Link} to="/feature3">
            {constants.names.MANAGE_SERVICE_NAME}
          </H.NavButton>
        </H.NavContainer>
        <H.UserContainer>
          {isLoggedIn ? (
            <>
              <H.UserName>{userName}</H.UserName>
              <H.UserButton as={Link} to="/user-profile">
                Profile
              </H.UserButton>
            </>
          ) : (
            <H.LoginButton as={Link} to="/auth">
              로그인
            </H.LoginButton>
          )}
        </H.UserContainer>
      </H.HeaderLayout>
    </header>
  );
}

export default Header;
