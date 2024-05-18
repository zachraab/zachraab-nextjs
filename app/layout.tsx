import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Modal from "./components/nav-modal";
import { AOSInit } from './aos';
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Zach Raab Portfolio",
	description: "Empowering digital experiences through innovative and efficient React development.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<AOSInit />
			<body className={inter.className}>
				<Suspense>
					{children}
					<Modal/>
				</Suspense>
			</body>
		</html>
	);
}
