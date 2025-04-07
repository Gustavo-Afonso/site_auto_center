"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg bg-green-500 hover:bg-green-600 text-white"
      onClick={() => window.open(`https://wa.me/${phoneNumber}`, "_blank")}
    >
      <Phone className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
    </Button>
  )
}

