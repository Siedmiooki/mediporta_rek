import App from "./App";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default {
  component: App,
  title: "App"
}

export const Default = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

