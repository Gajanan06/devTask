import "../styles/components.css";

const MobileLayout = ({ children }) => {
  return (
    <div className="app-container">
      <div className="mobile-layout"
      style={{paddingBottom:"400px"}}>
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;