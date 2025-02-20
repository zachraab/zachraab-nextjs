import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styling/globals.css";
import "./styling/embla.css";
import { AOSInit } from './aos';
import { IsClientCtxProvider } from '../app/components/is-client-ctx';

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
				<IsClientCtxProvider>
					{children}
				</IsClientCtxProvider>
			</body>
		</html>
	);
}
