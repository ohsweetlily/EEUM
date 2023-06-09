import * as SC from "./MypageSC";
import {NavLink, Routes, Route } from "react-router-dom";
import { useRedirectLoginPage } from "../../Component/Hook/User.hook";
import DeletedUser from "./DeletedUser";
import Myinfo from "./Myinfo";
import MyCommunities from "./MyCommunities";

const Mypage = () => {
    
    useRedirectLoginPage();

    const currentPage = {
        fontWeight: "bold",
        fontSize: "25px",
    };

    return (
        <SC.MypageContainer>
            <SC.TitleDiv>
                <ul>
                    <li>
                        <NavLink
                            to="/My/Info"
                            style={({ isActive }) =>
                                isActive ? currentPage : undefined
                            }>
                            나의 정보
                        </NavLink>
                    </li>
                    {" | "}
                    <li>
                        <NavLink
                            to="/My/Communities"
                            style={({ isActive }) =>
                                isActive ? currentPage : undefined
                            }>
                            나의 게시글
                        </NavLink>
                    </li>
                    {" | "}
                    <li>
                        <NavLink
                            to="/My/DeletedUser"
                            style={({ isActive }) =>
                                isActive ? currentPage : undefined
                            }>
                            회원탈퇴
                        </NavLink>
                    </li>
                </ul>
            </SC.TitleDiv>
            <div>
                <Routes>
                    <Route path="Info" element={<Myinfo />} />
                    <Route path="Communities" element={<MyCommunities />} />
                    <Route path="DeletedUser" element={<DeletedUser />} />
                </Routes>
            </div>
        </SC.MypageContainer>
    );
};

export default Mypage;
