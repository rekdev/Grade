function Main({ children }) {
  return (
    <div className="flex justify-center">
      <main className="w-screem flex h-screen w-screen max-w-3xl flex-col gap-5 px-6 py-16">
        {children}
      </main>
    </div>
  );
}

export default Main;
