const ErrorPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="container text-center flex flex-col items-center justify-center">
        <img src="/404.svg" alt="404" />
        <div className="mt-8">
          <h1 className="font-bold text-4xl">
            Oops, This Page Could Not Be Found.
          </h1>
          <p className="text-sm mx-2 mt-4 text-secondary font-normal">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
