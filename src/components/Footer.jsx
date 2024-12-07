export default function Footer(props) {
  const { handleSidebar, data } = props;

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>{data?.title}</h1>
        <h2>Zaid</h2>
      </div>

      <button onClick={handleSidebar}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
