import { NavLinks as Links } from "../lib/data";
import clsx from "clsx";
import Link from "next/link";
import { AboutIcon } from "./icons/about";
import { BlogIcon } from "./icons/blog";
import { CareersIcon } from "./icons/careers";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
interface NavBarProps {
  isOpen: boolean;
}

const components: { name: string; icon: () => JSX.Element }[] = [
  { name: "About", icon: AboutIcon },
  { name: "Blog", icon: BlogIcon },
  { name: "Careers", icon: CareersIcon },
];

export const NavBar = ({ isOpen }: NavBarProps) => {
  return (
    <div
      className={clsx(
        " w-0 md:flex md:grow md:visible",
        isOpen ? "visible" : "invisible"
      )}
    >
      <nav
        className={clsx(
          "md:flex md:flex-row fixed top-nav-height left-0 h-[calc(100vh_-_var(--nav-height))] w-full overflow-auto bg-black transition-opacity duration-500 md:relative md:top-0  md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:transition-none",
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-[-100vw] opacity-0"
        )}
      >
        <ul className="flex h-full flex-col ease-in md:flex-row md:items-center">
          {Links.map((link) => (
            <li
              key={link.label}
              className={clsx(
                "ml-6 border-b border-gray-500 md:border-none",
                link.className
              )}
            >
              <Link
                href={link.href}
                className={clsx(
                  "flex h-nav-height w-full translate-y-8 items-center text-lg transition-[color,transform] duration-300 hover:text-gray-400 md:translate-y-0 md:text-md md:transition-colors",
                  isOpen && "translate-y-0"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex h-nav-height items-center ml-1 delay-0">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={clsx(
                  " text-lg md:text-md border-none",
                  isOpen && "hidden"
                )}
              >
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid  w-[200px] p-1 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                  {components.map((component) => (
                    <Link
                      key={component.name}
                      href={component.name}
                      legacyBehavior
                      passHref
                      className="w-full"
                    >
                      <NavigationMenuLink
                        className={clsx(
                          navigationMenuTriggerStyle(),
                          "flex gap-2 grow content-stretch w-full text-white text-opacity-50 transition-colors hover:text-opacity-100 hover:bg-gray-100  focus:bg-background/50  focus:outline-none data-[active]:bg-background/50 data-[state=open]:bg-background/50  "
                        )}
                      >
                        <component.icon />
                        {component.name}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
