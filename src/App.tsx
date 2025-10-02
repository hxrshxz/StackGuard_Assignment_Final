import { useEffect } from "react";
import DashboardNeo from "./pages/dashboard/Neo/DashboardNeo";

function App() {
  useEffect(() => {
    // Set document title
    document.title = "StackGuard Neo Dashboard";

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    ) as HTMLMetaElement;

    if (metaDescriptionTag) {
      metaDescriptionTag.content =
        "StackGuard Neo-styled dashboard with advanced threat monitoring";
    }
  }, []);

  return <DashboardNeo />;
}

export default App;
