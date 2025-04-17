import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Данные участников клана (показываем только топ-3 на главной)
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
  }
];

export default function MembersSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-absolute-black/90 to-absolute-darkred/10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-absolute-red/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-absolute-white relative inline-block">
            Участники клана
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-absolute-red"></span>
          </h2>
          <p className="mt-4 text-absolute-white/80 max-w-2xl mx-auto">
            Познакомьтесь с элитой клана Absolute — игроками, которые определяют наш успех своим мастерством и преданностью
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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

        <div className="text-center">
          <Link to="/members">
            <Button variant="outline" className="border-absolute-red text-absolute-white hover:bg-absolute-red/20 group">
              Все участники клана
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}