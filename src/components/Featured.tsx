import { useState } from "react"
import Icon from "@/components/ui/icon"
import OrderModal from "@/components/OrderModal"

const combos = [
  {
    name: "Утренний ритуал",
    teas: ["Гёкуро", "Дарджилинг First Flush"],
    description: "Пробуждение с японской свежестью и индийской бодростью.",
    oldPrice: "2 700 ₽",
    price: "2 200 ₽",
    saving: "−500 ₽",
  },
  {
    name: "Вечерний покой",
    teas: ["Да Хун Пао", "Белый пион"],
    description: "Дымный улун и деликатный белый — идеальный финал дня.",
    oldPrice: "1 950 ₽",
    price: "1 600 ₽",
    saving: "−350 ₽",
  },
  {
    name: "Коллекция мастера",
    teas: ["Да Хун Пао", "Гёкуро", "Белый пион"],
    description: "Три мира чая: Китай, Япония и снова Китай. Для настоящих ценителей.",
    oldPrice: "3 750 ₽",
    price: "2 900 ₽",
    saving: "−850 ₽",
  },
]

export default function Featured() {
  const [selectedTea, setSelectedTea] = useState<string | null>(null)

  return (
    <section className="relative z-20 px-8 py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Рекомендуемый чай */}
        <div>
          <div className="mb-10">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Выбор редакции</p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              <span className="font-medium italic">Рекомендуем</span> попробовать
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0">
              <img
                src="https://cdn.poehali.dev/projects/91ed680b-5b5f-46c7-90bd-83c4820d3516/files/911dbb89-2218-417b-9a95-e33c4a053be2.jpg"
                alt="Да Хун Пао"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            </div>

            <div className="relative p-10 md:p-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="flex flex-col gap-4 max-w-lg">
                <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs uppercase tracking-widest">
                  <Icon name="Star" size={12} />
                  Хит продаж
                </span>
                <h3 className="text-white text-3xl md:text-4xl font-light">
                  <span className="font-medium italic">Да Хун Пао</span>
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Легендарный скальный улун из гор Уишань. Глубокий дымный аромат, ноты жжёного сахара и долгое тёплое послевкусие. Один из самых ценимых чаёв в мире.
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-white text-2xl font-medium">1 200 ₽</span>
                  <span className="text-white/40 text-sm">/ 50 г</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedTea("Да Хун Пао")}
                className="shrink-0 px-8 py-3 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
              >
                Заказать
                <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Комбо-наборы */}
        <div>
          <div className="mb-10">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Выгодные наборы</p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              Комбо <span className="font-medium italic">со скидкой</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {combos.map((combo) => (
              <div
                key={combo.name}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col gap-4 hover:border-white/25 transition-all duration-300 group"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

                <div className="flex items-start justify-between">
                  <h3 className="text-white text-base font-medium leading-tight">{combo.name}</h3>
                  <span className="text-[10px] text-amber-400 border border-amber-400/30 rounded-full px-2 py-0.5 shrink-0 ml-2">
                    {combo.saving}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {combo.teas.map((tea) => (
                    <span
                      key={tea}
                      className="text-[10px] text-white/60 border border-white/15 rounded-full px-2.5 py-0.5"
                    >
                      {tea}
                    </span>
                  ))}
                </div>

                <p className="text-white/55 text-xs leading-relaxed flex-1">{combo.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-white text-lg font-medium">{combo.price}</span>
                    <span className="text-white/30 text-xs line-through">{combo.oldPrice}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTea(combo.name)}
                  className="w-full py-2 rounded-full border border-white/20 text-white/70 text-xs hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-amber-400/30"
                >
                  Заказать набор
                  <Icon name="ArrowRight" size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OrderModal teaName={selectedTea} onClose={() => setSelectedTea(null)} />
    </section>
  )
}
