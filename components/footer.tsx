import Link from "next/link"
import { IconBrandInstagram, IconBrandFacebook, IconBrandYoutube, IconMail, IconPhone, IconMapPin } from "@tabler/icons-react"
import { Heart } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto ">
       <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
           <Image src="./logo.jpg" alt="MomSync Logo" width={32} height={32} className="rounded-md" />
            <span className="font-serif text-foreground">MomSync</span>
          </Link>
          <h1 className="text-sm text-muted-foreground">
            © 2024 MomSync. All rights reserved.
          </h1>

        
        </div>
      </div>
      </div>
    </footer>
  )
}
