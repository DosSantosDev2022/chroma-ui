'use client'
import { Separator } from "@radix-ui/react-separator"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"
import { SidebarTrigger } from "../ui/sidebar"
import { usePathname } from "next/navigation"
import { getFriendlyRouteName } from "@/utils/route-helpers"
import { ModeToggleButton } from "../global/toggle-button-theme"

const Header = () => {
  const pathName = usePathname()
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center justify-between w-full gap-2 px-4">
        <div className="flex items-center gap-1">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {getFriendlyRouteName(pathName)}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <ModeToggleButton />
      </div>
    </header>
  )
}

export { Header }