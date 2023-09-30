// eslint-disable-next-line react/prop-types
function Validacao({ validacao }) {
  // eslint-disable-next-line react/prop-types
  return <p style={validacao.style}>{validacao.message}</p>;
}

export default Validacao;
