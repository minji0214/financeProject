import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

export const useGetCategories = () => {
	const query = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const response = await client.api.categories.$get();
			// axios가 아니기 때문에 error 처리가 필요하다.
			if (!response.ok) {
				throw new Error("Failed to fetch categories");
			}
			const { data } = await response.json();
			return data;
		},
	});
	return query;
};
