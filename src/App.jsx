import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { ThemeProvider } from "@/Providers/theme-provider"

const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider router={router} />
		</ThemeProvider>

	);
};

export default App;
