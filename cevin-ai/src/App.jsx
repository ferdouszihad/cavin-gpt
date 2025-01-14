import { Route, Routes } from "react-router";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <Routes>
      <Route index element={<HomeLayout></HomeLayout>} />
    </Routes>
  );
}

export default App;
