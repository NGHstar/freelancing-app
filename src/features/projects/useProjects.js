import { useQuery } from "@tanstack/react-query";
import { getAllProjectsApi } from "../../services/projectServices";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  // ---
  const { search } = useLocation();

  const queryObject = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getAllProjectsApi(search),
    retry: false,
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
