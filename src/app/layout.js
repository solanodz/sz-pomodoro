import { Inter } from "next/font/google";
import "./globals.css";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sz.pomodoro",
  description: "Customizable Pomodoro Timer for students and professionals to improve productivity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <main className="flex max-w-2xl flex-col items-center mx-auto justify-between">
          {/* <Navbar /> */}
          {children}

          <About />
        </main>
      </body>
    </html>
  );
}
