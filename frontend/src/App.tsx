import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import UsersPage from "./pages/UsersPage";
import HistoryPage from "./pages/HistoryPage";
import Orders from "./pages/OrdersPage";
import LicensesPage from "./pages/InventoryPage";
import HomePage from "./pages/HomePage";
import { ThemeProvider, createTheme } from "@mui/material";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { pink } from "@mui/material/colors";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Home",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Users",
        element: (
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/History",
        element: (
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/inventory",
        element: (
          <ProtectedRoute>
            <LicensesPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      light: "#228B22",
      main: "#0E0637",
      dark: "#32CD32",
      contrastText: "#fff",
    },
    secondary: {
      light: "#228B22",
      main: pink[700],
      dark: "#32CD32",
      contrastText: "#fff",
    },
    warning: {
      main: "#f44336",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
