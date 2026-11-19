import React from 'react'

const education = [
  {
    year: '2022 – 2025',
    degree: 'B.Voc Software Development',
    college: 'Sri Guru Teg Bahadur Khalsa College, Anandpur Sahib',
    score: 'CGPA: 8.27',
    status: 'Completed',
    type: 'Degree'
  },
  {
    year: '6 Months',
    degree: 'Full Stack Development Training',
    college: 'Deftsoft, Mohali',
    score: 'Practical Training',
    status: 'Completed',
    type: 'Training'
  },
  {
    year: '2025 – Present',
    degree: 'M.Sc Artificial Intelligence & Data Science',
    college: 'Sri Guru Teg Bahadur Khalsa College, Anandpur Sahib',
    score: 'Postgraduate Degree',
    status: 'Ongoing',
    type: 'Degree'
  },
  {
    year: '6 Months',
    degree: 'MERN Stack Training',
    college: 'Alongside M.Sc. AI & Data Science',
    score: 'Practical Training',
    status: 'Ongoing',
    type: 'Training'
  }
]

const Education = () => {
  return (
    <section className="min-h-screen bg-blue-950 text-white px-6 py-20">

      <h1 className="text-4xl sm:text-5xl text-center font-bold mb-16
      bg-linear-to-r from-white to-purple-400 bg-clip-text text-transparent">
        My Education
      </h1>

      <div className="max-w-3xl mx-auto relative">

        {/* Timeline line */}
        <div className="absolute left-3 top-0 bottom-0
        w-1 bg-purple-500/50"></div>

        {education.map((item, index) => (
          <div key={index} className="relative pl-12 sm:pl-16 mb-12">

            {/* Timeline dot */}
            <div className="absolute left-0 top-6
            w-7 h-7 rounded-full bg-purple-500 border-4
            border-blue-950 shadow-lg shadow-purple-500/50">
            </div>

            {/* Education card */}
            <div className="bg-white/5 border border-purple-400/30
            rounded-2xl p-6 sm:p-8 backdrop-blur-md
            hover:border-purple-400 hover:shadow-xl
            hover:shadow-purple-500/10 transition duration-300">

              <span className="text-purple-400 text-sm font-semibold">
                {item.year}
              </span>

              <h2 className="text-xl sm:text-2xl font-bold mt-3 mb-3">
                {item.degree}
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.college}
              </p>

              <div className="flex justify-between items-center
              flex-wrap gap-3 mt-6">

                <span className="text-purple-300 text-sm">
                  {item.score}
                </span>

                <span className="bg-purple-500/20 text-purple-300
                px-4 py-1 rounded-full text-xs">
                  {item.status}
                </span>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}


export default Education