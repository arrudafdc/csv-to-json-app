import styles from "./InputUpload.module.css";

// eslint-disable-next-line react/prop-types
function InputUpload({ setValue }) {
  function handleChange({ target }) {
    setValue(target.files[0]);
  }

  return (
    <div>
      <label className={styles.fileLabel} htmlFor="file">
        Clique aqui para enviar seu csv
      </label>
      <input
        className={styles.fileInput}
        id="file"
        type="file"
        onChange={handleChange}
      />
    </div>
  );
}

export default InputUpload;
