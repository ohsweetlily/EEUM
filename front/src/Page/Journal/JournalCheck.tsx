import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useJournalList } from "../../Component/Hook/Journal.hook";
import { useRedirectLoginPage } from "../../Component/Hook/User.hook";
import * as SC from "./JournalCheckSC";

const elementsSize = 8;

const JournalCheck: React.FC = () => {
    useRedirectLoginPage();
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get("page") as string) || 1;

    const { journalList, totalPage } = useJournalList(
        currentPage,
        elementsSize
    );

    const handlePageUp = () => {
        setSearchParams({ page: `${currentPage + 1}` });
    };

    const handlePageDown = () => {
        setSearchParams({ page: `${currentPage - 1}` });
    };

    return (
        <>
            <SC.JournalList>
                {journalList.map((journal) => {
                    return (
                        <SC.Journal>
                            <Link
                                to={`/JournalDetail/${journal.id}`}
                                key={journal.id}>
                                <div>
                                    <p key="journalDate">
                                        {journal.publishedDate}
                                    </p>
                                    <h2 key="journalEmo">{journal.emotion}</h2>
                                    <h3 key="journalTi">{journal.title}</h3>
                                </div>
                                <img src={journal?.recommendedFood?.imageUrl} alt = 'Food'></img>
                            </Link>
                        </SC.Journal>
                    );
                })}
            </SC.JournalList>
            {totalPage !== undefined && (
                <SC.Button>
                    {currentPage > 1 && (
                        <button onClick={handlePageDown}>이전 페이지</button>
                    )}
                    {currentPage !== totalPage && (
                        <button onClick={handlePageUp}>다음 페이지</button>
                    )}
                </SC.Button>
            )}
        </>
    );
};

export default JournalCheck;
