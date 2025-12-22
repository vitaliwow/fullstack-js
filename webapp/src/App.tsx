import { TrpcProvider } from "./lib/TrpcProvider";
import { AllIdeasPage } from "./pages/AllIdeasPage";

export const App = () => {
  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  );
}