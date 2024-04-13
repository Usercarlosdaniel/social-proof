import { Header } from "./components/Header";
import { Review } from "./components/Review";

export function App() {
  return (
    <main className="mx-auto max-w-[70rem] md:px-4">
      <Header />
      <Review />
    </main>
  );
}
