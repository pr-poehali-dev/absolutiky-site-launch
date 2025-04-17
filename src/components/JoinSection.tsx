import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function JoinSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Как вступить в клан</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к нашему элитному сообществу и станьте частью клана Absolutiky
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>01. Требования</CardTitle>
              <CardDescription>Что нужно для вступления</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Уровень не ниже 40</li>
                <li>K/D не менее 1.5</li>
                <li>Опыт игры от 1 года</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>02. Заявка</CardTitle>
              <CardDescription>Как подать заявку</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Свяжитесь с лидером клана Absolute через 
                личные сообщения в игре или на нашем Discord-сервере.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>03. Ник</CardTitle>
              <CardDescription>Для членов клана</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-red-600">
                Все участники клана должны добавить префикс [ABS] к своему нику в Standoff 2.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
