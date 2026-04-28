import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles';
import {BrowserRouter} from "react-router";
import Router from "@/app";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
