import "@/assets/styles/global.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find the perfect rental property for you and your family.",
  keywords: "rental, find rentals, find properties",
};

export default function MainLayout({ children }) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
