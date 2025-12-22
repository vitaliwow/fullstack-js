import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "./lib/TrpcProvider";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage"; 
import { getAllIdeasRoute, getIdeaRoute } from "./lib/routes";

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={getIdeaRoute(":ideaId")} element={<ViewIdeaPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}