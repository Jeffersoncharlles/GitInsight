import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { queryClient } from "./libs/react-query";
import { RoutesPage } from "./routes";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<RoutesPage />
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
