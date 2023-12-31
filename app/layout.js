import Navigation from "@/components/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Query with Next Js (JavaScript)",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="px-4 py-6">
            <Navigation />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
