import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClanRules from "@/components/ClanRules";

export default function Rules() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Правила клана Absolutiky</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Узнайте о правилах нашего клана и стандартах для участников
            </p>
          </div>
        </div>
        <ClanRules />
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Дополнительные правила</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-3">Коммуникация</h3>
                  <p className="text-gray-700">
                    Обязательное присутствие в Discord-сервере клана для координации действий и обсуждения тактик.
                    Участие в голосовых каналах во время совместных тренировок.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-3">Тренировки</h3>
                  <p className="text-gray-700">
                    Регулярное участие в клановых тренировках. Минимум 2 раза в неделю. 
                    О невозможности участия необходимо предупреждать заранее.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-3">Представление клана</h3>
                  <p className="text-gray-700">
                    Члены клана всегда должны достойно представлять Absolutiky в игре и за её пределами.
                    Запрещены токсичное поведение, читы и эксплойты - это приведет к немедленному исключению.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 bg-red-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Важно!</h3>
                <p>
                  Все участники клана обязаны использовать префикс [ABS] в своем игровом нике.
                  Это требование от основателя клана - Absolute, и является обязательным для всех членов.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
