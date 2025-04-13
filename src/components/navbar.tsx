"use client";

import Brand from "./brand";
import SocialIcons from "./social-icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navigation } from "@/links";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex items-center gap-8 p-4 max-md:justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="max-md:order-last md:hidden"
            >
              <Menu />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex flex-col items-center justify-between p-6"
          >
            <SheetTitle className="sr-only">Navegación</SheetTitle>
            <SheetDescription className="sr-only">
              Barra lateral de navegación móvil
            </SheetDescription>

            <Brand />

            <NavigationMenu>
              <NavigationMenuList className="flex-col gap-3">
                {navigation.map(({ title, href }) => (
                  <NavigationMenuItem key={title}>
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-center text-xl",
                        )}
                      >
                        {title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <SocialIcons />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Brand />

        {/* Desktop Navigation */}
        <NavigationMenu className="mr-auto max-md:hidden">
          <NavigationMenuList>
            {navigation.map(({ title, href }) => (
              <NavigationMenuItem key={title}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Social Links - Desktop */}
        <SocialIcons className="max-md:hidden" />
      </div>
    </header>
  );
}
