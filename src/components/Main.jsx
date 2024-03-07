function Main({ children }) {
  return (
    <div className="flex justify-center">
      <main className="w-screem flex h-[100vh-64px] w-screen max-w-3xl flex-col gap-5 px-6 py-16 scroll-mb-16">
        {children}
      </main>
    </div>
  );
}

export default Main;
