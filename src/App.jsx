import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  


  function handleChange(e){
    setText(e.target.value); 

    getMarkdownText();
  }
  const getMarkdownText = () => {
    // Use the marked library from the global window object
    const rawMarkup = window.marked.parse(text, { sanitize: true });
    
    return { __html: rawMarkup };
  };
  return (
    <>
      <div className='editorWrapper'>
        <h3 id="header">Editor</h3>
        <textarea id='editor' value={text} onChange={handleChange}>
          
        </textarea>
        

      </div>
      <div className='PreviewerWrapper'>
        <h3 id="header">Previewer</h3>
        <div id='preview'

        dangerouslySetInnerHTML={getMarkdownText()}> 

        </div>
      </div>
    </>
  )
}

export default App
