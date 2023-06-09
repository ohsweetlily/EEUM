import * as SC from "./CommunityDetailSC";
import { useState } from "react";
import { PostBoardComment } from "../../Types/Community.type";
import {
    useCommunityDetail,
    useDeleteCommunity,
    useDeleteCommunityComment,
    usePostCommunityComment,
} from "../../Component/Hook/Community.hook";
import { useNavigate, useParams } from "react-router-dom";
import {
    useGetLoginedUser,
    useRedirectLoginPage,
} from "../../Component/Hook/User.hook";

interface BulletPointProps {
    text: string;
}

const BulletPoint = ({ text }: BulletPointProps) => {
    return <SC.StyledBulletPoint>{text}</SC.StyledBulletPoint>;
};

const CommunityDetail: React.FC = () => {
    const { id } = useParams();
    const { item } = useCommunityDetail(Number(id));
    const { deleteCommunity } = useDeleteCommunity();
    const { postCommunityComment } = usePostCommunityComment();
    const navigate = useNavigate();
    const { LoginedUser } = useGetLoginedUser();
    const [comment, setComment] = useState<PostBoardComment>({ content: "" });
    const { deleteCommunityComment } = useDeleteCommunityComment();

    useRedirectLoginPage();

    const deleteBoardHandler = async (e: React.MouseEvent) => {
        e.preventDefault();

        await deleteCommunity(Number(id), {
            onSuccess(res) {
                alert("글 삭제가 완료되었습니다.");
                window.location.href = "/CommunityList";
            },
            onError(err) {
                alert("글 삭제 권한이 없습니다.");
            },
        });
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        await postCommunityComment(
            {
                id: item?.id,
                body: comment,
            },
            {
                onSuccess(res) {
                    alert("작성이 완료 되었습니다!");
                    window.location.href = `/CommunityDetail/${item?.id}`;
                },
                onError(err) {
                    alert("다시 작성해 주세요.");
                },
            }
        );
    };

    const deleteCommentHandler = async (
        e: React.MouseEvent,
        commentId: Number
    ) => {
        e.preventDefault();
        await deleteCommunityComment(
            {
                boardId: item?.id,
                commentId: commentId,
            },
            {
                onSuccess(res) {
                    alert("댓글 삭제가 완료되었습니다.");
                    window.location.href = `/CommunityDetail/${item?.id}`;
                },
                onError(err) {
                    alert("댓글 삭제 권한이 없습니다.");
                },
            }
        );
    };

    if (!item) {
        return <></>;
    }

    return (
        <SC.CommunityDetailMain>
            <h1>커뮤니티</h1>
            <br />
            <SC.CommunityDetailTitle1>
                <BulletPoint text={item.category} />
                <SC.TitleItem>{item.title}</SC.TitleItem>
            </SC.CommunityDetailTitle1>
            <SC.CommunityDetailTitle2>
                <div>{item.authorName}</div>
                <div>
                    {item.createdAt.slice(0, 10)} {item.createdAt.slice(11, 19)}
                </div>
                <div>조회수 {item.views}</div>
            </SC.CommunityDetailTitle2>
            <br />
            {LoginedUser?.data.item.id === item.userId && (
                <SC.ButtonDiv>
                    <button
                        onClick={() => {
                            navigate(`/EditCommunity/${item.id}`);
                        }}>
                        글 수정
                    </button>
                    <button onClick={deleteBoardHandler}>글 삭제</button>
                </SC.ButtonDiv>
            )}

            <br />
            <SC.CommunityDetailContent
                dangerouslySetInnerHTML={{
                    __html: item.content,
                }}></SC.CommunityDetailContent>
            <br />
            <SC.CommunityCommentTitle>
                <h3>댓글 ({item.commentList?.length})</h3>
            </SC.CommunityCommentTitle>

            <SC.CommunityCommentWrite>
                <h4>{LoginedUser?.data.item.nickname}</h4>
                <div>
                    <input
                        type="text"
                        name="content"
                        onChange={(e) => {
                            setComment((curComment) => {
                                return {
                                    ...curComment,
                                    [e.target.name]: e.target.value,
                                };
                            });
                        }}
                        required
                    />
                    <label>댓글을 작성해주세요.</label>
                    <span></span>
                </div>
                <button onClick={handleSubmit}>작성</button>
            </SC.CommunityCommentWrite>
            <br />
            {item.commentList &&
                item.commentList.map((item) => {
                    return (
                        <SC.CommunityCommentList>
                            <h4>{item.authorName}</h4>
                            <p>{item.content}</p>
                            {/* <button>수정</button> */}
                            {item.userId === LoginedUser?.data.item.id && (
                                <button
                                    onClick={(e) => {
                                        deleteCommentHandler(e, item.id);
                                    }}>
                                    삭제
                                </button>
                            )}
                        </SC.CommunityCommentList>
                    );
                })}
        </SC.CommunityDetailMain>
    );
};

export default CommunityDetail;
