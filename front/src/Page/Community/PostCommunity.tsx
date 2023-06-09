import React, { useState } from "react";
import * as SC from "./PostCommunitySC";
import { usePostCommunity } from "../../Component/Hook/Community.hook";
import { useRedirectLoginPage } from "../../Component/Hook/User.hook";
import RichEditor from "../../Component/Base/RichEditor";

const PostCommunity: React.FC = () => {
    const { postCommunity, isError } = usePostCommunity();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    useRedirectLoginPage();

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        await postCommunity(
            {
                category: category,
                title: title,
                content: content,
            },
            {
                onSuccess(res) {
                    console.log(res);
                    alert("작성이 완료 되었습니다!");
                    window.location.href = "/CommunityList";
                },
                onError(err) {
                    console.log(err);
                    alert("다시 작성해 주세요.");
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
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setCategory(e.target.value)
                    }>
                    <option value="none">글머리 선택</option>
                    <option value="RESTAURANT">맛집</option>
                    <option value="RECIPE">레시피</option>
                </select>
                <input
                    autoFocus
                    placeholder="글 제목을 적어주세요"
                    name="title"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
                    }
                />
            </SC.Title>
            <SC.PostCommunity>
                <RichEditor
                    value={content}
                    onChange={(content: string) => setContent(content)}
                />
            </SC.PostCommunity>
            <SC.ButtonDiv>
                <button onClick={handleSubmit}>커뮤니티 글 작성</button>
            </SC.ButtonDiv>
        </SC.PostCommunityMain>
    );
};

export default PostCommunity;
