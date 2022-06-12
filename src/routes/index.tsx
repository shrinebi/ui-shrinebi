import { ROUTES } from "consts";
import { Dashboard } from "pages/private/Dashboard/Dashboard";
import { Login } from "pages/public/Login/Login";
import { Registration } from "pages/public/Registration/Registration";
import { Route, Routes } from "react-router-dom";

export const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.BASE} element={<Login />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTRATION} element={<Registration />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
};

RootRouter.displayName = "RootRouter";
