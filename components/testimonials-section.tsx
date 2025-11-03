import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "I used to be confused about eating during pregnancy. After following the guide, my fetal weight increased normally and I became more calm. The nutrition guide is very easy to understand and apply.",
    name: "Rina Sari",
    role: "Third Trimester Pregnant Mother, Jakarta",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "The expert team here is very responsive and patient in answering all my questions. Thanks to regular consultations, my pregnancy went smoothly and my little one was born with ideal weight. Thank you MomSync!",
    name: "Dewi Rahmawati",
    role: "Mother of Aira, 8 months",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "The community here is very supportive! Sharing experiences with other pregnant mothers made me feel not alone. Plus, tips from experts are very helpful in maintaining health during pregnancy.",
    name: "Siti Nurhaliza",
    role: "Second Trimester Pregnant Mother, Bandung",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "The articles here are very informative and easy to understand. I became more aware of the importance of nutrition since pregnancy to prevent stunting. Now my child grows healthy and active!",
    name: "Maya Indriasari",
    role: "Mother of Kenzo, 2 years old",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Real Stories from Mothers</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Listen to real experiences from mothers who have felt the benefits
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}
