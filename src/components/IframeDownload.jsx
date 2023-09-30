// eslint-disable-next-line react/prop-types
function IframeDownloa({ download, downloadCount }) {
  return (
    <>
      {download && (
        <iframe
          src={download + "?c=" + downloadCount}
          style={{ display: "none" }}
        ></iframe>
      )}
    </>
  );
}

export default IframeDownloa;
