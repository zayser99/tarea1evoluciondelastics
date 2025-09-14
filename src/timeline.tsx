import { useState } from "react"

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: string
  category: string
}

interface TimelineProps {
  data: TimelineItem[]
}

const categories = [
  "Todas",
  "computo",
  "internet",
  "redes de computadoras",
  "telefonía móvil",
  "telefonía fija",
  "redes de televisión",
]

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    computo: "bg-blue-500",
    internet: "bg-green-500",
    "redes de computadoras": "bg-purple-500",
    "telefonía móvil": "bg-pink-500",
    "telefonía fija": "bg-yellow-500",
    "redes de televisión": "bg-red-500",
  }
  return colors[category] || "bg-gray-500"
}

export default function Timeline({ data }: TimelineProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const filteredData = selectedCategory === "Todas" ? data : data.filter((item) => item.category === selectedCategory)

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:border-transparent min-w-[200px]"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Línea vertical central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-800 h-full"></div>

      {/* Círculos en los extremos */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-indigo-800 rounded-full -top-2"></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 bg-indigo-800 rounded-full -bottom-2"></div>

      <div className="space-y-12">
        {filteredData.map((item, index) => (
          <div key={index} className="relative">
            {/* Círculo conector en la línea */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-800 rounded-full top-1/2 z-10"></div>

            {/* Contenido alternado */}
            <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              {/* Contenido de texto */}
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <div className="bg-transparent">
                  <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <h2 className="text-4xl font-bold text-orange-500">{item.year}</h2>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-indigo-800 mb-3">{item.title}</h3>
                  <p className="text-base leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Espacio central para la línea */}
              <div className="w-2/12 flex justify-center">
                {/* Línea horizontal conectora */}
                <div className="w-16 h-1 bg-indigo-800"></div>
              </div>

              {/* Ícono */}
              <div
                className={`w-5/12 ${index % 2 === 0 ? "pl-8" : "pr-8"} flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <img
                    src={item.icon || "/placeholder.svg"}
                    alt={`${item.title} icon`}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<span class="text-slate-600 font-bold text-lg">${item.title.charAt(0)}</span>`
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
