import { useState } from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './views/admin/layout/topbar';
import Sidebars from './views/admin/layout/sidebar';
import Dashboard from './views/admin/dashboard';
import Contacts from './views/admin/contacts';
import Invoices from './views/admin/invoices';
import Form from './views/admin/forms';
import Teams from './views/admin/teams';
import FAQ from './views/admin/faq';
import { useLocation, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Landing from './views/compro/Landing';
import About from './views/compro/Landing/about';
import { AnimatePresence } from 'framer-motion'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,

  },
  {
    path: "/about",
    element: <About />,
  },
])


function App() {

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <RouterProvider router={router} />
        </AnimatePresence>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App
