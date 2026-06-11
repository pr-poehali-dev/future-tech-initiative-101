import { useState } from "react"
import Icon from "@/components/ui/icon"
import OrderModal from "@/components/OrderModal"

const teas = [
  {
    name: "Да Хун Пао",
    origin: "Китай, Уишань",
    type: "Улун",
    description: "Легендарный скальный улун с глубоким дымным ароматом и нотами жжёного сахара.",
    image: "https://cdn.poehali.dev/projects/91ed680b-5b5f-46c7-90bd-83c4820d3516/files/911dbb89-2218-417b-9a95-e33c4a053be2.jpg",
    color: "from-amber-950/60 to-amber-900/20",
    badge: "Хит",
  },
  {
    name: "Гёкуро",
    origin: "Япония, Удзи",
    type: "Зелёный",
    description: "Теневой зелёный чай с умами-вкусом и нежной сладостью морских водорослей.",
    image: "https://cdn.poehali.dev/projects/91ed680b-5b5f-46c7-90bd-83c4820d3516/files/6464f5ee-18d5-4aed-b509-186a1f6614f4.jpg",
    color: "from-green-950/60 to-green-900/20",
    badge: "Премиум",
  },
  {
    name: "Дарджилинг First Flush",
    origin: "Индия, Дарджилинг",
    type: "Чёрный",
    description: "Первый сбор весны с мускатными нотами и свежим цветочным послевкусием.",
    image: "https://cdn.poehali.dev/projects/91ed680b-5b5f-46c7-90bd-83c4820d3516/files/0528e3cc-bbb3-4d23-8983-1c67aef69bbe.jpg",
    color: "from-rose-950/60 to-rose-900/20",
    badge: "Новинка",
  },
  {
    name: "Белый пион",
    origin: "Китай, Фуцзянь",
    type: "Белый",
    description: "Деликатный белый чай с фруктовой свежестью и едва уловимым медовым ароматом.",
    image: "https://cdn.poehali.dev/projects/91ed680b-5b5f-46c7-90bd-83c4820d3516/files/88a09bd5-2613-45da-8b7f-acd2eea13433.jpg",
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
              className={`relative rounded-2xl bg-gradient-to-b ${tea.color} border border-white/10 backdrop-blur-md overflow-hidden flex flex-col gap-4 hover:border-white/25 transition-all duration-300 cursor-pointer group`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {tea.badge && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-2 py-0.5">
                    {tea.badge}
                  </span>
                )}
              </div>

              <div className="px-5 pb-5 flex flex-col gap-4 flex-1">
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
            </div>
          ))}
        </div>
      </div>

      <OrderModal teaName={selectedTea} onClose={() => setSelectedTea(null)} />
    </section>
  )
}