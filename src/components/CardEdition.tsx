interface PropsCardEdition {
  linkSite: string | undefined;
  srcImage: string | undefined;
}

export function CardEdition({
  linkSite,
  srcImage,
}: PropsCardEdition) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={linkSite}
      className="
        min-w-[260px]
        md:min-w-[320px]
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-card
        transition-all
        duration-300
        hover:scale-[1.02]
      "
    >
      <img
        className="
          h-full
          w-full
          object-cover
        "
        src={srcImage}
        alt="Edição anterior da Semana de Tecnologia"
      />
    </a>
  );
}