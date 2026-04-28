import {Navigate, Route, Routes} from "react-router";
import PageLayout from "@/layouts/PageLayout";
import HomePage from "@/pages/HomePage";
import DestinationPage from "@/pages/DestinationPage";
import CrewPage from "@/pages/CrewPage";
import TechnologyPage from "@/pages/TechnologyPage";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<PageLayout><HomePage/></PageLayout>} />
      <Route path="/destination" element={<PageLayout><DestinationPage/></PageLayout>} />
      <Route path="/crew" element={<PageLayout><CrewPage/></PageLayout>} />
      <Route path="/technology" element={<PageLayout><TechnologyPage/></PageLayout>} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default Router
