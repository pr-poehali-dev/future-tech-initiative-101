import { useState } from "react"
import Icon from "@/components/ui/icon"
import OrderModal from "@/components/OrderModal"

const teas = [
  {
    name: "Да Хун Пао",
    origin: "Китай, Уишань",
    type: "Улун",
    description: "Легендарный скальный улун с глубоким дымным ароматом и нотами жжёного сахара.",
    emoji: "🍂",
    color: "from-amber-950/60 to-amber-900/20",
    badge: "Хит",
  },
  {
    name: "Гёкуро",
    origin: "Япония, Удзи",
    type: "Зелёный",
    description: "Теневой зелёный чай с умами-вкусом и нежной сладостью морских водорослей.",
    emoji: "🌿",
    color: "from-green-950/60 to-green-900/20",
    badge: "Премиум",
  },
  {
    name: "Дарджилинг First Flush",
    origin: "Индия, Дарджилинг",
    type: "Чёрный",
    description: "Первый сбор весны с мускатными нотами и свежим цветочным послевкусием.",
    emoji: "🌸",
    color: "from-rose-950/60 to-rose-900/20",
    badge: "Новинка",
  },
  {
    name: "Белый пион",
    origin: "Китай, Фуцзянь",
    type: "Белый",
    description: "Деликатный белый чай с фруктовой свежестью и едва уловимым медовым ароматом.",
    emoji: "🤍",
    color: "from-slate-800/60 to-slate-700/20",
    badge: null,
  },
]

export default function TeaCards() {
  const [selectedTea, setSelectedTea] = useState<string | null>(null)

  return (
    <section id="catalog" className="relative z-20 px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Каталог</p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            <span className="font-medium italic">Избранные</span> сорта
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teas.map((tea) => (
            <div
              key={tea.name}
              className={`relative rounded-2xl bg-gradient-to-b ${tea.color} border border-white/10 backdrop-blur-md p-6 flex flex-col gap-4 hover:border-white/25 transition-all duration-300 cursor-pointer group`}
            >
              {tea.badge && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-white/60 border border-white/20 rounded-full px-2 py-0.5">
                  {tea.badge}
                </span>
              )}

              <div className="text-4xl">{tea.emoji}</div>

              <div className="flex flex-col gap-1">
                <p className="text-white/40 text-[10px] uppercase tracking-widest">{tea.type}</p>
                <h3 className="text-white text-lg font-medium leading-tight">{tea.name}</h3>
                <p className="text-white/50 text-xs flex items-center gap-1">
                  <Icon name="MapPin" size={10} />
                  {tea.origin}
                </p>
              </div>

              <p className="text-white/60 text-xs leading-relaxed flex-1">{tea.description}</p>

              <button
                onClick={() => setSelectedTea(tea.name)}
                className="w-full py-2 rounded-full border border-white/20 text-white/70 text-xs hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-white/30"
              >
                Заказать
                <Icon name="ArrowRight" size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <OrderModal teaName={selectedTea} onClose={() => setSelectedTea(null)} />
    </section>
  )
}