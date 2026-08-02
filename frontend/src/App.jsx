import { useState } from "react";
import axios from "axios";
import "./App.css";
import logo from "./assets/logo.png";

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
        "https://markflow-6eqb.onrender.com/upload",
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

      setMarkdown("");

      alert(error.response?.data?.detail || "Something went wrong.");

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

  // Download the markdown as a .md file
  const downloadMarkdown = () => {

    const blob = new Blob([markdown], {
      type: "text/markdown"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "output.md";

    link.click();

    URL.revokeObjectURL(url);

  };

  return (
    <div className="app">

      <div className="header">
        <img src={logo} alt="MarkFlow Logo" className="logo" />
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

          {/* //upload file button */}
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

          {/* //copy button */}
          <button onClick={copyMarkdown}>
            📋 Copy Markdown
          </button>

          {/* //downlaod markdown button */}
          <button
            onClick={downloadMarkdown}
            disabled={!markdown}
          >
            ⬇ Download Markdown
          </button>

        </div>

      </div>

    </div>
  );
}


export default App;