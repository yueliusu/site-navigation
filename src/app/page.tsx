import { siteCategories } from '@/config/sites'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">网站导航</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteCategories.map((category) => (
            <div 
              key={category.name}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.sites.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <site.icon className="w-6 h-6 text-gray-600" />
                    <span className="text-gray-800">{site.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 