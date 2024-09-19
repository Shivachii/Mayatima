import BackgroundImage from "../components/Backgrounds/Background";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const urls = ["/children.jpg", "/child-friends.jpg", "/child-road.jpg"];

  return (
    <section>
      <div className="flex items-center justify-center">
        <BackgroundImage imageUrls={urls}></BackgroundImage>
      </div>
      {children}
    </section>
  );
}
