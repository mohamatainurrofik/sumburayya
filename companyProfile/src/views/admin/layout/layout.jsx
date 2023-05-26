import { ColorModeContext, useMode } from "../../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './topbar';
import Sidebars from './sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

const Layout = ({ children }) => {
    const [theme, colorMode] = useMode();
    return (
        <>
            <CssBaseline />
            <div className="app">
                <ProSidebarProvider>
                    <Sidebars />
                </ProSidebarProvider>
                <main className="content">
                    <Topbar />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;