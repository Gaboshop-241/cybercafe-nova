/** SMART CYBER PK11 — thème sombre pour une navigation claire sur les photos du lieu. */
/**
 * SMART CYBER PK11 — enveloppe applicative de la station numérique orange.
 * Le thème clair ou sombre est piloté globalement, sans modifier la structure du site.
 */
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light" switchable><Router /></ThemeProvider></ErrorBoundary>;
}
