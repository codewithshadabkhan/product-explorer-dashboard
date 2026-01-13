import { Toaster } from "sonner";
import "./globals.css";
import NetworkStatusToast from "@/components/ui/NetworkStatusToast";
import ThemeProvider from "@/components/ui/ThemeProvider";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
        <ThemeProvider>
          <Header />
          {children}
          <Toaster position="top-right" richColors closeButton />
          <NetworkStatusToast />{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
