import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJournalDetail } from "../../Component/Hook/Journal.hook";
import { getJournalDelete } from "../../Component/Api/PostJournal";
import { useRedirectLoginPage } from "../../Component/Hook/User.hook";
import * as SC from "./JournalDetailSC";

const JournalDetail: React.FC = () => {
    useRedirectLoginPage();

    const { id } = useParams();
    const { item } = useJournalDetail(Number(id));

    if (!item) {
        return <></>;
    }

    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            const res = await getJournalDelete(Number(id));
            alert("일기가 삭제 되었습니다.");
            window.location.href = "/JournalCheck";
        } catch (err) {
            console.log(err);
            alert("다시 시도해 주세요.");
        }
    };

    return (
        <SC.JouranlDetailMain>
            <h3>{item.publishedDate}</h3>
            <h4>{item.title}</h4>
            <hr />
            <SC.JournalDetail>
                <div>
                    <h1>{item.content}</h1>
                    <img src = {item?.recommendedFood?.imageUrl} alt = 'Food'/>
                </div>
            </SC.JournalDetail>
            <SC.EmotionDiv>
                <hr />
                <h1>
                    😡 : {item.emotionScores.angryScore}% &nbsp;🤭 :{" "}
                    {item.emotionScores.excitedScore}% &nbsp;😱 :{" "}
                    {item.emotionScores.worryScore}% &nbsp;😢 :{" "}
                    {item.emotionScores.sadScore}% &nbsp;😁 :{" "}
                    {item.emotionScores.happyScore}%
                </h1>
                <h1>당신의 감정은? : {item.emotion}</h1>
            </SC.EmotionDiv>
            
            <button onClick={handleDelete}>일기 삭제</button>
        </SC.JouranlDetailMain>
    );
};

export default JournalDetail;
