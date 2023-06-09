from typing import Optional

from diary.application.dto.response.read_diary_response import ReadDiaryResponse
from diary.domain.diary import Diary
from diary.domain.diary_dao import DiaryDao


# Diary에 관한 비지니스 로직을 처리하는 service 클래스
class DiaryService:
    diary_dao: DiaryDao

    def __init__(self, diary_dao: DiaryDao):
        self.diary_dao: DiaryDao = diary_dao

    # id를 기반으로 일기를 가져오는 메소드
    def find_by_id(self, id: int) -> Optional[ReadDiaryResponse]:
        found_diary: Optional[Diary] = self.diary_dao.find_by_id(id)

        return ReadDiaryResponse.from_entity(found_diary) if found_diary is not None else None
