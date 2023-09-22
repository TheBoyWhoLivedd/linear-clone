import { Container } from "@/components/Container";
import { HomePageHero } from "@/components/sections/HomePageHero";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomePageHero />
        </Container>
      </div>
    </>
  );
}
