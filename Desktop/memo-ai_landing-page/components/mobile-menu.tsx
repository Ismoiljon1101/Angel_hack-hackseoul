"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed left-0 top-0 h-full w-64 bg-background border-r shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-bold">Menu</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/services" onClick={onClose}>Services</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/how-it-works" onClick={onClose}>How it works</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/testimonials" onClick={onClose}>Testimonials</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/pricing" onClick={onClose}>Pricing</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/faq" onClick={onClose}>FAQ</Link>
            </Button>
            <Button className="w-full justify-start mt-4" asChild>
              <Link href="/download" onClick={onClose}>Download</Link>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  )
}

