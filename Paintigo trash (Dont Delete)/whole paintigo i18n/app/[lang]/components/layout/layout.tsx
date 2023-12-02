import React from "react";
import { i18n } from "@i18n-config";

// import Footer from "@components/layout/footer/footer";
// import Header from "@components/layout/header/header";
// import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main
        className="relative flex-gow bg-black"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>{" "}
      {/* <Footer /> */}
      {/* <MobileNavigation /> */}
    </div>
  );
}
