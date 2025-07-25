import AuthNav from "@/components/AuthNav"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

type AuthProps = {
    children: React.ReactNode
}

const AuthLayout = ({children}: AuthProps) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <AuthNav/>
          { children}
      </div>
    </ThemeProvider>
  )
}

export default AuthLayout