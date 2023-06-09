class AnalyzeRequest:
    diary_id: int
    paragraph: str

    def __init__(self, diary_id: int, paragraph: str):
        self.diary_id: int = diary_id
        self.paragraph: str = paragraph

    @staticmethod
    def from_request(request_json) -> 'AnalyzeRequest':
        id, paragraph = request_json['diary_id'], request_json['paragraph']
        return AnalyzeRequest(id, paragraph)
