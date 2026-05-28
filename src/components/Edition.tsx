import { CardEdition } from "./CardEdition";

export function Edition() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Edições Anteriores
          </h2>

          <p className="mt-2 text-sm md:text-base text-gray-600">
            Confira algumas edições anteriores da Semana de Tecnologia da Fatec Tatuí.
          </p>
        </div>

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-5
          "
        >
          {/* 2025 */}
          {/*
          <CardEdition
            linkSite="https://week-tech2025.vercel.app/"
            srcImage="/edition/2025/1.png"
          />
          */}

          {/* 2024 */}
          <div className="max-w-[400px]">
            <CardEdition
              linkSite="https://week-tech.vercel.app/"
              srcImage="/edition/2024/2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}