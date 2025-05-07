import "./globals.css";

export const metadata = {
  title: "Portfolio - Maqsood",
  description:
    "Explore the portfolio of Maqsood Ahmed, a passionate Fullstack Developer based in Islamabad. Showcasing modern web projects, coding expertise, and creative problem-solving across MERN stack, ReactJS, and more."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
