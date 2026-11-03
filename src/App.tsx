import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { ListPage } from './pages/ListPage'
import { DetailPage } from './pages/DetailPage'
import { useTheme } from './useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <div className="min-h-screen">
      <Header theme={theme} onToggleTheme={toggle} />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/item/:id" element={<DetailPage />} />
          <Route path="*" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  )
}
