import { useState } from "react";
import axios from "axios";
import "./App.css";


function App() {
  // so seletcted state is for storing the file that user upload while markdownown state is for storing what backend response as react cant store,
  // (It's not that "React can't store" values—it can. The important difference is that state triggers a re-render.)

  const [selectedFile, setSelectedFile] = useState(null); // for storing what frontend gives
  const [markdown, setMarkdown] = useState(""); //for what backend return
  const [loading, setLoading] = useState(false);// for loadind animation

  const uploadFile = async () => {

    if (!selectedFile) return;

    console.log("Convert button clicked");

    setLoading(true);

    try {

      const formData = new FormData();

      formData.append("file", selectedFile);

      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData
      );

      const cleaned = response.data.markdown
        .replace(/\f/g, "")
        .replace(/\r/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

      setMarkdown(cleaned);

    }
    catch (error) {

      console.error(error);

    }
    finally {

      setLoading(false);

    }

  };

  //this is for coping what backend retun in frontend
  const copyMarkdown = async () => {

    try {

      await navigator.clipboard.writeText(markdown);

      alert("Markdown copied successfully!");

    }
    catch (error) {

      console.error(error);

    }

  };

  return (
    <div className="app">

      <div className="header">
        <h1>📄 MarkFlow</h1>
        <p>Convert documents into clean Markdown.</p>
      </div>

      <div className="main">

        <div className="upload-box">

          <h2>Upload Document</h2>

          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          <p>
            {selectedFile
              ? selectedFile.name
              : "No file selected"}
          </p>

          <button
            onClick={uploadFile}
            disabled={!selectedFile || loading}
          >
            {loading ? "Converting..." : "Convert"}
          </button>

        </div>

        <div className="output-box">

          <h2>Markdown Output</h2>

          <textarea
            value={markdown}
            readOnly
          />

          <button onClick={copyMarkdown}>
            📋 Copy Markdown
          </button>

        </div>

      </div>

    </div>
  );
}


export default App;