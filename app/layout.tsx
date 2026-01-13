import { Toaster } from "sonner";
import "./globals.css";
import NetworkStatusToast from "@/components/ui/NetworkStatusToast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
        <Toaster position="top-right" richColors closeButton />
        <NetworkStatusToast />
      </body>
    </html>
  );
}
