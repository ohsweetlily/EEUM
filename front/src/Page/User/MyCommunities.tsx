import React, { useState, ReactNode, useEffect, useMemo } from "react";
import * as SC from "./MyCommunitiesSC";
import { Board } from "../../Types/Community.type";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { range, chunk } from "../../Utils/common";
import { useGetMyCommunities, useGetLoginedUser } from "../../Component/Hook/User.hook";

const tableHeadData = [
    { id: 0, head: "글머리" },
    { id: 1, head: "제목 (댓글 수)" },
    { id: 2, head: "날짜" },
    { id: 3, head: "작성자" },
    { id: 4, head: "조회수" },
];

interface TableProps {
    children: ReactNode;
    tableHeadData?: {
        id: number;
        head: string;
    }[];
    posts: Board[];
}

interface BulletPointProps {
    text: string;
}

const BulletPoint = ({ text }: BulletPointProps) => {
    return <SC.StyledBulletPoint>{text}</SC.StyledBulletPoint>;
};

const MyCommunities: React.FC = () => {
    const navigate = useNavigate();
    const elementsSize = 10;
    const [searchParams, setSearchParams] = useSearchParams();
    const { LoginedUser } = useGetLoginedUser();
    const userId = LoginedUser?.data.item.id
    const currentPage = parseInt(searchParams.get("page") as string) || 1;
    const { communityList, totalPage, isLoading } = useGetMyCommunities(
        currentPage,
        elementsSize,
        userId
    );


    const screenPages = useMemo(() => {
        if (!totalPage) return [];

        return chunk(range(1, totalPage), elementsSize);
    }, [totalPage]);

    const currentScreenPageIndex = useMemo(() => {
        return screenPages.findIndex((pages) => {
            return pages.includes(currentPage);
        });
    }, [screenPages, currentPage]);

    const CommunityListTable = ({
        children,
        tableHeadData,
        posts,
    }: TableProps) => {
        return (
            <SC.ListTable>
                {tableHeadData && (
                    <SC.TableHead>
                        <tr>
                            {tableHeadData.map((item, index) => (
                                <th key={index}>{item.head}</th>
                            ))}
                        </tr>
                    </SC.TableHead>
                )}
                <SC.TableBody>
                    {children}

                    {posts && posts.length === 0 && !isLoading && (
                        <tr>
                            <td colSpan={99}>게시글이 없습니다.</td>
                        </tr>
                    )}
                </SC.TableBody>
            </SC.ListTable>
        );
    };

    const handlePageUp = () => {
        setSearchParams({ page: `${currentPage + 1}` });
    };

    const handlePageDown = () => {
        setSearchParams({ page: `${currentPage - 1}` });
    };

    const handlePageMove = (newPage: number) => {
        setSearchParams({ page: `${newPage}` });
    };

    return (
        <SC.CommunityListMain>
            <h1>EEUM</h1>
            {isLoading && (
                <SC.LoadingDiv>
                    <PacmanLoader color="#c996cc" size={75} />
                </SC.LoadingDiv>
            )}
            {!isLoading && (
                <>
                    <SC.ButtonDiv>
                        <button
                            onClick={() => {
                                navigate("/PostCommunity");
                            }}>
                            글쓰기
                        </button>
                    </SC.ButtonDiv>
                    <CommunityListTable
                        tableHeadData={tableHeadData}
                        posts={communityList}>
                        {communityList &&
                            communityList!.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            <BulletPoint text={item.category} />
                                        </td>
                                        <td>
                                            <Link
                                                to={`/CommunityDetail/${item.id}`}
                                                style={{
                                                    textDecoration: "none",
                                                    color: "black",
                                                }}>
                                                {item.title} (
                                                {item.commentCount})
                                            </Link>
                                        </td>
                                        <td>
                                            {item.createdAt.slice(0, 10)}{" "}
                                            {item.createdAt.slice(11, 19)}
                                        </td>
                                        <td>{item.authorName}</td>
                                        <td>{item.views}</td>
                                    </tr>
                                );
                            })}
                    </CommunityListTable>
                    <SC.Button>
                        {currentPage > 1 && (
                            <button
                                style={{
                                    backgroundColor: "#916BBF",
                                    color: "#FFFFFF",
                                }}
                                onClick={handlePageDown}>
                                &lt;
                            </button>
                        )}
                        {screenPages.length ? (
                            screenPages[currentScreenPageIndex].map((page) => {
                                return (
                                    <button
                                        style={{
                                            backgroundColor:
                                                page === currentPage
                                                    ? "#916BBF"
                                                    : undefined,
                                            color:
                                                page === currentPage
                                                    ? "#FFFFFF"
                                                    : undefined,
                                        }}
                                        onClick={() => {
                                            handlePageMove(page);
                                        }}>
                                        {page}
                                    </button>
                                );
                            })
                        ) : (
                            <></>
                        )}
                        {currentPage !== totalPage && (
                            <button
                                style={{
                                    backgroundColor: "#916BBF",
                                    color: "#FFFFFF",
                                }}
                                onClick={handlePageUp}>
                                &gt;
                            </button>
                        )}
                    </SC.Button>
                </>
            )}
        </SC.CommunityListMain>
    );
};

export default MyCommunities;
