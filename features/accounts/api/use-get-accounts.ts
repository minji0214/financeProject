import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

export const useGetAccounts = () => {
	const query = useQuery({
		queryKey: ["accounts"],
		queryFn: async () => {
			const response = await client.api.accounts.$get();
			// axios가 아니기 때문에 error 처리가 필요하다.
			if (!response.ok) {
				throw new Error("Failed to fetch accounts");
			}
			const { data } = await response.json();
			return data;
		},
	});
	return query;
};
