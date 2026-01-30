"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { LucideIcon } from "lucide-react"

import { cn } from "@/utils/utils"

interface ThemeSwitchProps extends Omit<React.ComponentProps<typeof SwitchPrimitive.Root>, 'children'> {
  size?: "sm" | "default"
  darkText?: string
  lightText?: string
  darkIcon?: LucideIcon
  lightIcon?: LucideIcon
  showText?: boolean
  showIcons?: boolean
}

function ThemeSwitch({
  className,
  size = "default",
  darkText = "Dark",
  lightText = "Light",
  darkIcon: DarkIcon,
  lightIcon: LightIcon,
  showText = true,
  showIcons = true,
  checked,
  ...props
}: ThemeSwitchProps) {
  const isDark = checked

  return (
    <div className="flex items-center gap-3">
      {/* Indicateur visuel du mode actuel (à gauche) */}
      {(showText || showIcons) && (
        <div className="flex items-center gap-2">
          {showIcons && LightIcon && (
            <LightIcon 
              className={cn(
                "transition-opacity",
                isDark ? "opacity-40" : "opacity-100",
                size === "sm" ? "size-3.5" : "size-4"
              )} 
            />
          )}
          {showText && (
            <span className={cn(
              "text-sm font-medium transition-opacity",
              isDark ? "opacity-40" : "opacity-100"
            )}>
              {lightText}
            </span>
          )}
        </div>
      )}

      {/* Switch */}
      <SwitchPrimitive.Root
        data-slot="switch"
        data-size={size}
        checked={checked}
        className={cn(
          "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitive.Root>

      {/* Indicateur visuel du mode actuel (à droite) */}
      {(showText || showIcons) && (
        <div className="flex items-center gap-2">
          {showText && (
            <span className={cn(
              "text-sm font-medium transition-opacity",
              isDark ? "opacity-100" : "opacity-40"
            )}>
              {darkText}
            </span>
          )}
          {showIcons && DarkIcon && (
            <DarkIcon 
              className={cn(
                "transition-opacity",
                isDark ? "opacity-100" : "opacity-40",
                size === "sm" ? "size-3.5" : "size-4"
              )} 
            />
          )}
        </div>
      )}
    </div>
  )
}

export { ThemeSwitch }