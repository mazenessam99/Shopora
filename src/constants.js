import { Heart, HelpCircle, Home, Info, PhoneCall, ShoppingBag } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", path: "/", icon: Home },
  { label: "Shop", path: "/products", icon: ShoppingBag },
  { label: "About", path: "/about", icon: Info },
  { label: "Support", path: "/support", icon: HelpCircle },
  { label: "Contact", path: "/contact", icon: PhoneCall },
  { label: "Wishlist", path: "/wishlist", icon: Heart },
];
