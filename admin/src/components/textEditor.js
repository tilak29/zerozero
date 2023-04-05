import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextEditor = ({ onChange, value }) => {
    return (<>
        <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
                onChange(editor.getData());
            }}
            data={value}
        />
    </>);
}

export default TextEditor;