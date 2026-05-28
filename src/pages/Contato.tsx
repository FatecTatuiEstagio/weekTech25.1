import { MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const contacts = [
    {
      icon: MapPin,
      title: "Endereço",
      content: (
        <>
          Rodovia Mário Batista Mori, 971
          <br />
          Jardim Aeroporto
          <br />
          Tatuí/SP - CEP 18280-000
        </>
      ),
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(15) 3205-7782",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "f132.contato@fatec.sp.gov.br",
    },
  ]

  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">Localização</span> e Contato
            </h2>

            <div className="w-20 h-1 bg-primary mx-auto mb-6" />

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visite-nos na Fatec Tatuí e participe dos próximos eventos
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((item) => (
              <Card
                key={item.title}
                className="transition-all hover:shadow-md hover:-translate-y-1"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="font-bold mb-2">{item.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection