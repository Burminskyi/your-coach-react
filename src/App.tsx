import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./styles.css"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* <Route element={<MainLayout />}>
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route
            path="/account"
            element={
              <PrivateRoute redirectTo="/login">
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route path="calendar/*" element={<CalendarPage />} />
          <Route path="/calendar/day/:currentDate" element={<ChoosedDay />} />
        </Route> */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
