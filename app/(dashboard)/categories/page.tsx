"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { Skeleton } from "@/components/ui/skeleton";

// const data = [
// 	{
// 		id: "728ed52f",
// 		amount: 100,
// 		status: "pending",
// 		email: "m@example.com",
// 	},
// ];

const AccountsPage = () => {
	const newAccount = useNewAccount();
	const accountsQuery = useGetAccounts();
	const accounts = accountsQuery.data ?? [];

	if (accountsQuery.isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
			<Card className="border-none drop-shadow-sm">
				<CardHeader>
					<Skeleton className="w-48 h-8" />
					{/* <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between"> */}
					{/* <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
					<Button size="sm" onClick={newAccount.onOpen}>
						<Plus className="size-4 mr-2" />
						Add new
					</Button> */}
				</CardHeader>
				<CardContent>
					<div className="h-[500px] w-full flex items-center justify-center">
						<Loader2 className="size-6 text-slate-300 animate-spin" />
					</div>
				</CardContent>
			</Card>
			<DataTable
				columns={columns}
				data={accounts}
				filterKey="email"
				onDelete={() => {}}
				disabled={false}
			/>{" "}
		</div>
	);
};
export default AccountsPage;
