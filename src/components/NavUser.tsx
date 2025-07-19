import { LogOut, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import { logout } from "@/store/redux/slices/authSlice";
import { useDispatch } from "react-redux";

export function NavUser() {
    const dispatch = useDispatch();
    // const { data: user, isLoading } = useGetProfileQuery();
    const user = {
        userName: "Test User",
        userEmail: "test.user@gmail.com",
        userThumbnail: "",
    };
    const isLoading = false; // Simulating loading state

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {isLoading ? (
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={""} alt={""} />
                        <AvatarFallback className="rounded-lg">TU</AvatarFallback>
                    </Avatar>
                ) : (
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                            src={user?.userThumbnail || ""}
                            alt={user?.userName || ""}
                        />
                        <AvatarFallback className="rounded-lg">
                            {user?.userName.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage
                                src={user?.userThumbnail || ""}
                                alt={user?.userName || ""}
                            />
                            <AvatarFallback className="rounded-lg">
                                {user?.userName.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">{user?.userName}</span>
                            <span className="truncate text-xs">{user?.userEmail}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <a
                            href={"IKON_PLATFORM_PROFILE_URL"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <User />
                            Profile
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => dispatch(logout())}>
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
