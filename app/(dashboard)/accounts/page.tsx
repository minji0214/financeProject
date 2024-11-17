"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { DataTable } from "@/components/data-table";
import { Payment, columns } from "./columns";

const data: Payment[] = [
	{
		id: "728ed52f",
		amount: 100,
		status: "pending",
		email: "m@example.com",
	},
];

const AccountsPage = () => {
	const newAccount = useNewAccount();

	return (
		<div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
			<Card className="border-none drop-shadow-sm">
				<CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
					<CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
					<Button size="sm" onClick={newAccount.onOpen}>
						<Plus className="size-4 mr-2" />
						Add new
					</Button>
				</CardHeader>
			</Card>
			<DataTable
				columns={columns}
				data={data}
				filterKey="email"
				onDelete={() => {}}
				disabled={false}
			/>{" "}
		</div>
	);
};
export default AccountsPage;
