import * as React from "react";
import {
    Settings,
    LayoutDashboard,
    Users,
    Ticket,
} from "lucide-react";

import {
    Sidebar,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/shadcn/ui/sidebar";
import { Link, useLocation } from "react-router";
import logo from "@/assets/images/logo.jpg";

const mainNavItems = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Bookings",
        url: "/bookings",
        icon: Ticket,
    },
    {
        title: "Users",
        url: "/users",
        icon: Users,
    },
];

const footerManu = [
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const location = useLocation();

    const isActive = (url: string) => {
        if (url === "/") return location.pathname === url;
        return location.pathname.startsWith(url);
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="flex items-center justify-center px-1 pt-2">
                <div className="flex items-center justify-center">
                    <img src={logo} alt="Deuri Logo" className="h-20 w-20 md:h-32 md:w-32 group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-10 group-has-[[data-collapsible=icon]]/sidebar-wrapper:w-10  rounded-full border-2 border-amber-400 group-has-[[data-collapsible=icon]]/sidebar-wrapper:p-0 p-1" />
                </div>
            </SidebarHeader>
            <SidebarHeader className="">
                <SidebarMenu>
                    {mainNavItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={isActive(item.url)}
                                tooltip={{
                                    children: item.title,
                                    hidden: false,
                                }}
                            >
                                <Link to={"/admin" + item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarHeader>
            <SidebarFooter className="mt-auto">
                <SidebarMenu>
                    {footerManu.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={isActive(item.url)}
                                tooltip={{
                                    children: item.title,
                                    hidden: false,
                                }}
                            >
                                <Link to={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
