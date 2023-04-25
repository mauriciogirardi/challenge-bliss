import { useEffect, useState } from "react";
import { MainRoutes } from "./routes/MainRoutes.routes";
import { WithoutInternetPage } from "./pages/WithoutInternetPage";

export function App() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };

    const handleOffline = () => {
      setOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online ? <MainRoutes /> : <WithoutInternetPage />;
}
