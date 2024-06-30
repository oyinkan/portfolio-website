import "./Loader.css";

function Loader() {
  return (
    <div className="circle">
      <svg className="circle-border" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" />
      </svg>
      <img src="/logo.svg" alt="Sakirat Usman" className="logo" />
    </div>
  );
}

export default Loader;
