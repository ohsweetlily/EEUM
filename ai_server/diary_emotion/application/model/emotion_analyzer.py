from transformers import AutoModelForSequenceClassification

import torch
from torch.nn.functional import softmax
from kss import split_sentences

from diary_emotion.application.model.tokenization_kobert import KoBertTokenizer


class EmotionAnalyzer:
    def __init__(self):
        # Model
        self.ckpt_url = 'my_awesome_model/checkpoint-47000'
        self.model = AutoModelForSequenceClassification.from_pretrained(self.ckpt_url)
        self.tokenizer = KoBertTokenizer.from_pretrained('monologg/distilkobert')
        self.checkpoint = torch.load(self.ckpt_url + '/pytorch_model.bin', map_location=torch.device('cpu'))
        self.model.load_state_dict(self.checkpoint)

        # 학습된 라벨 정보
        self.id2label: dict[int, str] = self.model.config.id2label

    # 문장 하나를 분석하여 라벨당 확률을 반환하는 메소드
    def predict(self, sentence: str) -> torch.Tensor:
        input_ids = self.tokenizer.encode(sentence, add_special_tokens=True, truncation=True, padding=True,
                                          return_tensors='pt')
        predict_result = self.model(input_ids)

        # 결과물 추출
        logits = predict_result.logits
        probabilities: torch.Tensor = softmax(logits, dim=1)

        return probabilities

    # 문장 여러개로 된 하나의 글을 분석하여 감정 분석 결과 리스트를 반환하는 메소드
    def analyze_paragraph(self, paragraph: str) -> list[torch.Tensor]:
        splited_paragraph: list[str] = split_sentences(paragraph)
        return list(map(lambda sentence: self.predict(sentence), splited_paragraph))

    # 문단 분석 결과를 요약해서 반환하는 메소드 -> 모든 결과를 합쳐서 softmax 연산하여 반환
    def get_summarized_result(self, paragraph: str) -> dict[str, float]:
        analyzed_result: list[torch.Tensor] = self.analyze_paragraph(paragraph)

        summation: torch.Tensor = torch.sum(torch.stack(analyzed_result), dim=0)
        summation: torch.Tensor = softmax(summation, dim=1) * 100
        summation: list[float] = summation.tolist()[0]

        return dict(zip(self.id2label.values(), summation))
