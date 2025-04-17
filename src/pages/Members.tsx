import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Временные данные для примера
const members = [
  {
    id: 1,
    name: "[ABS] Absolute",
    role: "Основатель и лидер",
    level: 65,
    kd: 2.8,
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "[ABS] Shadow",
    role: "Заместитель",
    level: 58,
    kd: 2.3,
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "[ABS] Sniper",
    role: "Снайпер",
    level: 51,
    kd: 2.1,
    avatar: "/placeholder.svg"
  }
];

export default function Members() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Участники клана</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Знакомьтесь с элитными игроками клана Absolutiky
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member) => (
                <Card key={member.id} className="overflow-hidden border-t-4 border-t-red-600 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gray-100 pb-0">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-red-600">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-red-600 text-white">
                          {member.name.substring(5, 7)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-red-600">{member.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 p-3 rounded-md text-center">
                        <span className="block text-sm text-gray-500">Уровень</span>
                        <span className="font-bold text-lg">{member.level}</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md text-center">
                        <span className="block text-sm text-gray-500">K/D</span>
                        <span className="font-bold text-lg">{member.kd}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg font-medium">Хотите присоединиться к нашему клану?</p>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Мы всегда ищем талантливых игроков. Чтобы стать частью Absolutiky, ознакомьтесь с требованиями на главной странице.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
