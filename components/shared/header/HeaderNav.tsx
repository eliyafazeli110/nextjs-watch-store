"use client"

import { NavigationMenu } from "@base-ui/react/navigation-menu"
import { ChevronDown } from "lucide-react"

export interface NavCardProps {
  href: string
  title: string
  description: string
}

export interface NavLinkProps {
  href: string
  title: string
  className?: string
}

const triggerClassName = `flex h-9 items-center justify-center gap-1 rounded-md px-3 text-sm font-normal
  text-neutral-950
  no-underline
  select-none
  transition-colors

  hover:bg-neutral-100

  data-pressed:bg-neutral-100

  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-neutral-950

  dark:text-white
  dark:hover:bg-neutral-800
  dark:data-pressed:bg-neutral-800
  dark:focus-visible:outline-white
`

const contentClassName = `
  overflow-hidden
  rounded-lg
  bg-white
  list-none
  dark:bg-neutral-950
`

export default function HeaderNav() {
  return (
    <NavigationMenu.Root className="hidden min-w-max text-neutral-950 lg:block dark:text-white">
      <NavigationMenu.List className="flex items-center gap-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerClassName}>
            محصولات
            <NavigationMenu.Icon>
              <ChevronDown className="size-4" />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className={contentClassName}>
            <div className="grid w-130 grid-cols-2 gap-2 p-2">
              <NavCard
                href="/products/men"
                title="ساعت مردانه"
                description="مجموعه ساعت‌های مردانه"
              />

              <NavCard
                href="/products/women"
                title="ساعت زنانه"
                description="مجموعه ساعت‌های زنانه"
              />

              <NavCard
                href="/products/smart"
                title="ساعت هوشمند"
                description="جدیدترین ساعت‌های هوشمند"
              />

              <NavCard
                href="/products/sport"
                title="ساعت اسپرت"
                description="برای سبک زندگی فعال"
              />
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerClassName}>
            برندها
            <NavigationMenu.Icon>
              <ChevronDown className="size-4" />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>

        <NavLink href="/new-arrivals" title="جدیدترین‌ها" />

        <NavLink href="/best-sellers" title="پرفروش‌ترین‌ها" />

        <NavLink
          href="/sale"
          title="تخفیف‌ها"
          className="text-red-600 dark:text-red-400"
        />
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          sideOffset={8}
          collisionPadding={16}
          className="z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)"
        >
          <NavigationMenu.Popup className="relative origin-(--transform-origin) overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-lg transition-[opacity,transform] duration-200 ease-out outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
            <NavigationMenu.Arrow className="relative h-2 w-4 overflow-hidden before:absolute before:top-1/2 before:left-1/2 before:size-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:border before:border-neutral-200 before:bg-white dark:before:border-neutral-800 dark:before:bg-neutral-950" />

            <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  )
}

function NavLink({ href, title, className = "" }: NavLinkProps) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link
        href={href}
        className={`flex h-9 items-center rounded-md px-3 text-sm font-normal no-underline transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:hover:bg-neutral-800 dark:focus-visible:outline-white ${className} `}
      >
        {title}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}

function NavCard({ href, title, description }: NavCardProps) {
  return (
    <NavigationMenu.Link
      href={href}
      className="block rounded-md p-3 no-underline transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:hover:bg-neutral-800 dark:focus-visible:outline-white"
    >
      <h3 className="mb-1 text-sm font-medium">{title}</h3>

      <p className="text-xs leading-5 text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </NavigationMenu.Link>
  )
}
