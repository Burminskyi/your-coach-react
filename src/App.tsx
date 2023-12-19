import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./styles.css";
import SharedLayout from "./components/SharedLayout";
import { WorkoutsPage } from "./pages/WorkoutsPage";
import { StatisticsPage } from "./pages/StatisticsPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { ProfilePage } from "./pages/ProfilePage";
import CalendarPage from "./pages/CalendarPage";
import ExercisesPage from "./pages/ExercisesPage";
import { ExercisesCategoryPage } from "./pages/ExercisesCategoryPage";
import { ExercisePage } from "./pages/ExercisePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<SharedLayout />}>
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/exercises/:name" element={<ExercisesCategoryPage />} />
          <Route path="/exercises/:name/:id" element={<ExercisePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* <Route
            path="/account"
            element={
              <PrivateRoute redirectTo="/login">
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route path="calendar/*" element={<CalendarPage />} />
          <Route path="/calendar/day/:currentDate" element={<ChoosedDay />} /> */}
        </Route>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
