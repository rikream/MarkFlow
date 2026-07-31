import { useState } from "react";
import axios from "axios";
import "./App.css";


function App() {
  // so seletcted state is for storing the file that user upload while markdownown state is for storing what backend response as react cant store,
  // (It's not that "React can't store" values—it can. The important difference is that state triggers a re-render.)

  const [selectedFile, setSelectedFile] = useState(null);
  const [markdown, setMarkdown] = useState("");

  const uploadFile = async () => {
    console.log("Convert button clicked");//this is for debug

    try {
      const formData = new FormData();
      // FormData() ,prebuilt class of javascirpt (u cant directly send the file that u upload in backend u have to send it in some format that fomat is automatically handeled by formdata)
      formData.append("file", selectedFile);//adding a new file to formdata object(ufing "file" as fastapi expecting field name "file" in backend so u must send same)


      //storing response getted form backend which an object
      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData
      );

      console.log("Full response: ", response);
      console.log("response data: ", response.data);
      console.log("Markdown: ", response.data.markdown);

      //lets have a cleaned format after gettting response
      const cleaned = response.data.markdown// response.data.markdown give us the markdwon data and 
        //setMarkdown is an fucntion for storing markdown value return in markdown variable
        .replace(/\f/g, "")          // Remove page breaks
        .replace(/\r/g, "")          // Remove carriage returns
        .replace(/…+/g, "")          // Remove long dotted lines
        .replace(/\n{3,}/g, "\n\n"); // Maximum 2 blank lines

      setMarkdown(cleaned);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      {/* because class is a reserved keyword in JavaScript. React uses className to apply CSS classes. */}

      <h1>MarkFlow</h1>

      <p>Convert documents into clean, AI-ready Markdown.</p>

      <input
        type="file"
        onChange={(event) => {
          setSelectedFile(event.target.files[0]);
        }}
      />


      <br />
      <br />

      <button onClick={uploadFile}>Convert</button>

      <h2>Markdown Output</h2>

      <textarea
        rows="15"
        cols="80"
        value={markdown}
        readOnly
      ></textarea>
    </div>
  );
}

export default App;