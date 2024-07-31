import { Inter } from "next/font/google";
import Head from 'next/head';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tic Tac Toe - Play Online for Free | Next.js & React.js",
  description: "Enjoy playing Tic Tac Toe online for free! Built with Next.js and React.js, this classic game offers a smooth and interactive experience. Challenge your friends and improve your strategy skills. Start playing now!",
  keywords: "Tic Tac Toe, Online Tic Tac Toe, Free Tic Tac Toe Game, Play Tic Tac Toe, Next.js Tic Tac Toe, React.js Tic Tac Toe, Classic Tic Tac Toe, Strategy Games",
  author: "Your Name or Team Name",
  image: "", 
  url: "" 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <link rel="canonical" href={metadata.url} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
