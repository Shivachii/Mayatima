import BackgroundImage from "../components/Backgrounds/Background";
import { Navbar } from "../components/Navbar/Navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const urls = ["/child-class.jpg", "/child-friends.jpg", "/child-sit.jpg"];

  return (
    <section>
      <Navbar />
      <div className="flex items-center justify-center">
        <BackgroundImage imageUrls={urls}></BackgroundImage>
      </div>
      {children}
    </section>
  );
}
