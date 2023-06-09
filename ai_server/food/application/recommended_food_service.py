import random

from food.domain.dao.food_dao import FoodDao
from food.domain.dao.recommended_food_dao import RecommendedFoodDao
from food.domain.entity.food_entity import Food
from food.domain.entity.recommended_food import RecommendedFood


class RecommendedFoodService:
    food_dao: FoodDao
    recommended_food_dao: RecommendedFoodDao

    def __init__(self, food_dao: FoodDao, recommended_food_dao: RecommendedFoodDao):
        self.food_dao = food_dao
        self.recommended_food_dao = recommended_food_dao

    # emotion을 통해서 랜덤하게 추천 음식을 등록하는 메소드
    def create_recommended_food_by_emotion(self, diary_id: int, emotion: str):
        food_list: list[Food] = self.food_dao.find_all_by_emotion(emotion)

        # 랜덤하게 음식을 하나 추천한다
        selected_food: Food = random.choice(food_list)

        # 선택된 음식으로부터 추천 음식 엔티티를 생성한다
        recommended_food = self._generate_recommended_food_from_food(diary_id, selected_food)

        # 추천 음식을 등록한다
        self.recommended_food_dao.create(recommended_food)

    # Food 엔티티로부터 RecommendedFood를 생성하는 메소드
    def _generate_recommended_food_from_food(self, diary_id: int, food: Food) -> RecommendedFood:
        return RecommendedFood(diary_id=diary_id, food_name=food.name, image_url=food.image_url)
