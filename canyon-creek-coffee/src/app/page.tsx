import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/95 backdrop-blur border-b border-amber-200/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link href="#" className="font-serif text-2xl text-amber-900">
            Canyon Creek
          </Link>
          <div className="flex gap-6 text-sm font-medium text-amber-900/80">
            <a href="#menu" className="hover:text-amber-900">Menu</a>
            <a href="#about" className="hover:text-amber-900">About</a>
            <a href="#gallery" className="hover:text-amber-900">Gallery</a>
            <a href="#location" className="hover:text-amber-900">Location</a>
            <a href="#contact" className="hover:text-amber-900">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-amber-50 to-stone-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-amber-900 mb-4">
            Canyon Creek Coffee & Co
          </h1>
          <p className="text-xl text-amber-900/80 max-w-2xl mx-auto mb-6">
            Cozy coffee shop in Calhoun, GA — specialty drinks, dirty sodas, smoothies, sourdough muffins & more
          </p>
          <p className="font-serif text-2xl text-amber-800 italic mb-8">
            Live for now. Fuel your day.
          </p>
          <a
            href="#menu"
            className="inline-block bg-amber-800 text-amber-50 px-8 py-3 rounded-full font-medium hover:bg-amber-900 transition-colors"
          >
            View Menu
          </a>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl text-amber-900 text-center mb-4">
            Our Menu
          </h2>
          <p className="text-center text-stone-600 mb-16">
            Coffee, dirty sodas, smoothies, teas & more
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Drinks */}
            <div>
              <h3 className="font-serif text-2xl text-amber-900 border-b-2 border-amber-200 pb-2 mb-6">
                Drinks
              </h3>
              <p className="text-sm text-stone-500 mb-4">16oz / 24oz</p>
              <ul className="space-y-3">
                {[
                  ["Americano", "$3.25 / $3.75"],
                  ["Latte", "$4.25 / $4.75"],
                  ["Cappuccino", "$4.25 / $4.75"],
                  ["Chai Latte", "$4.25 / $4.75"],
                  ["Matcha Latte", "$4.25 / $4.75"],
                  ["Hot Chocolate", "$3.25 / $3.75"],
                  ["Ready-made Drip", "$3.25 / $3.75"],
                ].map(([name, price]) => (
                  <li key={name} className="flex justify-between">
                    <span>{name}</span>
                    <span className="text-amber-800 font-medium">{price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-stone-600 mt-6">Add-ons: Oatmilk / Almond milk $0.75 · Cold Foam $1.25</p>
            </div>

            {/* Non-Coffee */}
            <div>
              <h3 className="font-serif text-2xl text-amber-900 border-b-2 border-amber-200 pb-2 mb-6">
                Non-Coffee
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-amber-900">Smoothies</p>
                  <p className="text-sm text-stone-600">Strawberry, Strawberry Banana, Mango, Peach, Berry, Berry Moose</p>
                  <p className="text-amber-800 font-medium">$6.25 / $7.00</p>
                </div>
                <div>
                  <p className="font-medium text-amber-900">Frappes</p>
                  <p className="text-sm text-stone-600">Peanut Butter, White Choc, Mocha, Cream, Hot Choc</p>
                  <p className="text-amber-800 font-medium">$6.25 / $7.00</p>
                </div>
              </div>
            </div>

            {/* Dirty Sodas */}
            <div>
              <h3 className="font-serif text-2xl text-amber-900 border-b-2 border-amber-200 pb-2 mb-6">
                Dirty Sodas
              </h3>
              <p className="text-sm text-stone-500 mb-4">All 24oz — $6.00</p>
              <ul className="space-y-3 text-sm">
                {[
                  ["Pineapple Passionate", "Sprite + pineapple + cream + cold foam"],
                  ["Cherry Cowpoke", "Dr. Pepper + cherry + cream + cold foam"],
                  ["Blue Malibu", "Sprite + blue raspberry + cream + cold foam"],
                  ["Strawberry Sunset", "Dr. Pepper + strawberry + cream + cold foam"],
                  ["Georgia Peach", "Sprite + peach + cream + cold foam"],
                  ["Lucky Lime", "Coke + lime + cream + cold foam"],
                ].map(([name, desc]) => (
                  <li key={name}>
                    <span className="font-medium text-amber-900">{name}</span>
                    <span className="text-stone-600"> — {desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teas */}
            <div>
              <h3 className="font-serif text-2xl text-amber-900 border-b-2 border-amber-200 pb-2 mb-6">
                Teas
              </h3>
              <p className="text-sm text-stone-500 mb-4">16oz / 24oz — $3.25 / $3.75</p>
              <ul className="space-y-1 text-sm">
                {["Green Tea", "Black Tea", "Toasted Coconut Almond", "Country Peach", "Vanilla Chai", "Lemon Ginger", "Raspberry Black Tea"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="text-sm text-stone-600 mt-4">Sweeteners: Honey, Sugar, or Agave $0.75</p>
            </div>

            {/* Baked Goods */}
            <div>
              <h3 className="font-serif text-2xl text-amber-900 border-b-2 border-amber-200 pb-2 mb-6">
                Baked Goods
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Sourdough Muffins</span>
                  <span className="text-amber-800 font-medium">$3.75</span>
                </li>
                <li className="text-sm text-stone-600">Blueberry · Raspberry White Choc · Double Chocolate · Blueberry Lemon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-amber-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            Canyon Creek Coffee & Co is a cozy, laid-back coffee shop in Calhoun, Georgia. We opened our doors on Valentine&apos;s Day 2026 and offer quality coffee, dirty sodas, smoothies, teas, and fresh-baked sourdough muffins. Our space combines rustic-industrial charm with comfortable seating—perfect for working, catching up with friends, or simply enjoying a great cup of coffee. <span className="font-serif italic text-amber-800">Live for now. Fuel your day.</span>
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-amber-900 text-center mb-4">
            Photo Gallery
          </h2>
          <p className="text-center text-stone-600 mb-12">
            A peek inside Canyon Creek Coffee & Co
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/image-70820801-88d9-4ac0-a2a3-ba231e3ac8be.png"
                alt="Canyon Creek Coffee interior - counter and menu"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/image-f51e5b44-e94b-4167-8495-037ea9a78a36.png"
                alt="Canyon Creek Coffee counter and staff"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/image-b7b45776-ff8b-4100-8cf6-e11977128014.png"
                alt="Fresh muffins - blueberry, raspberry white chocolate, double chocolate"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/image-92eeb7ac-35ee-4f80-bf40-eb8d45990483.png"
                alt="Iced coffee with cold foam and cinnamon"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/image-fb05d970-2943-450d-82e1-ed907d1e0aee.png"
                alt="Iced coffee and streusel muffin"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/image-46ddb04b-800a-4182-84b1-f1665a0147f1.png"
                alt="Pet-friendly outdoor seating at Canyon Creek Coffee"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-amber-900 mb-4">
            Follow Us
          </h2>
          <p className="text-stone-600 mb-12">
            Stay connected for updates, specials & photos
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61585228966645"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-2xl">📘</span>
              <span className="font-medium text-amber-900">Facebook</span>
              <span className="text-sm text-stone-600">View on Facebook →</span>
            </a>
            <a
              href="https://www.instagram.com/canyoncreek.coffeeco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-2xl">📷</span>
              <span className="font-medium text-amber-900">Instagram</span>
              <span className="text-sm text-stone-600">@canyoncreek.coffeeco</span>
              <span className="text-sm text-stone-600">View on Instagram →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-amber-900 mb-4">
            Find Us
          </h2>
          <p className="text-xl text-stone-700 mb-6">
            625 Blackwood Terr SE, Calhoun, GA 30701
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=625+Blackwood+Terr+SE,+Calhoun,+GA+30701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-800 text-amber-50 px-6 py-3 rounded-full font-medium hover:bg-amber-900 transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-amber-900 text-center mb-12">
            Contact
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-serif text-xl text-amber-900 mb-4">Hours</h3>
              <p className="text-stone-700">
                Tuesday–Saturday: 8:00 AM – 6:00 PM
              </p>
              <p className="text-sm text-stone-500 mt-2">Closed Sunday & Monday</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-amber-900 mb-4">Call Us</h3>
              <a
                href="tel:+13366873719"
                className="text-amber-800 font-medium hover:underline"
              >
                (336) 687-3719
              </a>
            </div>
            <div>
              <h3 className="font-serif text-xl text-amber-900 mb-4">Email</h3>
              <a
                href="mailto:northnoah959@gmail.com"
                className="text-amber-800 font-medium hover:underline"
              >
                northnoah959@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-amber-900 text-amber-100 text-center">
        <p>© 2026 Canyon Creek Coffee & Co. Calhoun, GA.</p>
      </footer>
    </div>
  );
}
