import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarVariant } from "./bar-variant";
import { AreaChart, FileSearch } from "lucide-react";
import { LineVariant } from "./line-variant";
import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
type Props = {
	data?: {
		data: string;
		income: number;
		expenses: number;
	}[];
};

export const Chart = ({ data = [] }: Props) => {
	const [chartType, setChartType] = useState("area");
	const onTypeChange = (type: string) => {
		setChartType(type);
	};
	return (
		<Card className="border-none drop-shadow-sm">
			<CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
				<CardTitle className="text-xl line-clamp-1">Transactions</CardTitle>
				<Select defaultValue={chartType} onValueChange={onTypeChange} />
				<SelectTrigger className={"lg:w-auto h-9 rounded-md px-3"}>
					<SelectValue className="text-sm text-muted-foreground" />
				</SelectTrigger>
				<SelectContent className="w-48">
					<SelectItem value="area">
						<div className="flex items-center">
							<AreaChart className="size-4 mr-2 shrink-0" />
							<p className="line-clamp-1">Area chart</p>
						</div>
					</SelectItem>
				</SelectContent>
			</CardHeader>
			<CardContent>
				{data.length === 0 ? (
					<div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
						<FileSearch className="size-6 text-muted-foreground" />
						<p className="text-lg text-muted-foreground">No data available</p>
					</div>
				) : (
					<>
						{/* <AreaVariant data={data} /> */}
						{/* <BarVariant data={data} /> */}
						<LineVariant data={data} />
					</>
				)}
			</CardContent>
		</Card>
	);
};
