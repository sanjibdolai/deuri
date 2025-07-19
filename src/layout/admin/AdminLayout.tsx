import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/shadcn/ui/sidebar";
import { Separator } from "@/shadcn/ui/separator";
import { Outlet } from "react-router";
import { AppSidebar } from "@/components/AppSidebar";
import { ModeToggle } from "@/components/ModeToggle";
import { NavUser } from "@/components/NavUser";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/redux/slices/themeSlice";
import { useEffect } from "react";
import { useAuthState } from "@/hooks/useAuthState";

function AdminLayout() {
    const theme = useSelector(selectTheme);
    
    // Initialize authentication state management
    useAuthState();

    // Effect for managing the color theme (no changes needed here).
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            root.classList.add(systemTheme);
            return;
        }
        root.classList.add(theme);
    }, [theme]);

    return (
        <>
            <SidebarProvider className="h-svh overflow-hidden">
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-14 border-b">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                        </div>
                        <div className="grow flex justify-end items-center gap-2 px-4">
                            <ModeToggle />
                            <NavUser />
                        </div>
                    </header>
                    <div className="grow overflow-hidden p-4">
                        <Outlet />
                    </div>
                    <footer className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-t px-4">
                        <div className="flex gap-2 items-center">
                            <span>Powered By</span>
                            <a href="/" target="_blank">
                                Deuri
                            </a>
                            <span className="">|</span>
                            <span id="txtCopyrightYear" className="">
                                {new Date().getFullYear()}
                            </span>
                        </div>
                    </footer>
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}

export default AdminLayout;