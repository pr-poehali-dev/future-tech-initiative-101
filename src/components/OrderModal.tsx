import { useState } from "react"
import Icon from "@/components/ui/icon"

interface OrderModalProps {
  teaName: string | null
  onClose: () => void
}

export default function OrderModal({ teaName, onClose }: OrderModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)

  if (!teaName) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
        >
          <Icon name="X" size={18} />
        </button>

        {sent ? (
          <div className="text-center py-6 flex flex-col items-center gap-4">
            <div className="text-5xl">🍵</div>
            <h3 className="text-white text-xl font-medium">Заявка принята!</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Мы свяжемся с вами в ближайшее время и расскажем о доставке.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-8 py-3 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Заказать</p>
            <h3 className="text-white text-xl font-medium mb-6">{teaName}</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs">Телефон</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 900 000 00 00"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Отправить заявку
                <Icon name="ArrowRight" size={14} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
