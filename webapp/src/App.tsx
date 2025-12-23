import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "./lib/TrpcProvider";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import { NewIdeaPage } from "./pages/NewIdeaPage";
import * as routes from "./lib/routes";
import { Layout } from "./components/Layout";
import "./styles/global.scss";

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPage />} />
              <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage />} />
              <Route path={routes.getViewIdeaRoutePattern()} element={<ViewIdeaPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}
