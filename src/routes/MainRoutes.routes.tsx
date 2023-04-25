import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "../pages/LoadingPage";
import { ListPage } from "../pages/ListPage";
import { QuestionPage } from "../pages/QuestionPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/questions" element={<ListPage />} />
      <Route path="/questions/:id" element={<QuestionPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}
