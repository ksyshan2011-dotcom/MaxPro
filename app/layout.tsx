import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAXPRO VDK — автомобили под ваши задачи",
  description: "Подбор и продажа автомобилей. MAXPRO VDK.",
  applicationName: "MAXPRO VDK",
  themeColor: "#090909",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
