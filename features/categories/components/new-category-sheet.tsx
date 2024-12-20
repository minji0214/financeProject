import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useNewAccount } from "../hooks/use-new-account";
import { AccountForm } from "./category-form";
import { z } from "zod";
import { insertCategorySchema } from "@/db/schema";
import { useCreateAccount } from "../api/use-create-accounts";
const formSchema = insertCategorySchema.pick({
	name: true,
});
type FormValues = z.input<typeof formSchema>;
export const NewCategorySheet = () => {
	const { isOpen, onClose } = useNewAccount();
	const mutation = useCreateAccount();
	const onSubmit = (values: FormValues) => {
		mutation.mutate(values, {
			onSuccess: () => {
				onClose();
			},
		});
	};
	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent className="space-y-4">
				<SheetHeader>
					<SheetTitle>New Category</SheetTitle>
					<SheetDescription>
						Create a new category to track your transactions
					</SheetDescription>
				</SheetHeader>

				<AccountForm
					onSubmit={onSubmit}
					disabled={mutation.isPending}
					defaultValues={{
						name: "",
					}}
				/>
			</SheetContent>
		</Sheet>
	);
};
