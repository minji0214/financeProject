import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { insertAccountSchema } from "@/db/schema";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({});
type FormValues = z.infer<typeof formSchema>;
type Props = {
	id?: string;
	defaultValues?: FormValues;
	onSubmit: (values: FormValues) => void;
	onDelete?: () => void;
	disabled?: boolean;
};
export const CategoryForm = ({
	id,
	defaultValues,
	onSubmit,
	onDelete,
	disabled,
}: Props) => {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = (values: FormValues) => {
		onSubmit(values);
	};
	const handleDelete = () => {
		onDelete?.();
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className="space-y-4 pt-4"
			>
				<FormField
					// FIXME왜 never?
					name={"name" as never}
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									disabled={disabled}
									placeholder="e.g. Food, travel, etc."
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button className="w-full" disabled={disabled}>
					{id ? "Save changes" : "Create category"}
				</Button>
				{!!id && (
					<Button
						onClick={handleDelete}
						disabled={disabled}
						type="button"
						variant={"outline"}
						className="w-full"
					>
						<Trash className="size-4 mr-2" />
						Delete category
					</Button>
				)}
			</form>
		</Form>
	);
};
