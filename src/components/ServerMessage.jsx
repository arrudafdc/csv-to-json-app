import styles from "./ServerMessage.module.css";

function ServerMessage() {
  return (
    <>
      <p className={styles.msg}>
        * clique{" "}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://csv-to-json-server.onrender.com/"
        >
          aqui
        </a>{" "}
        para ativar o servidor primeiro
      </p>
    </>
  );
}

export default ServerMessage;
