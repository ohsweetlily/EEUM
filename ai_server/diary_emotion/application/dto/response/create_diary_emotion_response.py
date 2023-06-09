from diary_emotion.domain.diary_emotion_entity import DiaryEmotion


class CreateDiaryEmotionResponse:
    diary_id: int
    worry_score: float
    angry_score: float
    happy_score: float
    excited_score: float
    sad_score: float

    def __init__(self, diary_id: int, worry_score: float, angry_score: float, happy_score: float, excited_score: float,
                 sad_score: float):
        self.diary_id = diary_id
        self.worry_score = worry_score
        self.angry_score = angry_score
        self.happy_score = happy_score
        self.excited_score = excited_score
        self.sad_score = sad_score

    @staticmethod
    def from_entity(diary_emotion: DiaryEmotion) -> 'CreateDiaryEmotionResponse':
        return CreateDiaryEmotionResponse(diary_emotion.diary_id, diary_emotion.worry_score, diary_emotion.angry_score,
                                          diary_emotion.happy_score, diary_emotion.excited_score,
                                          diary_emotion.sad_score)

    # 가장 높은 수치를 보이는 감정을 반환하는 메소드
    def get_highest_emotion_label(self) -> str:
        emotion_map: dict[str, float] = {
            '걱정': self.worry_score,
            '분노': self.angry_score,
            '행복': self.happy_score,
            '설렘': self.excited_score,
            '슬픔': self.sad_score
        }

        max_emotion, max_score = '걱정', self.worry_score

        for emotion, score in emotion_map.items():
            if score > max_score:
                max_emotion, max_score = emotion, score

        return max_emotion
