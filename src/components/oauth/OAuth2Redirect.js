import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OAuth2Redirect = () => {
  const navigate = useNavigate();

  const getUrlParameter = (name) => {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(window.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  useEffect(() => {
    const token = getUrlParameter("token");
    if (token) {
      // Store the token in localStorage or sessionStorage
      localStorage.setItem("authToken", token); // or sessionStorage.setItem("authToken", token);
      
      // Optionally, make an API call to get user details or save the token in context
      toast.success("You're successfully logged in!");
      navigate("/home", { replace: true });
    } else {
      toast.error("Could not log in. Please try again.");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return null;
};

export default OAuth2Redirect;
