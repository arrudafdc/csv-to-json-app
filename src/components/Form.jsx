import React from "react";
import styles from "./Form.module.css";
import InputUpload from "./InputUpload";
import axiosAPI from "../services/config";
import IframeDownload from "./IframeDownload";
import Validacao from "./Validacao";

function Form() {
  const [file, setFile] = React.useState("");
  const [validacao, setValidacao] = React.useState("");
  const [responseFile, setResponseFile] = React.useState("");
  const [download, setDownload] = React.useState("");
  const [downloadCount, setDownloadCount] = React.useState(0);
  const btnSubmit = React.useRef();

  React.useEffect(() => {
    if (file)
      if (file.size < 150000 && file.type == "text/csv") {
        setValidacao({
          message: "Arquivo válido ✅",
          style: { color: "#2ecc71" },
        });
      } else {
        setValidacao({
          message: "Apenas arquivos .csv de até 1MB ❌",
          style: { color: "#fe7968" },
        });
      }
  }, [file]);

  React.useEffect(() => {
    if (responseFile) {
      setDownload(`http://localhost:3333/download/${responseFile}`);
      setDownloadCount((old) => old + 1);
    }
  }, [responseFile]);

  async function uploadFile(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);

    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    if (file.size < 1500000 && file.type == "text/csv") {
      setValidacao({ message: "carregando... ⏳", style: { color: "#333" } });
      await axiosAPI
        .post("/upload", data, headers)
        .then((res) => {
          setResponseFile(res.data.file);
          setValidacao({
            message: "Download concluido ✅",
            style: { color: "#2ecc71" },
          });
        })
        .catch(() => {
          setValidacao({
            message: "Servidor fora do ar ❌",
            style: { color: "#fe7968" },
          });
        });
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={uploadFile} className={styles.form}>
        <InputUpload setValue={setFile} value={file} button={btnSubmit} />
        <div className={styles.submitContainer}>
          <Validacao validacao={validacao} />
          <button
            style={{ display: "none" }}
            ref={btnSubmit}
            type="submit"
          ></button>
          <button
            className=""
            type="button"
            onClick={() => btnSubmit.current.click()}
          >
            Baixar JSON
          </button>
        </div>
      </form>
      <IframeDownload download={download} downloadCount={downloadCount} />
    </div>
  );
}

export default Form;
