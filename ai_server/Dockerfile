FROM python:3.10

WORKDIR /app

COPY requirements.txt .

# 패키지 의존성 설치
RUN pip install --no-cache-dir -r requirements.txt && rm -rf /tmp/pip-cache

COPY . .

EXPOSE 8000

# 애플리케이션 실행
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "app:app"]