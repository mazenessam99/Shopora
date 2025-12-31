import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavLink } from "react-router-dom"
import { LogOut, Settings, UserRound } from "lucide-react";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>MZ</AvatarFallback>
        </Avatar>

      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 rounded cursor-pointer" align="center">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            Profile
            <DropdownMenuShortcut>
              <UserRound />
            </DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            Settings
            <DropdownMenuShortcut>
              <Settings />
            </DropdownMenuShortcut>
          </DropdownMenuItem >

        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <NavLink to={'/login'}>
          <DropdownMenuItem className="cursor-pointer">
            Logout
            <DropdownMenuShortcut>
              <LogOut />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </NavLink>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
