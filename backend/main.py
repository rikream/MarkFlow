from fastapi import FastAPI, UploadFile, File#(File is a function provided by FastAPI.)It's simply a helper function that tells FastAPI where to get the data from.
from fastapi.middleware.cors import CORSMiddleware
from markitdown import MarkItDown
import shutil
import os

app = FastAPI()# app object this is the core obj for accesing all endpoints
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","http://127.0.0.1:5173",],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# this is for safety if the folder is not exist it shuld not raise an error
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

md=MarkItDown()#this object is for representif MarkItDown

@app.get("/")
def home():
    return {"message": "MarkFlow Backend Running!"}


@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    filename = file.filename or "uploaded_file"
    file_path = os.path.join(UPLOAD_FOLDER, filename)#result->uploads/sample.pdf

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result =md.convert(file_path)#MarkItDown doesn't need your UploadFile object. It just needs to know where the file is stored. but can use file obj to

    return {
        "filename": filename,
        "markdown":result.text_content,
        "message": "File uploaded successfully!"
    }

