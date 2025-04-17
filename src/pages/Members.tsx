import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AbsoluteLogo from "@/components/AbsoluteLogo";

// Данные участников клана
const members = [
  {
    id: 1,
    name: "[ABS] Absolutely Глава",
    role: "Основатель и лидер",
    level: 65,
    kd: 2.8,
    avatar: "https://cdn.poehali.dev/files/ede9a40b-4bd4-43cb-acf7-2d99b5f9868d.jpg"
  },
  {
    id: 2,
    name: "[ABS] Absolutely-Глав-Зам",
    role: "Заместитель",
    level: 61,
    kd: 2.6,
    avatar: "https://cdn.poehali.dev/files/ede9a40b-4bd4-43cb-acf7-2d99b5f9868d.jpg"
  },
  {
    id: 3,
    name: "[ABS] Shadow",
    role: "Снайпер",
    level: 58,
    kd: 2.3,
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    name: "[ABS] Sniper",
    role: "Штурмовик",
    level: 51,
    kd: 2.1,
    avatar: "/placeholder.svg"
  }
];

export default function Members() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        <div className="bg-absolute-black py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-absolute-red/30 to-transparent opacity-60 z-0"></div>
          <div className="container mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <AbsoluteLogo width={120} height={120} />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-absolute-white">Участники клана</h1>
            <p className="text-xl max-w-2xl mx-auto text-absolute-white/90">
              Элитные игроки клана Absolute
            </p>
          </div>
        </div>

        <section className="py-16 bg-gradient-to-b from-black to-absolute-darkred/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member) => (
                <Card key={member.id} className="overflow-hidden border-2 border-absolute-red bg-black/80 hover:shadow-lg hover:shadow-absolute-red/30 transition-all">
                  <CardHeader className="bg-gradient-to-r from-absolute-darkred to-black pb-0 border-b border-absolute-red/50">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-absolute-red">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-absolute-red text-absolute-white">
                          {member.name.substring(5, 7)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-bold text-absolute-white">{member.name}</h3>
                        <p className="text-absolute-red">{member.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 text-absolute-white">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/50 border border-absolute-red/30 p-3 rounded-md text-center">
                        <span className="block text-sm text-absolute-white/70">Уровень</span>
                        <span className="font-bold text-lg">{member.level}</span>
                      </div>
                      <div className="bg-black/50 border border-absolute-red/30 p-3 rounded-md text-center">
                        <span className="block text-sm text-absolute-white/70">K/D</span>
                        <span className="font-bold text-lg">{member.kd}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg font-medium text-absolute-white">Хотите присоединиться к нашему клану?</p>
              <p className="mt-2 text-absolute-white/70 max-w-2xl mx-auto">
                Мы всегда ищем талантливых игроков. Чтобы стать частью Absolute, ознакомьтесь с требованиями на главной странице.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}