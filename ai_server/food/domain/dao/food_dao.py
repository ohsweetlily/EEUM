from flask_sqlalchemy import SQLAlchemy

from food.domain.entity.food_entity import Food


class FoodDao:
    db: SQLAlchemy

    def __init__(self, db: SQLAlchemy):
        self.db: SQLAlchemy = db;

    # emotion을 이용해서 food entity들을 가져오는 메소드
    def find_all_by_emotion(self, emotion: str) -> list[Food]:
        food_list: list[Food] = self.db.session.query(Food).filter_by(emotion=emotion).all()
        return food_list
