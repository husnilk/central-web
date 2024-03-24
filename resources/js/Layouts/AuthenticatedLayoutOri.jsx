import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/shadcn/ui/navigation-menu"
import {Link} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {Input} from "@/shadcn/ui/input.jsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/shadcn/ui/dropdown-menu.jsx";
import {Button} from "@/shadcn/ui/button.jsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/shadcn/ui/avatar.jsx";
import {ScrollArea} from "@/shadcn/ui/scroll-area.jsx";

export default function AuthenticatedOri({user, header, children}) {

    return (
        <>
            <div className="hidden flex-col md:flex">
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">

                        <div>
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500"/>
                        </div>

                        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">

                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                shadcn/ui
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Beautifully designed components that you can copy and
                                                                paste into your apps. Accessible. Customizable. Open
                                                                Source.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                <NavigationMenuLink>
                                                    Documentation
                                                </NavigationMenuLink>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </nav>

                        <div className="ml-auto flex items-center space-x-4">

                            <div>
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="md:w-[100px] lg:w-[300px]"
                                />
                            </div>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="/avatars/01.png" alt="@shadcn"/>
                                            <AvatarFallback>SC</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">{user.name}</p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {user.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Profile
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Billing
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Settings
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>New Team</DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem>
                                        <Link method="post" className="block" href={route('logout')} as="button">
                                            Log Out
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>

                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-5">
                            <div className="pb-12 hidden lg:block">
                                <div className="space-y-4 py-4">
                                    <div className="px-3 py-2">
                                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                            Discover
                                        </h2>
                                        <div className="space-y-1">
                                            <Button variant="secondary" className="w-full justify-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="mr-2 h-4 w-4"
                                                >
                                                    <circle cx="12" cy="12" r="10"/>
                                                    <polygon points="10 8 16 12 10 16 10 8"/>
                                                </svg>
                                                Listen Now
                                            </Button>
                                            <Button variant="ghost" className="w-full justify-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="mr-2 h-4 w-4"
                                                >
                                                    <rect width="7" height="7" x="3" y="3" rx="1"/>
                                                    <rect width="7" height="7" x="14" y="3" rx="1"/>
                                                    <rect width="7" height="7" x="14" y="14" rx="1"/>
                                                    <rect width="7" height="7" x="3" y="14" rx="1"/>
                                                </svg>
                                                Browse
                                            </Button>
                                            <Button variant="ghost" className="w-full justify-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="mr-2 h-4 w-4"
                                                >
                                                    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/>
                                                    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/>
                                                    <circle cx="12" cy="12" r="2"/>
                                                    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/>
                                                    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
                                                </svg>
                                                Radio
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                                            Playlists
                                        </h2>
                                        <ScrollArea className="h-[300px] px-1">
                                            <div className="space-y-1 p-2">
                                                <Button
                                                    key="playlist-1"
                                                    variant="ghost"
                                                    className="w-full justify-start font-normal"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="mr-2 h-4 w-4"
                                                    >
                                                        <path d="M21 15V6"/>
                                                        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                                        <path d="M12 12H3"/>
                                                        <path d="M16 6H3"/>
                                                        <path d="M12 18H3"/>
                                                    </svg>
                                                    Playlist 1
                                                </Button>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 lg:col-span-4 lg:border-l">
                                <main>
                                    <div className="h-full px-4 py-6 lg:px-8">
                                        <div className="flex-1 space-y-4 p-8 pt-6">
                                            {children}
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    );
}
