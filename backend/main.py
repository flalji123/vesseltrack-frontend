from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend is live"}

@app.get("/vessel/search")
def search_vessel(imo: str):
    return {
        "imo": imo,
        "name": "Mock Vessel",
        "type": "Oil/Chemical Tanker",
        "flag": "Panama",
        "status": "Underway",
        "eta": "2025-06-15"
    }

@app.get("/vessel/location")
def vessel_location(imo: str):
    return {
        "imo": imo,
        "latitude": 25.276987,
        "longitude": 55.296249
    }

@app.get("/vessel/owner")
def vessel_owner(imo: str):
    return {
        "imo": imo,
        "owner": "Commodify Shipping Ltd.",
        "manager": "Commodify Maritime Ops",
        "flag": "Panama"
    }

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    text_preview = contents[:500].decode("utf-8", errors="ignore")
    return {
        "filename": file.filename,
        "preview": text_preview
    }
