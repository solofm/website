const features = [
  {
    title: "Tailored Marketing",
    description:
      "We market and grow your OnlyFans fanbase through personalized strategies on TikTok, Twitter, and Instagram.",
  },
  {
    title: "Content Audience",
    description:
      "We assist you with creating the right content on social media platforms, including OnlyFans, to maximize your revenue potential.",
  },
]

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr,1fr] lg:gap-12 items-center">
          <div className="flex flex-col gap-8">
            {features.map((feature, i) => (
              <div key={i} className="relative p-6 bg-pink-50 rounded-3xl transition-all hover:shadow-lg">
                <h3 className="text-2xl font-semibold mb-2 text-p4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-p4">
                Tired of no results?
                <span className="block h-1 w-24 bg-pink-500 mt-2" />
              </h2>
              <p className="text-xl text-gray-600 max-w-[600px]">
                Join us to hit new milestones that were inconceivable alone. Become a brand, not just an influencer with
                SOL OnlyFans Management.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}