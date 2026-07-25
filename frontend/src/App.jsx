import "./App.css";

function App() {
  return (
    <div className="app">
      {/* because class is a reserved keyword in JavaScript. React uses className to apply CSS classes. */}


      <h1>MarkFlow</h1>

      <p>Convert documents into clean, AI-ready Markdown.</p>

      <input type="file" />

      <br />
      <br />

      <button>Convert</button>

      <h2>Markdown Output</h2>

      <textarea
        rows="15"
        cols="80"
        placeholder="Converted Markdown will appear here..."
      ></textarea>
    </div>
  );
}

export default App;