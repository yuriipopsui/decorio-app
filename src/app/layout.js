import { Manrope } from "next/font/google";
import "./globals.css";
import favicon from "@/app/favicon.ico";
import LayoutChildren from "@/lib/layoutChildren";
import ProgressCircle from "@/components/ui/scrollCircle";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";

import Providers from "@/providers/Providers";

const manrope = Manrope({
  subsets: ['latin','cyrillic-ext' ],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata = {
  title: "Decorio",
  description: "Decorio - Інтер'єрні декоративні штукатурки",
  icons: {
    icon: `${favicon.src}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${manrope.variable}`} suppressHydrationWarning={true}>
        <Providers>
         <div id="page-wrapper" className="!relative ">
          {/* Body marking start */}
          <div className="w-full h-full fixed -z-[1] top-0 left-0 right-0 mx-auto page-lines">
            <div className="container h-full">
              <div className="flex justify-between w-full h-full">
                <span className="block h-full w-[1px] bg-secondary_rgba"></span>
                <span className="block h-full w-[1px] bg-secondary_rgba"></span>
                <span className="block h-full w-[1px] bg-secondary_rgba"></span>
              </div>
            </div>
          </div>
          {/* Body marking end */}

          {/* Page scroll progress */ }
          <ProgressCircle />

          {/* Header + Body + Footer */}
           <Header />
        
          <LayoutChildren>
            {children}
          </LayoutChildren>
          
          <Footer />
        </div> 
        </Providers>
      </body>
    </html>
  );
}
