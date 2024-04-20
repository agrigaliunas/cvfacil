import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";

export const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });

export const metadata = {
  title: "CVfacil",
  description: "Creá y compartí tu CV, fácil y rápido.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Header />
        <main id='main' className="flex items-center justify-center flex-col">
            {children}
        </main>
      </body>
    </html>
  );
}
