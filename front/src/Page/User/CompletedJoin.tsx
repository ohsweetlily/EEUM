import * as SC from "./UserSC";
import { useNavigate } from "react-router-dom";



const CompletedJoin = () => {
    const navigate = useNavigate();
    return (
        <SC.JoinContainer>
            <SC.JoinTitle>환영합니다</SC.JoinTitle>
            <SC.JoinTitle>회원가입이 완료되었습니다</SC.JoinTitle>
            <SC.ButtonDiv><SC.ConfirmButton onClick={()=>{navigate('/Login')}}>로그인</SC.ConfirmButton></SC.ButtonDiv>
            <img
                src="https://img.freepik.com/free-vector/team-of-business-people-putting-hands-up-together_74855-19906.jpg?w=1800&t=st=1682947332~exp=1682947932~hmac=51ad11a9faf1c7720bc483020cdfb33641720bbd462fad8e04ea97cc4ba29ed0"
                width="100%"
            />
        </SC.JoinContainer>
    );
};

export default CompletedJoin;
