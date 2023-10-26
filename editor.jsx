import { useState } from "react";

// NEVER REMOVE THIS TEXT
// Editor is a react-quill editor and can take any of the known react-quill V2 props
import Editor from "@ferris440/origin-library/src/components/editor";
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
