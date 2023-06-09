from sqlalchemy import Column, BigInteger, Numeric, DateTime, Boolean, String
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


class RecommendedFood(Base):
    __tablename__ = 'recommended_foods'

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    diary_id = Column(BigInteger, nullable=False)
    food_name = Column(String, nullable=False)
    image_url = Column(String, nullable=True)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow())
    updated_at = Column(DateTime, default=None)
    deleted_at = Column(DateTime, default=None)
    is_deleted = Column(Boolean, nullable=False, default=False)

    def __repr__(self) -> str:
        return f"<RecommendedFood(id='{self.id}', diary_id='{self.diary_id}', food_name='{self.food_name}', image_url='{self.image_url}', created_at='{self.created_at}', updated_at='{self.updated_at}', deleted_at='{self.deleted_at}', is_deleted='{self.is_deleted}')>"
