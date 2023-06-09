from diary.application.service.diary_service import DiaryService
from diary.presentation.consumer.diary_consumer import DiaryConsumer

from flask import Blueprint


# Diary에 대한 엔드포인트를 정의하는 클래스
class DiaryController:
    def __init__(self, diary_service: DiaryService, diary_consumer: DiaryConsumer):
        self.diary_service: DiaryService = diary_service
        self.diary_consumer: DiaryConsumer = diary_consumer

        # bp 객체 정의
        self.bp: Blueprint = Blueprint('diaries', __name__)

        # bp url binding rule 정의
        self.bp.add_url_rule('', 'consume_messages', self.consume_messages, methods=['POST'])

    def consume_messages(self) -> str:
        result: str = self.diary_consumer.consume_created_message()
        return result
