import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { ContainerLoadingPage, WidgetRepeatAction } from "./styles";
import { messageError } from "../../utils/messageError";
import { HEALTH_PATH } from "../../constants/paths";
import { Loading } from "../../components/Loading";
import { Button } from "../../components/Button";
import { api } from "../../lib/axios";

import loadSvg from "../../assets/load.svg";
import { useStoreActions } from "easy-peasy";
import { ActionsAuthModel } from "../../stores/storeAuthentication";

export function LoadingPage() {
  const setIsAuth = useStoreActions(
    (actions: ActionsAuthModel) => actions.storeAuthentication.setIsAuth
  );
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState({
    isAuth: false,
    isError: false,
  });

  const fetchAuthentication = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get(HEALTH_PATH);
      const STATUS_OK = data.status === "OK";
      const STATUS_NOT = data.status !== "OK";

      setIsAuthenticated({
        isAuth: STATUS_OK,
        isError: STATUS_NOT,
      });
      setIsAuth(STATUS_OK);
    } catch (error) {
      messageError({
        error,
        messageError: "Service Unavailable. Please try again later!",
      });
      setIsAuthenticated({
        isAuth: false,
        isError: false,
      });
      setIsAuth(false);
    } finally {
      setLoading(false);
    }
  }, [setIsAuth]);

  useEffect(() => {
    fetchAuthentication();
  }, [fetchAuthentication]);

  if (isAuthenticated.isAuth && !isAuthenticated.isError) {
    return <Navigate to="/questions" />;
  }

  return (
    <ContainerLoadingPage>
      {isAuthenticated.isError && !loading && (
        <WidgetRepeatAction>
          <h3>
            There was an error in the request click on the button for a new
            request!
          </h3>
          <Button onClick={fetchAuthentication} isLoading={loading}>
            Repeat action
          </Button>
        </WidgetRepeatAction>
      )}

      {((!isAuthenticated.isError && !isAuthenticated.isAuth) || loading) && (
        <>
          <img
            src={loadSvg}
            alt="An illustration of a man typing on a computer keyboard"
          />
          <Loading size={48} />
        </>
      )}
    </ContainerLoadingPage>
  );
}
