import "./globals.css";

import { openSans } from "utils/fonts";

export const metadata = {
  title: "FMAM",
  description: "Find Me A Meal",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
