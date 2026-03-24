export const WelcomeView = () => {
  return (
    <section className="container py-5 text-center">
      <div className="py-5">
        <img src="/github.png" alt="logo do github" className="mb-4" />
        <h2 className="h4 text-secondary mb-3">Bem-vindo ao GitInsight</h2>
        <p className="text-muted">
          Digite um username do GitHub acima para começar a explorar
        </p>
      </div>
    </section>
  )
}
