import Layout from "@/layouts/layout";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to={"/"} replace />;

  // return isAuthenticated ? <Outlet /> : <Navigate to={"/"} replace />;
}

export default ProtectedRoute;
