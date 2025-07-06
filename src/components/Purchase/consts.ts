import ky from "@/assets/ky.png";
import dr from "@/assets/dr.jpg";
import amazon from "@/assets/amazon.png";
import ty from "@/assets/ty.png";
import { ILink, IPurchaseItem } from "@/types/types";
export const purchasePlatforms: Record<ILink, IPurchaseItem> = {
  kitapyurdu: { image: ky, title: "kitapyurdu" },
  amazon: { image: amazon, title: "amazon" },
  trendyol: { image: ty, title: "trendyol" },
  dr: { image: dr, title: "dr" },
};
