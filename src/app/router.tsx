import { Home } from "@/modules/home";
import { Center } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const PathConstants = {
  root: "/",
} as const;

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstants.root} element={<Home />} />

        <Route path="*" element={<Center>Not Found</Center>} />
      </Routes>
    </BrowserRouter>
  );
}
