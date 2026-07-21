# MarkFlow

Convert documents into clean, AI-ready Markdown.

MarkFlow is a web application built with **React** and **FastAPI** that uses Microsoft's **MarkItDown** library to convert various document formats into structured Markdown. It provides a simple interface for uploading files, previewing the converted output, and downloading the generated Markdown.

---

## Features

- Convert PDF files to Markdown
- Convert Word, PowerPoint, and Excel documents
- Extract text from images using OCR
- Support for HTML, CSV, JSON, XML, EPUB, ZIP, and more
- Live Markdown preview
- Copy converted Markdown
- Download Markdown as `.md`
- Responsive and clean UI

---

## Tech Stack

### Frontend

- React
- Axios
- CSS

### Backend

- FastAPI
- MarkItDown
- Uvicorn
- Python

---

## Project Structure

```
markflow/
├── backend/
├── frontend/
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/markflow.git
cd markflow
```

### Backend

```bash
cd backend

python -m venv venv
```

Activate the virtual environment.

**Windows**

```bash
venv\Scripts\activate
```

**macOS / Linux**

```bash
source venv/bin/activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Run the server.

```bash
uvicorn main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install
npm run dev
```

---

## Supported File Types

- PDF
- DOCX
- PPTX
- XLSX
- Images (OCR)
- HTML
- CSV
- JSON
- XML
- EPUB
- ZIP
- YouTube URLs
- Other formats supported by Microsoft's MarkItDown

---

## Roadmap

- [ ] Drag and drop uploads
- [ ] Batch conversion
- [ ] Token estimation
- [ ] Markdown statistics
- [ ] Reading time estimation
- [ ] Dark mode
- [ ] Better error handling

---

## License

This project is licensed under the MIT License.
