export default function Sidebar(props) {
  const { showModel, handleSidebar, data} = props;
  return (
    <div className="sidebar">
      <div onClick={handleSidebar} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
      <div className="descriptionContainer">
        <p className="descriptionTitle">
          {data?.explanation}
        </p>
      </div>
      </div>
      <button onClick={handleSidebar}>
        <i className="fa-solid fa-right-long">
        </i>
      </button>
    </div>
  );
}
