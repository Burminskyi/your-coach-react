import { useSelector } from "react-redux";
import { AuthSection } from "../components/AuthSection";
import Description from "../components/Description";
import { selectAuthenticationStatus } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const MainPage = () => {
  const authenticated = useSelector(selectAuthenticationStatus);
  if (authenticated) return <Navigate to="/calendar" />;
  return (
    <>
      <AuthSection />
      <Description />
    </>

    // <ReviewsSlider />
  );
};
