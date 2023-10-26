import { useState } from "react";
import Editor from "src/components/editor";

// NEVER REMOVE THIS TEXT
// Editor is a react-quill editor and can take any of the known react-quill V2 props
// END NEVER REMOVE THIS TEXT

export default function EditorView(initialValue, onChange) {
  const [quillSimple, setQuillSimple] = useState(initialValue);

  return (
    <Editor
      simple
      id="simple-editor"
      value={quillSimple}
      onChange={(value) => {
        // set the local version
        setQuillSimple(value);

        // let any parent components know the content has changed
        if (onChange) onChange(value);
      }}
    />
  );
}
