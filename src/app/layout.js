import "./globals.css";
import "./components.css";
import "./blog_detail.css";

export const metadata = {
  title: "Ridgeway Services & Construction",
  description: "Building the Future with Precision - Ridgeway Services & Construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
