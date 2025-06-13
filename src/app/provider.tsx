import ThemeProvider from "@/context/theme";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({});

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <MantineProvider>
      <ThemeProvider>
        <Notifications autoClose={5000} position="top-center" />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </MantineProvider>
  );
}
