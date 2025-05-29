import React from 'react';
import { useField } from 'formik';

const FieldFileInput = ({ classes, name, ...rest }) => {
  const { fileUploadContainer, labelClass, fileNameClass, fileInput } = classes;
  const [{value, ...restFields}, helpers] = useField(name);

  const getFileName = () => {
    if (value) {
      return value.name;
    }
    return '';
  };

  const onChange = (e) => {
    const node = document.getElementById('imagePreview');
    const file = e.target.files[0];
      helpers.setValue (file);
      const reader = new FileReader();
      reader.onload = () => {
        if (node) node.src = reader.result;
      };
      reader.readAsDataURL(file);
    
  };

  return (
        
          <div className={fileUploadContainer}>
            <label htmlFor='fileInput' className={labelClass}>
              Choose file
            </label>
            <span id='fileNameContainer' className={fileNameClass}>
              {getFileName()}
            </span>
            <input
              {...restFields}
              className={fileInput}
              id='fileInput'
              type='file'
              onChange={onChange}
            />
          </div>
        );
};

export default FieldFileInput;
