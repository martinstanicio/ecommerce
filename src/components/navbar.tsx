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
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex max-md:justify-between p-4 gap-8 items-center">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden max-md:order-last"
            >
              <Menu />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="p-6 flex flex-col justify-between items-center"
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
                          "text-xl text-center",
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
        <NavigationMenu className="max-md:hidden mr-auto">
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
