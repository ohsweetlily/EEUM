import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { useGetLoginedUser, useEditUser } from "../../Component/Hook/User.hook";
import * as SC from "./JoinUserSC";
import { UserdataRequest } from "../../Types/Userdata.type";
import Modal from "../../Component/Base/Modal";

const Myinfo = () => {
    const { LoginedUser} = useGetLoginedUser();
    const userdata = LoginedUser?.data.item;

    const { editUserdata } = useEditUser();
    const [isModal, setIsModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
        setIsModal(!isModal);
        console.log(isModal);
    }, [isModal]);

    const [newUserdata, setNewUserdata] = useState<UserdataRequest>({
        email: userdata?.email || "",
        password: "",
        firstName: userdata?.nameInfo.firstName || "",
        lastName: userdata?.nameInfo.lastName || "",
        nickname: userdata?.nickname || "",
        phoneNumber: userdata?.phoneNumber || "",
        gender: userdata?.gender || "",
        birthYear: userdata?.birthInfo.year || 0,
        birthMonth: userdata?.birthInfo.month || 0,
        birthDate: userdata?.birthInfo.date || 0,
        profilePhotoUrl: userdata?.profilePhotoUrl || "",
        zipCode: userdata?.addressInfo.zipCode || 0,
        mainAddress: userdata?.addressInfo.mainAddress || "",
        detailAddress: userdata?.addressInfo.detailAddress || "",
    });

    const id = userdata?.id;

    const submitHandler = async (e: React.MouseEvent) => {
        e.preventDefault();
        await editUserdata(
            { id, body: newUserdata },
            {
                onSuccess(res) {
                    alert("정보 수정 완료!");
                    window.location.href = "/"
                },
                onError(err) {
                    alert("정보 수정 실패....");
                },
            }
        );
    };

    const changeHandlerString = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUserdata((curUserdata) => {
            return { ...curUserdata, [e.target.name]: e.target.value };
        });
    };

    const changeHandlerNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUserdata((curUserdata) => {
            return { ...curUserdata, [e.target.name]: Number(e.target.value) };
        });
    };



    if (!userdata) {
        return <></>;
    }

    return (
        <SC.JoinContainer>
            <SC.InfoTitle>나의 정보</SC.InfoTitle>
            <SC.JoinDiv1>
                <SC.JoinItem>
                    <label>이메일</label>
                    <SC.DefaultInput
                        type="text"
                        name="email"
                        value={userdata?.email}
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
                    <SC.DefaultInput type="password" name="confirmPW" />
                </SC.JoinItem>
            </SC.JoinDiv1>
            <SC.JoinDiv2>
                <SC.JoinItem>
                    <label>이름</label>
                    <SC.NameInput
                        type="text"
                        name="lastName"
                        defaultValue={userdata?.nameInfo.lastName}
                        onChange={changeHandlerString}
                    />
                    <SC.NameInput
                        type="text"
                        name="firstName"
                        defaultValue={userdata?.nameInfo.firstName}
                        onChange={changeHandlerString}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>닉네임</label>
                    <SC.DefaultInput
                        type="text"
                        name="nickname"
                        placeholder="dong"
                        defaultValue={userdata?.nickname}
                        onChange={changeHandlerString}
                    />
                </SC.JoinItem>

                <SC.JoinItem>
                    <label>생년월일</label>
                    <SC.BirthInput
                        type="number"
                        name="birthYear"
                        defaultValue={userdata?.birthInfo.year}
                        onChange={changeHandlerNumber}
                    />
                    <SC.BirthInput
                        type="number"
                        name="birthMonth"
                        defaultValue={userdata?.birthInfo.month}
                        onChange={changeHandlerNumber}
                    />
                    <SC.BirthInput
                        type="number"
                        name="birthDate"
                        defaultValue={userdata?.birthInfo.date}
                        onChange={changeHandlerNumber}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>성별</label>
                    <div className="First">
                        <div className="Second">
                            <input type="radio" name="gender" value="MALE" checked={userdata?.gender === 'MALE'} />
                            <p>남자</p>
                        </div>
                        <div className="Second">
                            <input type="radio" name="gender" value="FEMALE"  checked={userdata?.gender === 'FEMALE'}/>
                            <p>여자</p>
                        </div>
                    </div>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>휴대폰 번호</label>
                    <SC.DefaultInput
                        type="text"
                        name="phoneNumber"
                        defaultValue={userdata?.phoneNumber}
                        onChange={changeHandlerString}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>주소</label>
                    <div className="Second">
                        <SC.AddressInput
                            type="text"
                            name="zipCode"
                            defaultValue={userdata?.addressInfo.zipCode}
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
                            defaultValue={userdata?.addressInfo.mainAddress}
                            onChange={changeHandlerString}
                        />
                        <SC.AddressInput
                            type="text"
                            name="detailAddress"
                            defaultValue={userdata?.addressInfo.detailAddress}
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
                <SC.ConfirmButton onClick={submitHandler}>
                    수정
                </SC.ConfirmButton>
            </SC.ButtonDiv>
        </SC.JoinContainer>
    );
};

export default Myinfo;
