import { CardEdition } from "./CardEdition";

export function Edition() {
    return (
        <>
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold py-5">Edições Anteriores</p>
            <div className="flex py-5 gap-5 items-center justify-center"> 
              <CardEdition 
                linkSite={"https://week-tech2025.vercel.app/"} 
                srcImage={"/edition/2025/1.png"} 
              />
              <CardEdition 
                linkSite={"https://week-tech2025.vercel.app/"} 
                srcImage={"/edition/2024/2.png"} 
              />
            </div>
          </div>
        </>
    )
}