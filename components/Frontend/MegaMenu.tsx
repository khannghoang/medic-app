"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const megaMenu = [
  {
    title:"Top Booked",
    services:[
      {
      title:"Telehealth",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"Video prescription refill",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"In person doctor visit",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"UTI consult",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    ]
  },
  {
    title:"Doctors",
    services:[
      {
      title:"Telehealth",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"Video prescription refill",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"In person doctor visit",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"UTI consult",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    ]
  },
  {
    title:"Specialists",
    services:[
      {
      title:"Telehealth",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"Video prescription refill",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"In person doctor visit",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"UTI consult",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    ]
  },
  {
    title:"Symptoms",
    services:[
      {
      title:"Telehealth",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"Video prescription refill",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"In person doctor visit",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    {
      title:"UTI consult",
      slug:"tele-health",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur unde ut ex perferendis exercitationem error,reprehenderit maiores nulla! Dicta quisquam ducimus unde assumenda neque quae blanditiis reprehenderit ullam dolor!"
    },
    ]
  },
]
export default function MegaMenu() {
  return (
    <NavigationMenu className="bg-white">
      <NavigationMenuList className="space-x-4">
      {
        megaMenu.map((item, i) => {
          return(
          <NavigationMenuItem key={i}>
          <NavigationMenuTrigger className="!bg-white hover:!bg-gray-300 transition-colors duration-200 rounded-1xl rounded text-gray-600">{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white ">
              {item.services.map((component) => (
                <ListItem className=" hover:bg-gray-100 "
                  key={component.title}
                  title={component.title}
                  href={`/services${component.slug}`}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
          )
        })
      }
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
