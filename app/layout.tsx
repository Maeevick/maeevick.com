import "./globals.css";

const TITLE = `Maeevick.com | Ton Product Market Fit avec fluidité et sérénité`;
const DESCRIPTION = `
Coaching et freelancing Produit et Tech pour réussir avec ton SaaS/MicroSaaS. 
Approche empirique et pragmatique basée sur 15 années d'expérience et des centaines de difficultés rencontrées.
`;
const KEYWORDS = `SaaS, MicroSaaS, Product Market Fit, Go To Market, Product Management, Extreme Programming, Software Craftsmanship, Data Management`;

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
