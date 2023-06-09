from sqlalchemy import Column, BigInteger, Numeric, DateTime, Boolean, String, Date
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, date

Base = declarative_base()


# 일기 테이블에 대응하는 entity class
class Diary(Base):
    __tablename__: str = 'diaries'

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    user_id = Column(BigInteger, nullable=False)
    title = Column(String, nullable=False)
    content = Column(String, nullable=False)
    weather = Column(String, nullable=True)
    published_date = Column(Date, nullable=False)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow())
    updated_at = Column(DateTime, default=None)
    deleted_at = Column(DateTime, default=None)
    is_deleted = Column(Boolean, nullable=False, default=False)

    def __repr__(self) -> str:
        return f"<Diary(id='{self.id}', user_id='{self.user_id}', title='{self.title}', content='{self.content}', weather='{self.weather}', published_date='{self.published_date}', created_at='{self.created_at}', updated_at='{self.updated_at}', deleted_at='{self.deleted_at}', is_deleted='{self.is_deleted}')>"
