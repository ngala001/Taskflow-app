type SectionProps = {
    children: React.ReactNode
}
const Section = ({children}: SectionProps) => {
  return (
    <section className="max-h-screen">
        <div className="grid sm:grid-cols-2 mx-auto container">
          <div className="mt-5 content-center">
            <div className="p-10 sm:text-center">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Organize Your Day,</h1>
              <h2 className="text-xl sm:text-3xl font-semibold mb-6 text-gray-700 dark:text-white">Focus on What Matters.</h2>
              <p className="sm:text-lg text-gray-600 dark:text-white">
                Welcome to <span className="font-semibold text-indigo-600">TaskFlow</span> — your personal task manager built to help you stay on top of your priorities.
                Track your goals, break them into actionable tasks, and check off progress as you go.
              </p>
            </div>
          </div> 
          <div className="order-first sm:order-last px-3">
            {children}
          </div>
        </div>  
    </section>
  )
}

export default Section