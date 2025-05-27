#FASTAPI Application

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Feedback(BaseModel):
    name: str
    message: str

feedback_storage = []

@app.post("/api/feedback")
def submit_feedback(feedback: Feedback):
    feedback_storage.append(feedback)
    return {"status": "received"}

@app.get("/api/feedbacks")
def get_feedback():
    return feedback_storage
