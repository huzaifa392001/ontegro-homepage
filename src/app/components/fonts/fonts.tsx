import { Montserrat, Lato, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
})

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"],
  variable: "--font-poppins",
})

export const santana = localFont({
  src: [
    {
      path: "./fonts/Santana-Bold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-santana",
});

export const acumin = localFont({
  src: [
    {
      path: "./fonts/AcuminPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AcuminPro-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/AcuminPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-acumin",
});
