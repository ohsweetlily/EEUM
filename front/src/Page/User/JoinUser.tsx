import React, { useState, useCallback, useRef } from "react";
import * as SC from "./JoinUserSC";
import { UserdataRequest } from "../../Types/Userdata.type";
import { useAsyncError, useNavigate } from "react-router-dom";
import { useJoinUser } from "../../Component/Hook/User.hook";
import Modal from "../../Component/Base/Modal";

const JoinUser: React.FC = () => {
    const navigate = useNavigate();
    const { createUserdata } = useJoinUser();
    const [userdata, setUserdata] = useState<UserdataRequest>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        nickname: "",
        phoneNumber: "",
        gender: "",
        birthYear: 0,
        birthMonth: 0,
        birthDate: 0,
        profilePhotoUrl: "",
        zipCode: 0,
        mainAddress: "",
        detailAddress: "",
    });
    const [isConfirm, setIsConfirm] = useState<boolean>(false);

    // 각 폼 입력시 onChange 이벤트
    const changeHandlerString = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, [e.target.name]: e.target.value };
        });
    };

    const changeHandlerNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, [e.target.name]: Number(e.target.value) };
        });
    };

    const checkedConfirmPW = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === userdata.password ){
            setIsConfirm(true)
        }
    };

    const submitHandler = async (e: React.MouseEvent) => {
        e.preventDefault();
        await createUserdata(userdata, {
            onSuccess(res) {
                console.log(res);
                alert("작성이 완료 되었습니다!");
                navigate("/CompletedJoin");
            },
            onError(err) {
                console.log(err);
                alert("다시 작성해 주세요.");
            },
        });
    };

    const [isModal, setIsModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
        setIsModal(!isModal);
        console.log(isModal);
    }, [isModal]);

    return (
        <SC.JoinContainer>
            <SC.InfoTitle>EEUM</SC.InfoTitle>
            <SC.JoinDiv1>
                <SC.JoinItem>
                    <label>이메일</label>
                    <SC.DefaultInput
                        type="text"
                        name="email"
                        onChange={changeHandlerString}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>비밀번호</label>
                    <SC.DefaultInput
                        type="password"
                        name="password"
                        onChange={changeHandlerString}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>비밀번호 확인</label>
                    <SC.DefaultInput
                        type="password"
                        name="confirmPW"
                        onChange={checkedConfirmPW}
                    />
                    {!isConfirm&& userdata.password.length > 0 && <p className="Confirm">비밀번호가 일치하지 않습니다.</p>}
                </SC.JoinItem>
            </SC.JoinDiv1>
            <SC.JoinDiv2>
                <SC.JoinItem>
                    <label>이름</label>
                    <SC.NameInput
                        type="text"
                        name="lastName"
                        placeholder="홍"
                        onChange={changeHandlerString}
                    />
                    <SC.NameInput
                        type="text"
                        name="firstName"
                        placeholder="길동"
                        onChange={changeHandlerString}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>닉네임</label>
                    <SC.DefaultInput
                        type="text"
                        name="nickname"
                        placeholder="dong"
                        onChange={changeHandlerString}
                    />
                </SC.JoinItem>

                <SC.JoinItem>
                    <label>생년월일</label>
                    <div>
                        <SC.BirthInput
                            type="text"
                            name="birthYear"
                            placeholder="Year"
                            onChange={changeHandlerNumber}
                        />
                        <SC.BirthInput
                            type="text"
                            name="birthMonth"
                            placeholder="Month"
                            onChange={changeHandlerNumber}
                        />
                        <SC.BirthInput
                            type="text"
                            name="birthDate"
                            placeholder="Date"
                            onChange={changeHandlerNumber}
                        />
                    </div>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>성별</label>
                    <div className="First">
                        <div className="Second">
                            <input
                                type="radio"
                                name="gender"
                                value="MALE"
                                onChange={changeHandlerString}
                            />
                            <p>남자</p>
                        </div>
                        <div className="Second">
                            <input
                                type="radio"
                                name="gender"
                                value="FEMALE"
                                onChange={changeHandlerString}
                            />
                            <p>여자</p>
                        </div>
                    </div>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>휴대폰 번호</label>
                    <SC.DefaultInput
                        type="text"
                        name="phoneNumber"
                        placeholder="010-1234-1234"
                        onChange={changeHandlerString}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>주소</label>
                    <div className="Second">
                        <SC.AddressInput
                            type="text"
                            name="zipCode"
                            placeholder="04799"
                            onChange={changeHandlerNumber}
                        />
                        {/* <button onClick={onClickToggleModal}>
                            우편번호 검색
                        </button>
                        {isModal && (
                            <Modal
                                onClickToggleModal={onClickToggleModal}></Modal>
                        )} */}
                    </div>
                    <div className="Second">
                        <SC.AddressInput
                            type="text"
                            name="mainAddress"
                            placeholder="서울시 성동구 광나루로6길"
                            onChange={changeHandlerString}
                        />
                        <SC.AddressInput
                            type="text"
                            name="detailAddress"
                            placeholder="49"
                            onChange={changeHandlerString}
                        />
                    </div>
                </SC.JoinItem>
                {/* <SC.JoinItem>
                    <label>프로필 사진</label>
                    <SC.ProfileInput
                        type="file"
                        name="profilePhotoUrl"
                        onChange={changeHandlerString}
                    />
                </SC.JoinItem> */}
            </SC.JoinDiv2>
            <SC.ButtonDiv>
                <SC.CancelButton
                    type="button"
                    onClick={() => {
                        navigate("/");
                    }}>
                    취소
                </SC.CancelButton>
                <SC.ConfirmButton onClick={submitHandler}>
                    확인
                </SC.ConfirmButton>
            </SC.ButtonDiv>
        </SC.JoinContainer>
    );
};

export default JoinUser;
