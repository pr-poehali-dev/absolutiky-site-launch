import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JoinSection from "@/components/JoinSection";
import ClanRules from "@/components/ClanRules";
import LeaderSection from "@/components/LeaderSection";
import MembersSection from "@/components/MembersSection";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <JoinSection />
        <LeaderSection />
        <MembersSection />
        <ClanRules />
      </main>
      <Footer />
    </div>
  );
}