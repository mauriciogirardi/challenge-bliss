import { Navigate } from "react-router-dom";

import { ContainerLoadingPage, WidgetRepeatAction } from "./styles";
import { Loading } from "../../components/Loading";
import { useAuth } from "../../services/hooks/useAuth";
import loadSvg from "../../assets/load.svg";

export function LoadingPage() {
  const { data, isRefetching, refetch } = useAuth();

  const isAuthenticated = data?.status === "OK";
  const isError = data?.status !== "OK";

  if (isAuthenticated) {
    return <Navigate to="/questions" />;
  }

  return (
    <ContainerLoadingPage>
      {isError && !isRefetching && isAuthenticated && (
        <WidgetRepeatAction>
          <h3>
            There was an error in the request click on the button for a new
            request!
          </h3>
          <button onClick={() => refetch({ queryKey: ["auth"] })}>
            Repeat action
          </button>
        </WidgetRepeatAction>
      )}

      {(!isAuthenticated || isRefetching) && (
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
