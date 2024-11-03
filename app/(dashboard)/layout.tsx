import { PropsWithChildren } from "react";
import { Header } from "@/components/ui/header";
type Props = {};
const DashboardLayout = ({ children }: PropsWithChildren<Props>) => {
	return (
		<>
			<Header />
			<main className="px-3 lg:px-14">{children}</main>
		</>
	);
};
export default DashboardLayout;
