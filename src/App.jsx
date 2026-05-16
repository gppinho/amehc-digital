import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider, useAuth } from "@/lib/AuthContext";
import UserNotRegisteredError from "@/components/UserNotRegisteredError";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Noticias from "@/pages/Noticias";
import Agenda from "@/pages/Agenda";
import Convenios from "@/pages/Convenios";
import AssocieSe from "@/pages/AssocieSe";
import Contato from "@/pages/Contato";
import AreaAssociado from "@/pages/AreaAssociado";
import Login from "@/pages/Login";

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-clinical-white">
        <div className="w-8 h-8 border-4 border-navy/20 border-t-navy rounded-full animate-spin" />
      </div>
    );
  }

  if (authError) {
    if (authError.type === "user_not_registered") return <UserNotRegisteredError />;
    if (authError.type === "auth_required") { navigateToLogin(); return null; }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<Noticias />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/convenios" element={<Convenios />} />
        <Route path="/associe-se" element={<AssocieSe />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/area-do-associado" element={<AreaAssociado />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;