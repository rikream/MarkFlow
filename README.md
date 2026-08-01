# MarkFlow

MarkFlow is a full-stack web application that converts documents into clean Markdown using Microsoft's MarkItDown library. It provides a simple interface where users can upload supported documents, preview the converted Markdown, copy it, or download it as a `.md` file.

**Live Demo:** https://markflow-converter.vercel.app

---

## Features

- Convert PDF files to Markdown
- Convert Word (.docx) documents
- Convert PowerPoint (.pptx) presentations
- Convert Excel (.xlsx) spreadsheets
- Convert HTML files
- Convert plain text (.txt) files
- Preview the converted Markdown
- Copy Markdown to the clipboard
- Download the output as a `.md` file
- Display clear error messages for unsupported file types

---

## Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- FastAPI
- MarkItDown
- Python
- Uvicorn

### Deployment

- Vercel
- Render

---

## Project Structure

```text
MarkFlow/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── uploads/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/rikream/MarkFlow.git
cd MarkFlow
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

**macOS/Linux**

```bash
source venv/bin/activate
```

Install the required packages.

```bash
pip install -r requirements.txt
```

Run the backend.

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

The frontend will run at:

```
http://localhost:5173
```

---

## Supported File Types

- PDF (.pdf)
- Word (.docx)
- PowerPoint (.pptx)
- Excel (.xlsx)
- HTML (.html)
- Text (.txt)

---

## Live Demo

Frontend

https://markflow-converter.vercel.app

Backend API

https://markflow-6eqb.onrender.com

---

## Future Improvements

- Drag and drop file upload
- Batch conversion
- Dark mode
- Conversion history
- Markdown statistics
- Better mobile support

---

## License

This project is licensed under the MIT License.