from typing import Optional

from flask_sqlalchemy import SQLAlchemy

from diary.domain.diary import Diary


class DiaryDao:
    db: SQLAlchemy

    def __init__(self, db: SQLAlchemy):
        self.db: SQLAlchemy = db

    # id를 이용해서 diary를 가져오는 메소드
    def find_by_id(self, id: int) -> Optional[Diary]:
        found_diary: Optional[Diary] = self.db.session.query(Diary).filter_by(id=id).first()

        return found_diary
