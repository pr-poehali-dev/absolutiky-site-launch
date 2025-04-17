import { Card, CardContent } from "@/components/ui/card";

export default function ClanRules() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Правила клана</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Правила, которым должен следовать каждый участник Absolutiky
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-bold text-lg">Форма ника</h3>
                <p className="text-gray-700">
                  <span className="font-semibold">Все участники клана должны использовать префикс</span>
                  <span className="text-red-600 font-bold"> [ABS]</span> в своем нике.
                </p>
                <p className="text-gray-700 italic mt-2">
                  "Прошу всех посетивших наш клан обязательно писать в нике [ABS] в Standoff 2." - Absolute
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-bold text-lg">Активность</h3>
                <p className="text-gray-700">
                  Участники должны быть активны минимум 3-4 раза в неделю и участвовать в клановых активностях.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-bold text-lg">Уважение</h3>
                <p className="text-gray-700">
                  Уважительное отношение к другим участникам клана и сообщества Standoff 2.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
