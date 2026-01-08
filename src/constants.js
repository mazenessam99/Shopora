import { Heart, HelpCircle, Home, Info, LocateIcon, Mail, MapIcon, MapPin, Phone, PhoneCall, ShoppingBag } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", path: "/", icon: Home },
  { label: "Shop", path: "/products", icon: ShoppingBag },
  { label: "About", path: "/about", icon: Info },
  { label: "Support", path: "/support", icon: HelpCircle },
  { label: "Contact", path: "/contact", icon: PhoneCall },
  { label: "Wishlist", path: "/wishlist", icon: Heart },
];

export const BRANDS = [
  "https://seeklogo.com/images/N/nike-logo-2573E702E1-seeklogo.com.svg",
  "https://seeklogo.com/images/A/adidas-logo-7836AE2356-seeklogo.com.svg",
  "https://seeklogo.com/images/A/apple-logo-4F56C6C0D0-seeklogo.com.svg",
  "https://seeklogo.com/images/G/google-logo-8B9BFEDC26-seeklogo.com.svg",
  "https://seeklogo.com/images/I/instagram-logo-5F2554F50E-seeklogo.com.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0d/Zara_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/54/H%26M-Logo.svg",
];

export const CONTACT=[
  {
    id: 1,
    icon:Mail,
    title: "Email",
    value: "support@example.com",
    href: "mailto:support@example.com"
  },
  {
    id: 2,
    icon:Phone,
    title: "Phone Line",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    id: 3,
    icon:MapPin,
    title: "Headquarters",
    value: "123 Commerce Blvd, Tech City, CA",
    href: "mailto:support@example.com"
  }
];