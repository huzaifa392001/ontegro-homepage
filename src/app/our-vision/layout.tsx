import type { Metadata } from "next";
import "../globals.css";
import { montserrat, santana, acumin, lato } from "../components/fonts/fonts";

export const metadata: Metadata = {
    title: "Our Vision",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${santana.variable} ${acumin.variable} ${montserrat.variable} ${lato.variable} font-santana`}>{children}</body>
        </html>
    );
}
