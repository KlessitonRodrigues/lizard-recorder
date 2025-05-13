import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createMemoryRouter,
} from "react-router-dom";

import Router from "src/pages/routes";

import { ThemeProvider } from "./hooks/useTheme";
import If from "./lib/base/If";
import AppProviders from "./lib/components/AppProviders";
import { isEmbbedMobile } from "./styles/utils";

const App = () => {
  const isMobile = isEmbbedMobile();

  return (
    <ThemeProvider>
      <AppProviders>
        <If
          check={isMobile}
          true={<RouterProvider router={createMemoryRouter(Router)} />}
          false={<RouterProvider router={createBrowserRouter(Router)} />}
        />
      </AppProviders>
    </ThemeProvider>
  );
};

const rootEl = document.getElementById("root");
if (rootEl) createRoot(rootEl).render(<App />);
