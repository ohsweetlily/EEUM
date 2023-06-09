from diary_emotion.application.dto.request.analyze_request import AnalyzeRequest
from diary_emotion.application.dto.response.create_diary_emotion_response import CreateDiaryEmotionResponse
from diary_emotion.application.model.emotion_analyzer import EmotionAnalyzer
from diary_emotion.domain.diary_emotion_dao import DiaryEmotionDao
from diary_emotion.domain.diary_emotion_entity import DiaryEmotion
from flask_sqlalchemy import SQLAlchemy


# 일기 감정 분석에 관한 비지니스 로직을 처리하는 클래스
class DiaryEmotionsService:
    diary_emotion_dao: DiaryEmotionDao
    emotion_analyzer: EmotionAnalyzer

    def __init__(self, diary_emotion_dao: DiaryEmotionDao, emotion_analyzer: EmotionAnalyzer):
        self.diary_emotion_dao: DiaryEmotionDao = diary_emotion_dao
        self.emotion_analyzer: EmotionAnalyzer = emotion_analyzer

    # 일기 감정 분석 요청을 받아서 분석 결과를 모두 db에 저장하는 메소드
    def analyze(self, analyze_request: AnalyzeRequest) -> CreateDiaryEmotionResponse:
        summarized_result: dict[str, float] = self.emotion_analyzer.get_summarized_result(analyze_request.paragraph)

        diary_emotion = self._extract_entity_from_analysis_result(analyze_request.diary_id, summarized_result)

        created_diary_emotion = self.diary_emotion_dao.create(diary_emotion)

        return CreateDiaryEmotionResponse.from_entity(created_diary_emotion)

    # 감정 분석 결과로부터 DiaryEmotion 엔티티를 생성하는 메소드
    def _extract_entity_from_analysis_result(self, diary_id: int, summarized_result: dict[str, float]) -> DiaryEmotion:
        return DiaryEmotion(diary_id=diary_id, worry_score=summarized_result['걱정'],
                            angry_score=summarized_result['분노'],
                            happy_score=summarized_result['행복'],
                            excited_score=summarized_result['설렘'],
                            sad_score=summarized_result['슬픔']
                            )
