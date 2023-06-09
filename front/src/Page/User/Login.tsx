import React, { useState } from "react";
import * as SC from "./LoginSC";
import { useLoginUser } from "../../Component/Hook/User.hook";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { loginUser, isError: isJoinUserError } = useLoginUser();

    const checkedEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const checkedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const submitHandler = async () => {
        //e.preventDefault();

        await loginUser(
            { email, password },
            {
                onSuccess(res) {
                    localStorage.setItem("token", res.data.item.jwtToken)
                    window.location.href = "/";
                },
                onError(err) {
                    console.log(err);
                    alert("사용자 이메일 또는 패스워드를 다시 확인해주세요");
                },
            }
        );
    };

    const handleOnKeyPress = (e : React.KeyboardEvent)=> {
        if (e.key === 'Enter') {
            submitHandler();
          }
    }

    return (
        <>
            <SC.LoginContainer>
                <SC.InfoDiv>
                    <SC.LoginItem>
                        <input
                            type="text"
                            placeholder="EMAIL"
                            name="email"
                            onChange={checkedEmail}
                        />
                    </SC.LoginItem>
                    <SC.LoginItem>
                        <input
                            type="password"
                            placeholder="PASSWORD"
                            onChange={checkedPassword}
                            onKeyDown={handleOnKeyPress} 
                        />
                    </SC.LoginItem>
                </SC.InfoDiv>
                <SC.ButtonDiv>
                    <SC.ConfirmButton onClick={submitHandler}>
                        로그인
                    </SC.ConfirmButton>
                </SC.ButtonDiv>
                <SC.AddedDiv>
                    {/* <button
                        onClick={() => {
                            navigate("/");
                        }}>
                        아이디/비밀번호 찾기
                    </button> */}
                    <button
                        onClick={() => {
                            navigate("/UserJoin");
                        }}>
                        회원가입
                    </button>
                </SC.AddedDiv>
            </SC.LoginContainer>
        </>
    );
};

export default Login;
