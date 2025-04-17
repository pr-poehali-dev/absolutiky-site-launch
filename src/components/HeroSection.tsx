import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">ABSOLUTIKY</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Элитный клан Standoff 2, объединяющий лучших игроков. 
          Созданный игроком Absolute для достижения высот в мире соревновательного геймплея.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-red-600 hover:bg-red-700">Вступить в клан</Button>
          <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-800">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
}
