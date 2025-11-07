// import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  /*
  const galleryImages = [
    "/WhatsApp Image 2025-10-31 at 9.11.06 PM (1).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.06 PM.jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.07 PM (1).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.07 PM (2).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.07 PM.jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.08 PM (1).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.08 PM (2).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.08 PM.jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.09 PM (1).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.09 PM (2).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.09 PM (3).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.09 PM.jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.10 PM (1).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.10 PM.jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.11 PM (1).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.11 PM (2).jpeg",
    "/WhatsApp Image 2025-10-31 at 9.11.11 PM.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      // Navigation
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.jpeg"
                alt="Aashiyana Pre School Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <h1 className="text-2xl font-bold text-blue-600">Aashiyana Pre School</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link href="#age-groups" className="text-gray-700 hover:text-blue-600 transition">Age Groups</Link>
              <Link href="#curriculum" className="text-gray-700 hover:text-blue-600 transition">Curriculum</Link>
              <Link href="#facilities" className="text-gray-700 hover:text-blue-600 transition">Facilities</Link>
              <Link href="#admission" className="text-gray-700 hover:text-blue-600 transition">Admission</Link>
              <Link href="#gallery" className="text-gray-700 hover:text-blue-600 transition">Gallery</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      // Hero Section
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🎓 Best Preschool in Town
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to <span className="text-blue-600">Aashiyana Pre School</span>
              </h2>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Where little dreams take flight! A loving and nurturing environment where young minds blossom and children discover the joy of learning through play, creativity, and exploration.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Building confident, curious, and creative learners for tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#admission"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl text-center"
                >
                  Enroll Your Child
                </Link>
                <Link
                  href="#contact"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition text-center"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/logo.jpeg"
                  alt="Aashiyana Pre School"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      // Why Choose Us Section
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Aashiyana Pre School?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Teachers</h3>
              <p className="text-gray-600">Trained and certified early childhood educators</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Learning</h3>
              <p className="text-gray-600">Play-based curriculum that sparks curiosity</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Small Class Sizes</h3>
              <p className="text-gray-600">Individual attention for every child</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Holistic Development</h3>
              <p className="text-gray-600">Nurturing mind, body, and spirit</p>
            </div>
          </div>
        </div>
      </section>

      // About Section
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Aashiyana Pre School</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing a foundation for lifelong learning and success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/WhatsApp Image 2025-10-31 at 9.11.11 PM.jpeg"
                alt="Children at Aashiyana Pre School"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission & Vision</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Aashiyana Pre School, we believe that every child is unique and deserves a safe, caring, and stimulating environment to grow and learn. Our mission is to provide high-quality early childhood education that fosters creativity, curiosity, and confidence in young learners.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We focus on holistic development, ensuring that children not only gain academic readiness but also develop social skills, emotional intelligence, physical coordination, and a lifelong love for learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Child-Centered Approach</h4>
                    <p className="text-gray-600">Every program is designed around your child's individual needs and interests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safe & Secure Environment</h4>
                    <p className="text-gray-600">State-of-the-art security and child-safe facilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parent Partnership</h4>
                    <p className="text-gray-600">Regular communication and involvement in your child's learning journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      // Age Groups Section
      <section id="age-groups" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Age Groups & Classes</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Age-appropriate programs designed to nurture each stage of early childhood development
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👶</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Toddlers</h3>
                <p className="text-blue-600 font-semibold">1.5 - 2.5 Years</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Early sensory exploration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Motor skill development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Basic communication skills</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Social interaction through play</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Routine and structure</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👧</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nursery</h3>
                <p className="text-green-600 font-semibold">2.5 - 3.5 Years</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Language development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pre-writing skills</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Number recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Creative arts and crafts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Group activities</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👦</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pre-KG / LKG</h3>
                <p className="text-purple-600 font-semibold">3.5 - 4.5 Years</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Phonics and reading readiness</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Early math concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Science exploration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Independence building</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>School readiness skills</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-blue-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Class Timings</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div>
                <p className="font-semibold text-gray-900">Half Day Program</p>
                <p className="text-gray-600">9:00 AM - 12:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Full Day Program</p>
                <p className="text-gray-600">9:00 AM - 3:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Extended Day</p>
                <p className="text-gray-600">9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      // Curriculum Section
      <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Curriculum</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive, play-based curriculum designed to ignite curiosity and foster holistic development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Language & Literacy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Storytelling and reading</li>
                <li>• Phonics and letter recognition</li>
                <li>• Vocabulary building</li>
                <li>• Pre-writing skills</li>
                <li>• Communication development</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mathematics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Number recognition and counting</li>
                <li>• Basic shapes and patterns</li>
                <li>• Sorting and classifying</li>
                <li>• Measurement concepts</li>
                <li>• Problem-solving activities</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Science & Discovery</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Nature exploration</li>
                <li>• Simple experiments</li>
                <li>• Observation skills</li>
                <li>• Environmental awareness</li>
                <li>• Cause and effect learning</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Arts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Drawing and painting</li>
                <li>• Music and movement</li>
                <li>• Dance and drama</li>
                <li>• Craft activities</li>
                <li>• Creative expression</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🏃</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Outdoor play activities</li>
                <li>• Fine motor skills</li>
                <li>• Gross motor skills</li>
                <li>• Sports and games</li>
                <li>• Health and hygiene</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social & Emotional</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Building friendships</li>
                <li>• Emotional regulation</li>
                <li>• Conflict resolution</li>
                <li>• Teamwork and cooperation</li>
                <li>• Self-confidence building</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Daily Schedule</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="font-bold text-blue-600">9:00 - 9:30</span>
                  <span className="text-gray-700">Morning Assembly & Prayer</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="font-bold text-green-600">9:30 - 10:30</span>
                  <span className="text-gray-700">Learning Activities</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <span className="font-bold text-yellow-600">10:30 - 11:00</span>
                  <span className="text-gray-700">Snack Time</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <span className="font-bold text-purple-600">11:00 - 12:00</span>
                  <span className="text-gray-700">Play & Outdoor Activities</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                  <span className="font-bold text-pink-600">12:00 - 1:00</span>
                  <span className="text-gray-700">Creative Arts & Music</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <span className="font-bold text-orange-600">1:00 - 1:30</span>
                  <span className="text-gray-700">Lunch Time</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                  <span className="font-bold text-indigo-600">1:30 - 2:30</span>
                  <span className="text-gray-700">Quiet Time & Story</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                  <span className="font-bold text-teal-600">2:30 - 3:00</span>
                  <span className="text-gray-700">Departure & Pickup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      // Facilities Section
      <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities designed for your child's safety, comfort, and learning
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🏫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Spacious Classrooms</h3>
              <p className="text-gray-600 text-sm">Bright, airy rooms with age-appropriate furniture and learning materials</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🎪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Playground</h3>
              <p className="text-gray-600 text-sm">Safe outdoor play area with modern equipment for physical development</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Library Corner</h3>
              <p className="text-gray-600 text-sm">Well-stocked reading area to foster early literacy and love for books</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Art Studio</h3>
              <p className="text-gray-600 text-sm">Dedicated space for creative expression through various art forms</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🍎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cafeteria</h3>
              <p className="text-gray-600 text-sm">Hygienic dining area serving nutritious, balanced meals</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🚿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Washrooms</h3>
              <p className="text-gray-600 text-sm">Child-friendly, well-maintained restroom facilities</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Room</h3>
              <p className="text-gray-600 text-sm">First-aid facilities and health monitoring support</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600 text-sm">CCTV surveillance and secure entry/exit systems</p>
            </div>
          </div>
        </div>
      </section>

      // Admission Section
      <section id="admission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to enroll your child in Aashiyana Pre School
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">School Tour</h3>
                    <p className="text-gray-600">Schedule a visit to explore our facilities and meet our team. We'll show you around and answer all your questions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application Form</h3>
                    <p className="text-gray-600">Fill out the admission form with your child's details and submit required documents.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interaction Session</h3>
                    <p className="text-gray-600">A friendly interaction with your child to understand their needs and ensure the right fit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Confirmation & Fee Payment</h3>
                    <p className="text-gray-600">Upon acceptance, complete the admission process by paying the fees and collecting the welcome kit.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Required Documents:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Birth certificate</li>
                  <li>• Recent passport-size photographs (2)</li>
                  <li>• Medical records/vaccination card</li>
                  <li>• Parent/Guardian ID proof</li>
                  <li>• Previous school records (if applicable)</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold">Registration Fee</span>
                      <span className="text-blue-600 font-bold">One-time</span>
                    </div>
                    <p className="text-sm text-gray-500">Includes welcome kit and materials</p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold">Monthly Tuition</span>
                      <span className="text-blue-600 font-bold">As per program</span>
                    </div>
                    <p className="text-sm text-gray-500">Varies based on age group and timings</p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold">Annual Charges</span>
                      <span className="text-blue-600 font-bold">Annual</span>
                    </div>
                    <p className="text-sm text-gray-500">Includes events, activities, and materials</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Please contact us for detailed fee structure and any available scholarships or discounts.
                  </p>
                </div>
                <Link
                  href="#contact"
                  className="block mt-6 w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Request Fee Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      // Activities & Events Section
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Activities & Events</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fun-filled activities and special events that make learning memorable
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎉 Annual Events</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Annual Day Celebration</li>
                <li>• Sports Day</li>
                <li>• Cultural Fest</li>
                <li>• Grandparents Day</li>
                <li>• Graduation Ceremony</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Monthly Activities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Field trips</li>
                <li>• Theme-based weeks</li>
                <li>• Art exhibitions</li>
                <li>• Cooking sessions</li>
                <li>• Gardening activities</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎨 Special Programs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Storytelling sessions</li>
                <li>• Music & Dance classes</li>
                <li>• Yoga & Meditation</li>
                <li>• Puppet shows</li>
                <li>• Science workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      // Testimonials Section
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from parents about their experience with Aashiyana Pre School
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Aashiyana Pre School has been a blessing for our family. The teachers are caring, the curriculum is engaging, and my child loves going to school every day. The progress we've seen is amazing!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rahul Sharma</h4>
                  <p className="text-sm text-gray-500">Parent of Aryan (Nursery)</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The holistic approach to learning here is fantastic. My daughter has not only learned academics but also developed confidence and social skills. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Priya Patel</h4>
                  <p className="text-sm text-gray-500">Parent of Ananya (Pre-KG)</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Best preschool in the area! The facilities are excellent, safety is top priority, and the communication with parents is outstanding. My son is thriving here."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Amit Kumar</h4>
                  <p className="text-sm text-gray-500">Parent of Rohan (Toddler)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      // Gallery Section
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">A glimpse into our vibrant learning environment and happy moments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer group">
                <Image
                  src={image}
                  alt={`Aashiyana Pre School Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      // Contact Section
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We'd love to hear from you. Contact us to schedule a visit, learn more about enrollment, or ask any questions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href={`mailto:aashiyanapreschool1@gmail.com`} className="text-blue-100 hover:text-white transition break-all">
                      aashiyanapreschool1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <div className="space-y-1">
                      <a href="tel:9898504413" className="block text-blue-100 hover:text-white transition">
                        📞 9898504413
                      </a>
                      <a href="tel:7405302862" className="block text-blue-100 hover:text-white transition">
                        📞 7405302862
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-blue-100">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-blue-100">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-blue-100">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-blue-100">We welcome walk-in visits during office hours. Please call ahead to schedule a guided tour.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Quick Contact Form</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Fill out the form below or call us directly. We'll get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg text-gray-900" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg text-gray-900" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg text-gray-900" placeholder="Tell us how we can help..."></textarea>
                </div>
                <a
                  href={`mailto:aashiyanapreschool1@gmail.com?subject=Inquiry from Website`}
                  className="block w-full bg-white text-blue-600 text-center px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      // Footer
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.jpeg"
                  alt="Aashiyana Pre School Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold">Aashiyana Pre School</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Nurturing young minds with love, care, and quality education. Building confident, curious, and creative learners for tomorrow.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#age-groups" className="hover:text-white transition">Age Groups</Link></li>
                <li><Link href="#curriculum" className="hover:text-white transition">Curriculum</Link></li>
                <li><Link href="#facilities" className="hover:text-white transition">Facilities</Link></li>
                <li><Link href="#admission" className="hover:text-white transition">Admission</Link></li>
                <li><Link href="#gallery" className="hover:text-white transition">Gallery</Link></li>
                <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href={`mailto:aashiyanapreschool1@gmail.com`} className="hover:text-white transition break-all">
                    aashiyanapreschool1@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:9898504413" className="hover:text-white transition">9898504413</a>
                </li>
                <li>
                  <a href="tel:7405302862" className="hover:text-white transition">7405302862</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <p className="text-gray-400 mb-4">Stay connected with us on social media</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                  <span className="text-xl">📘</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                  <span className="text-xl">📷</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                  <span className="text-xl">📹</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Aashiyana Pre School. All rights reserved.</p>
            <p className="mt-2 text-sm">Designed with ❤️ for our little learners</p>
          </div>
        </div>
      </footer>
    </div>
  );
  */

  return <div>hello</div>;
}
