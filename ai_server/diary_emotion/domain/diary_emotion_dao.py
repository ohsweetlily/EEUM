from flask_sqlalchemy import SQLAlchemy

from diary_emotion.domain.diary_emotion_entity import DiaryEmotion


# Diary Emotion을 등록하는데 사용하는 dao 클래스
class DiaryEmotionDao:
    db: SQLAlchemy

    def __init__(self, db: SQLAlchemy):
        self.db: SQLAlchemy = db

    # create
    def create(self, diary_emotion: DiaryEmotion) -> DiaryEmotion:
        self.db.session.add(diary_emotion)
        return diary_emotion
