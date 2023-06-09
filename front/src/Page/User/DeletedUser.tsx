import { useNavigate } from "react-router";
import {
    useDeleteUser,
    useGetLoginedUser,
} from "../../Component/Hook/User.hook";
import * as SC from "./DeletedUserSC";

const DeletedUser = () => {
    const navigate = useNavigate();
    const { deleteUser } = useDeleteUser();

    const { LoginedUser } = useGetLoginedUser();
    const userdata = LoginedUser?.data.item;

    const submitHandler = async (e: React.MouseEvent) => {
        if (userdata !== undefined) {
            await deleteUser(userdata?.id, {
                onSuccess(res) {
                    console.log(res);
                    localStorage.removeItem("token");
                    window.location.href = "/";
                },
                onError(err) {
                    console.log(err);
                    alert("회원탈퇴에 실패했습니다.");
                },
            });
        }
    };


    if (!userdata) {
        return <></>;
    }

    return (
        <SC.Container>
            <SC.InfoTitle>다른 사람들과 연결을 끊겠습니까?</SC.InfoTitle>
            <img
                src="https://img.freepik.com/free-vector/corporate-portrait-of-office-workers-and-employees_74855-5471.jpg?w=1800&t=st=1684426379~exp=1684426979~hmac=f6532ae46ecaadfcce7c3b2f42572d4c18f1d0b4ecd9a813b6dc2b835e048578"
                width="100%"
            />
            <SC.ButtonDiv>
                <SC.ConfirmButton onClick={submitHandler}>
                    탈퇴
                </SC.ConfirmButton>
            </SC.ButtonDiv>
        </SC.Container>
    );
};

export default DeletedUser;
