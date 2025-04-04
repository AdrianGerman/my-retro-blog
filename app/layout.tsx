import BlinkingCursor from "./components/BlinkingCursor"
import ColorfulPixelLogo from "./components/ColorfulPixelLogo"
import FloatingPixels from "./components/FloatingPixels"
import NavMenu from "./components/NavMenu"
import PixelatedBackground from "./components/PixelatedBackground"
import SoundEffect from "./components/SoundEffect"
import ThemeToggle from "./components/ThemeToggle"
import "./globals.css"
import { Press_Start_2P, VT323 } from "next/font/google"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p"
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323"
})

export const metadata = {
  title: "Pixel Wisdom",
  description: "Tech, Art, and Finance tips with a retro twist"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${vt323.variable} font-sans bg-gray-900 text-green-400 dark:bg-gray-900 dark:text-green-400`}
      >
        <PixelatedBackground />

        <div className="max-w-4xl mx-auto px-4">
          <header className="py-8 flex flex-col items-center">
            <ColorfulPixelLogo />
            <h1 className="text-4xl font-bold text-center font-pixel mb-2">
              Pixel Wisdom
            </h1>
            <p className="text-xl text-center font-mono flex items-center">
              Tech • Art • Finance <BlinkingCursor />
            </p>
            <NavMenu />
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </header>
          <main>{children}</main>
          <footer className="py-8 text-center font-mono">
            © 2025 Pixel Wisdom. Created by AdrianGerman.
          </footer>
        </div>
        <FloatingPixels />
        <SoundEffect />
      </body>
    </html>
  )
}
