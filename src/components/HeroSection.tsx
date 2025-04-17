import { Button } from "@/components/ui/button";
import AbsoluteLogo from "@/components/AbsoluteLogo";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-absolute-black to-absolute-darkred/30 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-absolute-red/20 to-transparent"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <AbsoluteLogo width={150} height={150} />
        </div>
        <h1 className="text-5xl font-bold mb-6 text-absolute-white">ABSOLUTE</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-absolute-white/90">
          Элитный клан Standoff 2, объединяющий лучших игроков. 
          Созданный игроком Absolute для достижения высот в мире соревновательного геймплея.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-absolute-red hover:bg-absolute-darkred border-absolute-red border-2 text-absolute-white font-bold px-6 py-2">
            Вступить в клан
          </Button>
          <Button variant="outline" className="border-absolute-red border-2 text-absolute-white hover:bg-absolute-red/20">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
}