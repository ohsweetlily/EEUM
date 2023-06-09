from sqlalchemy import Column, BigInteger, Numeric, DateTime, Boolean, String
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


# 일기 감정 분석 테이블에 대응하는 entity class
class Food(Base):
    __tablename__ = 'foods'

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    emotion = Column(String, nullable=False)
    image_url = Column(String, nullable=False)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow())
    updated_at = Column(DateTime, default=None)
    deleted_at = Column(DateTime, default=None)
    is_deleted = Column(Boolean, nullable=False, default=False)

    def __repr__(self) -> str:
        return f"<Food(id='{self.id}', name='{self.name}', emotion='{self.emotion}', image_url='{self.image_url}', created_at='{self.created_at}', updated_at='{self.updated_at}', deleted_at='{self.deleted_at}', is_deleted='{self.is_deleted}')>"
