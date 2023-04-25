import { useQuery } from "@tanstack/react-query";

import { messageError } from "../../utils/messageError";
import { HEALTH_PATH } from "../../constants/paths";
import { api } from "../../lib/axios";

export const fetchAuthentication = async () => {
  try {
    const { data } = await api.get(HEALTH_PATH);
    const isAuthenticated = data.status === "OK";
    if (isAuthenticated) {
      return data;
    }
    return "ERROR";
  } catch (error) {
    messageError({
      error,
      messageError: "Service Unavailable. Please try again later!",
    });
  }
};

export const useAuth = () => {
  return useQuery<{ status: string }>({
    queryKey: ["auth"],
    queryFn: fetchAuthentication,
    staleTime: 60000 * 5, // 5 minute
    refetchInterval: 600000, // 10 minutes
  });
};
