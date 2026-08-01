from fastapi import FastAPI, UploadFile, File#(File is a function provided by FastAPI.)It's simply a helper function that tells FastAPI where to get the data from.
from fastapi.middleware.cors import CORSMiddleware
from markitdown import MarkItDown
from fastapi import HTTPException #for handeling errors of files that cant be converted
import shutil
import os

app = FastAPI()# app object this is the core obj for accesing all endpoints
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://markflow-converter.vercel.app",
    ],
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

    # Allowed file types
    allowed_extensions = {
        ".pdf",
        ".docx",
        ".pptx",
        ".xlsx",
        ".txt",
        ".html"
    }

    extension = os.path.splitext(filename)[1].lower() # it return file type easy 
    print("Extension:", extension)
    
    if extension not in allowed_extensions:
        raise HTTPException(
        status_code=400,
        detail="Unsupported file type. Please upload a PDF, DOCX, PPTX, XLSX, TXT, or HTML file."
    )

    file_path = os.path.join(UPLOAD_FOLDER, filename)# it is for file path

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:

        result = md.convert(file_path)# md.convert only need file locatoin so it can acces it and convert it into md format

        return {
            "filename": filename,
            "markdown": result.text_content,
            "message": "File uploaded successfully!"
        }

    finally:

        # Delete the uploaded file after conversion
        if os.path.exists(file_path):
            os.remove(file_path)