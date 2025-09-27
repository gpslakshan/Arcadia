import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons/lib";

export const platforms = [
  {
    id: 1,
    name: "PC",
    slug: "pc",
  },
  {
    id: 2,
    name: "PlayStation",
    slug: "playstation",
  },
  {
    id: 3,
    name: "Xbox",
    slug: "xbox",
  },
  {
    id: 4,
    name: "iOS",
    slug: "ios",
  },
  {
    id: 8,
    name: "Android",
    slug: "android",
  },
  {
    id: 5,
    name: "Apple Macintosh",
    slug: "mac",
  },
  {
    id: 6,
    name: "Linux",
    slug: "linux",
  },
  {
    id: 7,
    name: "Nintendo",
    slug: "nintendo",
  },
  {
    id: 14,
    name: "Web",
    slug: "web",
  },
];

export const platformIconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};
