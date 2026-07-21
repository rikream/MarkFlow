# MarkFlow
MarkFlow is a web application that converts PDFs, Office documents, images, audio, and other supported formats into clean, AI-ready Markdown using Microsoft's MarkItDown library.

Convert your documents into clean, AI-ready Markdown.

MarkFlow is a simple web application built with React and FastAPI that uses Microsoft's MarkItDown library to convert documents into clean, structured Markdown. Whether it's a PDF, Word document, PowerPoint, Excel sheet, or other supported formats, MarkFlow makes it easy to extract readable Markdown that can be used for documentation, note-taking, or AI applications.

Features
Convert PDFs to Markdown
Convert Word, PowerPoint, and Excel files
Extract text from images using OCR
Support for HTML, CSV, JSON, XML, EPUB, ZIP, and more
Preview the generated Markdown
Copy Markdown with one click
Download the converted .md file
Clean and responsive interface
Tech Stack

Frontend

React
Axios
CSS

Backend

FastAPI
MarkItDown
Uvicorn
Python
Getting Started
Clone the repository
git clone https://github.com/your-username/markflow.git
cd markflow
Backend
cd backend

python -m venv venv

Activate the virtual environment.

Windows

venv\Scripts\activate

macOS / Linux

source venv/bin/activate

Install the dependencies.

pip install -r requirements.txt

Run the server.

uvicorn main:app --reload
Frontend
cd frontend

npm install
npm run dev
Supported File Types
PDF
Word
PowerPoint
Excel
Images (OCR)
HTML
CSV
JSON
XML
EPUB
ZIP
YouTube URLs
Other formats supported by Microsoft's MarkItDown
Project Structure
markflow
├── backend
├── frontend
└── README.md
Future Plans
Drag and drop uploads
Batch conversion
Token estimation
Markdown statistics
Reading time estimation
Dark mode
Better error handling
License

This project is licensed under the MIT License.

If you have any suggestions or find a bug, feel free to open an issue or submit a pull request.

