import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LeaderSection() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Основатель клана</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Познакомьтесь с создателем и лидером клана Absolutiky
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-gray-900 border-none">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg" alt="Absolute" />
                  <AvatarFallback className="bg-red-600 text-xl">ABS</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-white text-2xl">Absolute</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-red-400 font-semibold mb-2">Основатель & Лидер клана</p>
              <p className="text-gray-400">
                Профессиональный игрок и стратег с многолетним опытом в Standoff 2.
                Создал клан Absolutiky для объединения талантливых игроков и достижения высот
                в соревновательной игре.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
