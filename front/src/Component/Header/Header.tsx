import React from "react";
import { NavLink } from "react-router-dom";
import * as SC from "./HeaderSC";
import { useGetLoginedUser } from "../Hook/User.hook";

const Header: React.FC = () => {
    const { isLogined } = useGetLoginedUser();

    const logoutHandler = (e: React.MouseEvent) => {
        e.preventDefault();
  
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <SC.Header>
            <NavLink to="/">
                <img src="/Img/logo.png" alt="logo" />
            </NavLink>
            <NavLink to="/JournalPost">일기쓰기</NavLink>
            <NavLink to="/JournalCheck">일기조회</NavLink>
            <NavLink to="/CommunityList">커뮤니티</NavLink>

            {isLogined ? (
                <div className="LogoutDiv">
                    <NavLink to="/My/Info">마이페이지</NavLink>
                    <button onClick={logoutHandler}>로그아웃</button>
                </div>
            ) : (
                <div>
                    <NavLink to="/Login">로그인</NavLink>
                    <NavLink to="/UserJoin">회원가입</NavLink>
                </div>
            )}
        </SC.Header>
    );
};

export default Header;
