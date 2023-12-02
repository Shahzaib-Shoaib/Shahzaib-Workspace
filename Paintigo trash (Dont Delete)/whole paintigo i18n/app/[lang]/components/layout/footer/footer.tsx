import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@i18n-config";

const { widgets, payment } = footer;

export default function Footer({ dictionary }: { dictionary: any }) {
  return (
    <>
      <footer className="bg-[#262626] border-b-4 border-heading mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-5">
        <Widgets widgets={widgets} dictionary={dictionary.footer} />
        <Copyright payment={payment} dictionary={dictionary.footer} />
      </footer>
    </>
  );
}
