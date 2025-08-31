import React from 'react'

const topics = [
  {
    tag1: 'DBMS',
    title1: 'Database Management Systems',
    pTag1: 'Master SQL, ER Diagrams, and Transactions.',
    p2Tag1: 'Practice normalization, indexing, and more.',
    link: '/practice/interview/dbms',
  },
  {
    tag1: 'OS',
    title1: 'Operating Systems',
    pTag1: 'Understand processes, memory, and scheduling.',
    p2Tag1: 'Practice OS concepts in depth.',
    link: '/practice/interview/os',
  },
  {
    tag1: 'CN',
    title1: 'Computer Networks',
    pTag1: 'Learn protocols, layers, and IP addressing.',
    p2Tag1: 'Practice MCQs and problem solving.',
    link: '/practice/interview/cn',
  },
  {
    tag1: 'OOPs',
    title1: 'Object-Oriented Programming',
    pTag1: 'Solidify OOP principles in C++/Java.',
    p2Tag1: 'Practice inheritance, polymorphism, etc.',
    link: '/practice/interview/oops',
  },
  {
    tag1: 'DSA',
    title1: 'Data Structures & Algorithms',
    pTag1: 'Crack interviews with strong DSA skills.',
    p2Tag1: 'Arrays, trees, graphs, dynamic programming.',
    link: '/practice/interview/dsa',
  },
  {
    tag1: 'Aptitude',
    title1: 'Aptitude & Reasoning',
    pTag1: 'Quantitative aptitude and logical reasoning.',
    p2Tag1: 'Important for most placement exams.',
    link: '/practice/interview/aptitude',
  },
]

const PracticePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl lg:text-5xl font-bold font-serif text-white text-center mt-16 lg:mt-4">
        Practice Spaces
      </h1>
      <p className="text-lg text-blue-100 max-w-2xl text-center mb-12">
        Choose a domain to start practicing. Each space is tailored to boost your placement preparation in that subject.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {topics.map((element) => (
          <div
            key={element.title1}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wide">{element.tag1}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{element.title1}</h2>
            <p className="text-gray-700 text-sm mb-1">{element.pTag1}</p>
            <p className="text-gray-500 text-sm mb-4">{element.p2Tag1}</p>

            <a
              href={element.link}
              className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition"
            >
              Start Practicing →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PracticePage
