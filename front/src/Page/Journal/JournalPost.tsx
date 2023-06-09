import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import * as SC from "./JournalPostSC";
import { useCreateJournal } from "../../Component/Hook/Journal.hook";
import { useRedirectLoginPage } from "../../Component/Hook/User.hook";

const JournalPost: React.FC = () => {
    useRedirectLoginPage();

    const { createJournal, isLoading, isError } = useCreateJournal();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [publishedDate, setPublishedDate] = useState(new Date());

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();

        await createJournal(
            {
                title: title,
                content: content,
                publishedDate: publishedDate,
            },
            {
                onSuccess(res) {
                    console.log(res);
                    alert("작성이 완료 되었습니다!");
                    window.location.href = "/JournalCheck";
                },
                onError(err) {
                    console.log(err);
                    alert("다시 작성해 주세요.");
                },
            }
        );
    };

    return (
        <SC.JournalPostMain>
            <h1>EEUM : 나와 연결된, 일기</h1>
            <SC.TitleDate2>
                <div>
                    <DatePicker
                        locale={ko}
                        dateFormat="yyyy-MM-dd"
                        // 오늘 이전 날짜만 선택 가능
                        maxDate={new Date()}
                        selected={publishedDate}
                        onChange={(date: Date) => setPublishedDate(date)}
                    />
                </div>
            </SC.TitleDate2>
            <SC.TitleDate>
                <input
                    autoFocus
                    placeholder="일기 제목"
                    name="title"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
                    }
                />
            </SC.TitleDate>
            <SC.JournalPost>
                <textarea
                    placeholder="당신의 이야기를 들려주세요"
                    name="content"
                    maxLength={100}
                    value={content}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setContent(e.target.value)
                    }
                />
            </SC.JournalPost>
            <SC.ButtonDiv>
                <button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "일기 전송 중" : "일기 작성"}
                </button>
            </SC.ButtonDiv>
        </SC.JournalPostMain>
    );
};

export default JournalPost;
