# FileSecure AI

A web application for secure document analysis using Azure OpenAI.

## Features
- Upload and analyze documents (PDF, Word, Excel, PowerPoint, CSV, XML, JSON, HTML, and code/text files)
- Ask security-related questions about the uploaded document
- Built-in security questions for quick checks
- Modern, responsive UI
![image](https://github.com/user-attachments/assets/babb092a-57da-4a8d-809b-894ba21d181a)

## Supported File Types
- PDF: `.pdf`
- Word: `.docx`
- Excel: `.xls`, `.xlsx`, `.csv`
- PowerPoint: `.pptx`
- Text/code: `.txt`, `.py`, `.js`, `.java`, `.sh`, `.yml`, `.yaml`, `.env`, `.ini`, `.log`, `.md`, `.html`, `.json`
- XML: `.xml`
- HTML: `.html`, `.htm`
- JSON: `.json`

## Prerequisites
- Python 3.8+
- Node.js (for frontend development, optional)
- Azure OpenAI resource and deployment

## Setup
1. **Clone the repository**
2. **Create and activate a virtual environment**
   ```powershell
   python -m venv .venv
   .venv\Scripts\Activate
   ```
3. **Install backend dependencies**
   ```powershell
   pip install -r backend/requirements.txt
   ```
4. **Set environment variables**
   - Create a `.env` file in the backend folder with:
     ```env
     AZURE_OPENAI_ENDPOINT=your-endpoint-url
     AZURE_OPENAI_KEY=your-azure-openai-key
     AZURE_OPENAI_DEPLOYMENT=your-deployment-name
     ```
5. **Run the backend**
   ```powershell
   cd backend
   python "app.py"
   ```
6. **Open the frontend**
   - Open `frontend/index.html` in your browser, or serve it with a static server.

## Project Structure
```
backend/         # Flask backend (API, file parsing, OpenAI integration)
frontend/        # HTML, CSS, JS (UI)
requirements.txt # Python dependencies
.env             # Environment variables (not committed)
```

## Security & Privacy
- Uploaded files are processed in-memory and not stored on disk.
- API keys and secrets are kept in `.env` (never commit this file).

## License
MIT
