import Nav from './Nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className='mx-auto max-w-full'>
        {children}
      </main>
    </>
  )
}
