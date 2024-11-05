import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../lib/ThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import { AuthContextProvider } from "@/lib/firebase/context/AuthContext";
import { NEXT_PUBLIC_URL } from "@/constants/constants";

const meta = {
  title: "ObjectExtractor",
  description: "ObjectExtractor, FastSAM, AI SAAS, SaaS, Tharuneshwar S, tharuneshwar s, tharuneshwars, tharuneshwar, Object Extractor Image, Object Extractor image",
  image: `${NEXT_PUBLIC_URL}/og-preview.png`,
}

export const metadata: Metadata = {
  title: {
    template: "%s | ObjectExtractor",
    default: "ObjectExtractor",
  },
  keywords: "ObjectExtractor, FastSAM, AI SAAS, SaaS, Tharuneshwar S, tharuneshwar s, tharuneshwars, tharuneshwar, Object Extractor Image, Object Extractor image",
  description: meta.description,
  alternates: {
    canonical: NEXT_PUBLIC_URL,
    languages: {
      "en-US": NEXT_PUBLIC_URL,
    },
  },
  openGraph: {
    title: "ObjectExtractor",
    description: "ObjectExtractor is a platform where you can extract specific object from the image. You can use these images as wallpapers, social media posts, or any other purpose. You can also download the images you create. ObjectExtractor is a free platform and you can use it without any registration. You can select the Object on the image and place the Object Extractor the object. You can also change the color of the text and the background of the image. You can also download the images you create. ObjectExtractor is a free platform and you can use it without any registration. You can select the Object on the image and place the Object Extractor the object. You can also change the color of the text and the background of the image. You can also download the images you create.",
    url: NEXT_PUBLIC_URL,
    siteName: meta.title,
    type: "website",
    locale: "en-US",
    images: [
      {
        url: meta.image,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`relative`}
      >
        <NextUIProvider>
          <ThemeProvider
            defaultTheme="dark"
          >
            <AuthContextProvider>
              {children}
            </AuthContextProvider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>

  );
}
