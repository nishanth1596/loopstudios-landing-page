import Hero from "../feature/Hero";
import Product from "../feature/Product";

function Main() {
  return (
    <main className="flex w-full flex-col items-center lg:block">
      <Hero />
      <Product />
    </main>
  );
}

export default Main;
