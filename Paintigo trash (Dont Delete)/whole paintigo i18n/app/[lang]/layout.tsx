import { i18n } from "@i18n-config";
import "../globals.css";
import { ManagedUIContext } from "@contexts/ui.context";
import Layout from "./components/layout/layout";
import ManagedModal from "@common/modal/managed-modal";
import Footer from "./components/layout/footer/footer";
import { getDictionary } from "@/get-dictionary";
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: any };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <ManagedUIContext>
        <body>
          <div className="flex flex-col min-h-screen">
            {/* <Header /> */}
            <main
              className="relative flex-grow"
              style={{
                minHeight: "-webkit-fill-available",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {children}
            </main>{" "}
            <Footer dictionary={dictionary} />
            {/* <MobileNavigation /> */}
            <ManagedModal />
          </div>
        </body>
      </ManagedUIContext>
    </html>
  );
}
