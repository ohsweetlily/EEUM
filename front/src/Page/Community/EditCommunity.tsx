import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as SC from "./PostCommunitySC";
import {
    useCommunityDetail,
    useEditCommunity,
} from "../../Component/Hook/Community.hook";
import {
    useGetLoginedUser,
    useRedirectLoginPage,
} from "../../Component/Hook/User.hook";
import RichEditor from "../../Component/Base/RichEditor";
import { PostBoard } from "../../Types/Community.type";

const EditCommunity: React.FC = () => {
    const { id } = useParams();
    const { item } = useCommunityDetail(Number(id));
    const { editCommunity, isError, isLoading } = useEditCommunity();
    const [editContent, setEditContent] = useState<PostBoard>({
        category: item?.category || "",
        title: item?.title || "",
        content: item?.content || "",
    });

    useRedirectLoginPage();

    const navigate = useNavigate();
    const { LoginedUser } = useGetLoginedUser();

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();

        await editCommunity(
            {
                id: Number(id),
                body: editContent,
            },
            {
                onSuccess(res) {
                    alert("수정이 완료 되었습니다!");
                    window.location.href = `/CommunityDetail/${id}`;
                },
                onError(err) {
                    alert("수정이 되지 않았습니다. 다시 작성해 주세요.");
                },
            }
        );
    };

    return (
        <SC.PostCommunityMain>
            <h1>커뮤니티</h1>
            <br />
            <SC.Title>
                <select
                    name="category"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setEditContent((curContent) => {
                            return { ...curContent, category: e.target.value };
                        });
                    }}
                    defaultValue={item?.category}>
                    <option value="none">글머리 선택</option>
                    <option value="RESTAURANT">맛집</option>
                    <option value="RECIPE">레시피</option>
                </select>
                <input
                    autoFocus
                    placeholder="글 제목을 적어주세요"
                    name="title"
                    defaultValue={item?.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEditContent((curContent) => {
                            return { ...curContent, title: e.target.value };
                        });
                    }}
                />
            </SC.Title>
            <SC.PostCommunity>
                <RichEditor
                    value={editContent.content}
                    onChange={(content: string) => {
                        setEditContent((curContent) => {
                            return { ...curContent, content: content };
                        });
                    }}
                />
            </SC.PostCommunity>

            <SC.ButtonDiv>
                <button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "수정중.." : "커뮤니티 글 수정"}
                </button>
            </SC.ButtonDiv>
        </SC.PostCommunityMain>
    );
};

export default EditCommunity;
