import "./PageLoader.scss";

const PageLoader = () => {
  return (
    <div className="page-loader">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
        alt="Logo"
        className="loader-logo"
      />
      <div className="loading-text">Đang tải...</div>
    </div>
  );
};

export default PageLoader;
    