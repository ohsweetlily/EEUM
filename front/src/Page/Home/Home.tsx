import React from "react";
import * as SC from "./HomeSC"

const Home : React.FC = () => {

    return(
        <>
            <SC.Home>
                {/* 로그인 상태, 비로그인 상태 별로 출력하는 화면 다르게 예정
                로그인 상태 = 일기 쓰기
                비로그인 상태 = 서비스 소개 */}

                {/* 비로그인 상태 서비스 소개 페이지 */}
                <>
                    <SC.Intro1></SC.Intro1>
                    <SC.Intro2>
                        {/* 음식사진 나오면 사진 변경 */}
                        <img src = 'Img/JournalPost.png' alt = 'JournalPost'/>
                        <img src = 'Img/JournalDetail.png' alt = 'JournalDetail'/>
                        <div>
                            <h1>오늘 하루는 안녕하셨나요?</h1>
                            <h1>내일이 되면, 오늘을 잊어버리게 됩니다.</h1>
                            <h1>오늘 나의 하루를 정리하고</h1>
                            <h1>맛있는 야식추천과 하루를 마무리하면 어떨까요?</h1>
                        </div>
                    </SC.Intro2>
                    <SC.Intro3><h1>나와 연결된, 다른 사람들</h1></SC.Intro3>
                    <SC.Intro4>
                    <img src = 'Img/Community1.png' alt = 'Community1'/>
                        <img src = 'Img/Community2.png' alt = 'Community2'/>
                        <div>
                            <h1>맛있는 레시피가 궁금할 때,</h1>
                            <h1>혹은 나만 아는 맛집을 공유하고 싶을 때,</h1>
                            <h1>게시판을 통해</h1>
                            <h1>도움을 받아보세요!</h1>
                        </div>
                    </SC.Intro4>
                </>
            </SC.Home>
        </>
    )
}

export default Home;