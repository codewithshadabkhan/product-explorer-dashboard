import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  return (
    <header className="border-b dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold dark:text-white">
          Product Explorer
        </Link>

        <div className="flex items-center gap-3 ">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
