import React, { FC } from 'react';
import { Editor } from '@tinymce/tinymce-react';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
}

const RichEditor: FC<Props> = (props) => {
  const { onChange, value } = props

  const handleEditorChange = (content: string) => {
    onChange && onChange(content)
  };

  return (
    <>
      <Editor
        onEditorChange={handleEditorChange}
        value={value}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}

export default RichEditor;