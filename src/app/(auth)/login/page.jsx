import Link from "next/link"
import Section from "@/components/Section"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const Login = () => {
  return (
    <Section>
        <div className="max-w-md mx-auto bg-base-100 dark:bg-black shadow-sm rounded-lg py-6 px-7 mt-7">
            <form>
                <h1 className="text-3xl font-semibold border-b-2 pb-2 border-b-gray-300">Login</h1>
                <div className="flex flex-col mt-5">
                    <Label htmlFor="email" className="mb-2">Email</Label>
                    <Input type="email" id="email" placeholder="Email Address"  />
                </div>
           
                <div className="flex flex-col mt-5">
                    <Label htmlFor="password" className=" mb-2">Password:</Label>
                    <Input type="password" placeholder="Password" id="password" />
                </div>
                <div className="w-[75%] mt-5 mx-auto">
                    <button className="btn btn-primary rounded-lg w-full">Login</button>
                </div>
                <div className="mt-7">
                    <p>Don't have an account? <Link href="/register" className="underline text-purple-400">register</Link></p>
                </div>
            </form>
        </div>
    </Section>
  )
}

export default Login
