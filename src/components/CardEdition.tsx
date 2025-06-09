interface PropsCardEdition {
  linkSite: string | undefined;
  srcImage: string | undefined;
}

export function CardEdition ({linkSite, srcImage}: PropsCardEdition) {
  return (
    <>
      <a target="_blank" className="rounded-xl border-1 border-black w-1/6 flex flex-col items-start justify-center" href={linkSite}>
        <img className="rounded-xl border-1 border-black" src={srcImage} alt="Semana de Tecnologia 2025 1º" />
      </a>
    </>
  )
}