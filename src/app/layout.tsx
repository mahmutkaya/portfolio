import { inter, poppins, firaCode } from '@/lib/fonts';
import './globals.css';

export const metadata = {
  title: 'Mahmut Kaya | QA Engineer',
  description: 'Portfolio website of Mahmut Kaya, QA Engineer specializing in test automation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${firaCode.variable}`}>
      <body className="min-h-screen bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
