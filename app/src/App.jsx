import { Routes, Route, Navigate } from 'react-router-dom'
import { useStore } from './store/useStore'
import LoginPage from './pages/LoginPage'
import AppLayout from './components/AppLayout'
import DashboardPage from './pages/DashboardPage'
import SalesPage from './pages/SalesPage'
import ProposalBuilder from './pages/ProposalBuilder'
import ProposalDetail from './pages/ProposalDetail'
import MasterDataPage from './pages/MasterDataPage'
import ClientsPage from './pages/ClientsPage'

export default function App() {
  const user = useStore((s) => s.user)

  if (!user) {
    return (
      <Routes>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/sales/new" element={<ProposalBuilder />} />
        <Route path="/sales/:id/edit" element={<ProposalBuilder />} />
        <Route path="/sales/:id" element={<ProposalDetail />} />
        <Route path="/master" element={<MasterDataPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}
