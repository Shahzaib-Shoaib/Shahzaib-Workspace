import Container from "@components/ui/container";
// import { siteSettings } from "@settings/site-settings";
import { AiOutlineArrowUp } from "react-icons/ai";
import {siteSettings} from "@/src/settings/site-settings";
import cn from "classnames";
import Link from "@components/ui/link";
// import { useTranslation } from "next-i18next";
import Image from "next/image";
interface CopyrightProps {
  payment?: {
    id: string | number;
    path?: string;
    name: string;
    image: string;
    width: number;
    height: number;
  }[];
  variant?: "contemporary";
  dictionary: any;
}
const year = new Date().getFullYear();
const Copyright: React.FC<CopyrightProps> = ({
  payment,
  variant,
  dictionary,
}) => {
  return (
    <div className="border-t border-gray-800 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
      <Container
        className={cn(
          "flex flex-col-reverse md:flex-row text-center md:justify-between",
          {
            "items-center": variant === "contemporary",
          }
        )}
      >
        <p
          className={cn("text-white text-xs lg:text-sm leading-6 md:mt-5 ", {
            "p-0 m-0": variant === "contemporary",
          })}
        >
          {dictionary.increment} &copy; {year}&nbsp;
          <a
            className="font-semibold text-white transition-colors duration-200 ease-in-out hover:text-gray-300"
            href={siteSettings.author.websiteUrl}
          >
            {siteSettings.author.name}
          </a>
          &nbsp; {dictionary.increment}
        </p>

        {payment && (
          <ul className="hidden md:flex flex-wrap justify-center items-center space-s-4 xs:space-s-5 lg:space-s-7 mb-1 md:mb-0 mx-auto md:mx-0">
            {payment?.map((item) => (
              <li
                className="mb-2 md:mb-0 transition hover:opacity-80"
                key={`payment-list--key${item.id}`}
              >
                <a href={item.path ? item.path : "/#"} target="_blank">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={item.height}
                    width={item.width}
                  />
                </a>
              </li>
            ))}
          </ul>
        )}

        {variant === "contemporary" && (
          <p className="text-sm font-semibold leading-[19px] text-[#212121] cursor-pointer">
            <Link href="#siteHeader">Scroll to top</Link>

            <AiOutlineArrowUp className="inline ms-3" />
          </p>
        )}
      </Container>
    </div>
  );
};

export default Copyright;
