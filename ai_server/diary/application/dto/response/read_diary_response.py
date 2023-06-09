from dataclasses import dataclass, asdict
import json

from diary.domain.diary import Diary


@dataclass
class ReadDiaryResponse:
    id: int
    content: str

    def __init__(self, id: int, content: str):
        self.id: int = id
        self.content: str = content

    @staticmethod
    def from_entity(diary: Diary) -> 'ReadDiaryResponse':
        id, content = diary.id, diary.content
        return ReadDiaryResponse(id=id, content=content)

    def to_json(self) -> str:
        print(self)
        response_dict = {k: v for k, v in asdict(self).items() if v}
        return json.dumps(response_dict, ensure_ascii=False)
