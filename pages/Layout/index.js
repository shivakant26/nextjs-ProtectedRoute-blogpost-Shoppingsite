import ProtectedRoutes from "@/Component/Routes/ProtectedRoute";

const { default: Header } = require("../../Component/Header");

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page_wr">
        <ProtectedRoutes>{children}</ProtectedRoutes>
      </div>
    </>
  );
};
export default Layout;
