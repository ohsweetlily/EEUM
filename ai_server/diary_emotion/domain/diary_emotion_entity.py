from sqlalchemy import Column, BigInteger, Numeric, DateTime, Boolean, String
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


# 일기 감정 분석 테이블에 대응하는 entity class
class DiaryEmotion(Base):
    __tablename__ = 'diary_emotions'

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    diary_id = Column(BigInteger, nullable=False)
    worry_score = Column(Numeric(4, 2), nullable=False)
    angry_score = Column(Numeric(4, 2), nullable=False)
    happy_score = Column(Numeric(4, 2), nullable=False)
    excited_score = Column(Numeric(4, 2), nullable=False)
    sad_score = Column(Numeric(4, 2), nullable=False)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow())
    updated_at = Column(DateTime, default=None)
    deleted_at = Column(DateTime, default=None)
    is_deleted = Column(Boolean, nullable=False, default=False)

    def __repr__(self) -> str:
        return f"<DiaryEmotion(id='{self.id}', diary_id='{self.diary_id}', worry_score='{self.worry_score}', angry_score='{self.angry_score}', happy_score='{self.happy_score}', excited_score='{self.excited_score}', sad_score='{self.sad_score}', created_at='{self.created_at}', updated_at='{self.updated_at}', deleted_at='{self.deleted_at}', is_deleted='{self.is_deleted}')>"
