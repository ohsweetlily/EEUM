from flask_sqlalchemy import SQLAlchemy

from food.domain.entity.recommended_food import RecommendedFood


class RecommendedFoodDao:
    db: SQLAlchemy

    def __init__(self, db: SQLAlchemy):
        self.db = db

    # 추천 음식 생성
    def create(self, recommended_food: RecommendedFood) -> RecommendedFood:
        self.db.session.add(recommended_food)
        return recommended_food
