import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const useRedirect = redirectTo => {
  const { currentUser } = useSelector(state => state.user);

  console.log('currentUser ==> ', currentUser);

  const navigate = useNavigate()

  useEffect(() => {
    if(currentUser) {
      navigate(redirectTo);
    }
  }, [currentUser, navigate, redirectTo])
}

export default useRedirect;