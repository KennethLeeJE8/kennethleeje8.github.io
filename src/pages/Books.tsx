import { useState, useEffect } from 'react';
import { Book, Filter } from 'lucide-react';
import Header from '@/components/Header';

interface BookItem {
  id: number;
  title: string;
  author: string;
  category: string;
  cover: string;
  description: string;
}

// Dynamically generated books data from images
const imageBooksData = [
  // Leisure
  { id: 1, title: "Brave New World", author: "Aldous Huxley", category: "Leisure", cover: "/images/book-gallery/leisure/brave_new_world.jpg", description: "" },
  { id: 2, title: "Homo Deus", author: "Yuval Noah Harari", category: "Leisure", cover: "/images/book-gallery/leisure/homo_deus.jpg", description: "" },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari", category: "Leisure", cover: "/images/book-gallery/leisure/sapiens.jpg", description: "" },
  { id: 4, title: "The Queen's Gambit", author: "Walter Tevis", category: "Leisure", cover: "/images/book-gallery/leisure/the_queen_s_gambit.jpg", description: "" },
  { id: 5, title: "Dark Matter", author: "Blake Crouch", category: "Leisure", cover: "/images/book-gallery/leisure/dark_matter.jpg", description: "" },
  // Miscellaneous
  { id: 6, title: "Building a Second Brain", author: "Tiago Forte", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/building_a_second_brain.jpg", description: "" },
  { id: 7, title: "The Coffeehouse Investor", author: "Bill Schultheis", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/the_coffeehouse_investor.jpg", description: "" },
  { id: 8, title: "The Intelligent Investor", author: "Benjamin Graham", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/the_intelligent_investor.jpg", description: "" },
  { id: 9, title: "Skin in the Game", author: "Nassim Nicholas Taleb", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/skin_in_the_game.jpg", description: "" },
  { id: 10, title: "The Black Swan", author: "Nassim Nicholas Taleb", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/the_black_swan.jpg", description: "" },
  { id: 11, title: "Steal Like an Artist", author: "Austin Kleon", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/steal_like_an_artist.jpg", description: "" },
  { id: 12, title: "Why We Sleep", author: "Matthew Walker", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/why_we_sleep.jpg", description: "" },
  { id: 13, title: "Finite and Infinite Games", author: "James P. Carse", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/finite_and_infinite_games.jpg", description: "" },
  { id: 14, title: "The Art of Strategy", author: "Avinash Dixit & Barry Nalebuff", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/the_art_of_strategy.jpg", description: "" },
  { id: 15, title: "The Art of Resilience", author: "Ross Edgley", category: "Miscellaneous", cover: "/images/book-gallery/miscellaneous/the_art_of_resilience.jpg", description: "" },
  { id: 63, title: "The Innovator's Dilemma", author: "Clayton Christensen", category: "Miscellaneous", cover: "/placeholder.svg", description: "" },
  // Psychology
  { id: 16, title: "Outliers", author: "Malcolm Gladwell", category: "Psychology", cover: "/images/book-gallery/psychology/outliers.jpg", description: "" },
  { id: 17, title: "Blink: The Power of Thinking Without Thinking", author: "Malcolm Gladwell", category: "Psychology", cover: "/images/book-gallery/psychology/blink__the_power_of_thinking_without_thinking.jpg", description: "" },
  { id: 18, title: "Power Negotiating", author: "Roger Dawson", category: "Psychology", cover: "/images/book-gallery/psychology/power_negotiating.jpg", description: "" },
  { id: 19, title: "What Every Body is Saying", author: "Joe Navarro", category: "Psychology", cover: "/images/book-gallery/psychology/what_every_body_is_saying.jpg", description: "" },
  { id: 20, title: "Pre-Suasion", author: "Robert Cialdini", category: "Psychology", cover: "/images/book-gallery/psychology/presuasion.jpg", description: "" },
  { id: 21, title: "Predictably Irrational", author: "Dan Ariely", category: "Psychology", cover: "/images/book-gallery/psychology/predictably_irrational.jpg", description: "" },
  { id: 22, title: "Drive", author: "Daniel H. Pink", category: "Psychology", cover: "/images/book-gallery/psychology/drive.jpg", description: "" },
  { id: 23, title: "The Broken Ladder", author: "Keith Payne", category: "Psychology", cover: "/images/book-gallery/psychology/the_broken_ladder.jpg", description: "" },
  { id: 59, title: "Influence", author: "Robert Cialdini", category: "Psychology", cover: "/images/book-gallery/psychology/influence.jpg", description: "" },
  // Self Help
  { id: 24, title: "48 Laws of Power", author: "Robert Greene", category: "Self Help", cover: "/images/book-gallery/self_help/48_laws_of_power.jpg", description: "" },
  { id: 25, title: "Obstacle is the Way", author: "Ryan Holiday", category: "Self Help", cover: "/images/book-gallery/self_help/obstacle_is_the_way.jpg", description: "" },
  { id: 26, title: "Jonathan Livingston", author: "Richard Bach", category: "Self Help", cover: "/images/book-gallery/self_help/jonathan_livingston.jpg", description: "" },
  { id: 27, title: "Man's Search for Meaning", author: "Viktor Frankl", category: "Self Help", cover: "/images/book-gallery/self_help/man_s_search_for_meaning.jpg", description: "" },
  { id: 28, title: "Ego is the Enemy", author: "Ryan Holiday", category: "Self Help", cover: "/images/book-gallery/self_help/ego_is_the_enemy.jpg", description: "" },
  { id: 29, title: "Tribe of Mentors", author: "Tim Ferriss", category: "Self Help", cover: "/images/book-gallery/self_help/tribe_of_mentors.jpg", description: "" },
  { id: 30, title: "Antifragile", author: "Nassim Nicholas Taleb", category: "Self Help", cover: "/images/book-gallery/self_help/antifragile.jpg", description: "" },
  { id: 31, title: "Principles", author: "Ray Dalio", category: "Self Help", cover: "/images/book-gallery/self_help/principles.jpg", description: "" },
  { id: 32, title: "Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "Self Help", cover: "/images/book-gallery/self_help/subtle_art_of_not_giving_a_f_ck.jpg", description: "" },
  { id: 33, title: "Psycho-Cybernetics", author: "Maxwell Maltz", category: "Self Help", cover: "/images/book-gallery/self_help/psycho_cybernetics.jpg", description: "" },
  { id: 34, title: "7 Habits of Highly Effective Teens", author: "Sean Covey", category: "Self Help", cover: "/images/book-gallery/self_help/7_habits_of_highly_effective_teens.jpg", description: "" },
  { id: 35, title: "Unlimited Power", author: "Tony Robbins", category: "Self Help", cover: "/images/book-gallery/self_help/unlimited_power.jpg", description: "" },
  { id: 36, title: "Win Friends & Influence People", author: "Dale Carnegie", category: "Self Help", cover: "/images/book-gallery/self_help/win_friends___influence_people.jpg", description: "" },
  { id: 37, title: "Managing Oneself", author: "Peter Drucker", category: "Self Help", cover: "/images/book-gallery/self_help/managing_oneself.jpg", description: "" },
  { id: 38, title: "Daily Stoic", author: "Ryan Holiday", category: "Self Help", cover: "/images/book-gallery/self_help/daily_stoic.jpg", description: "" },
  { id: 39, title: "Deep Work", author: "Cal Newport", category: "Self Help", cover: "/images/book-gallery/self_help/deep_work.jpg", description: "" },
  { id: 40, title: "Atomic Habits", author: "James Clear", category: "Self Help", cover: "/images/book-gallery/self_help/atomic_habits.jpg", description: "" },
  { id: 41, title: "12 Rules for Life", author: "Jordan Peterson", category: "Self Help", cover: "/images/book-gallery/self_help/12_rules_for_life.jpg", description: "" },
  { id: 42, title: "Motivation Manifesto", author: "Brendon Burchard", category: "Self Help", cover: "/images/book-gallery/self_help/motivation_manifesto.jpg", description: "" },
  { id: 43, title: "How to Decide: Simple Tools for Making Better Choices", author: "Annie Duke", category: "Self Help", cover: "/images/book-gallery/self_help/how_to_decide__simple_tools_for_making_better_choices.jpg", description: "" },
  { id: 60, title: "Drive: The Surprising Truth About What Motivates Us", author: "Daniel H. Pink", category: "Self Help", cover: "/images/book-gallery/self_help/drive__the_surprising_truth_about_what_motivates_us.jpg", description: "" },
  { id: 61, title: "Pre-Suasion: A Revolutionary Way to Influence and Persuade", author: "Robert Cialdini", category: "Self Help", cover: "/images/book-gallery/self_help/pre_suasion_revolutionary_way_influence_persuade.jpg", description: "" },
  { id: 62, title: "Principles: Life & Work", author: "Ray Dalio", category: "Self Help", cover: "/images/book-gallery/self_help/principles__life___work.jpg", description: "" },
  // Copywriting
  { id: 44, title: "Writing That Works", author: "Kenneth Roman & Joel Raphaelson", category: "Copywriting", cover: "/images/book-gallery/copywriting/writing_that_works.jpg", description: "" },
  { id: 45, title: "Ogilvy on Advertising", author: "David Ogilvy", category: "Copywriting", cover: "/images/book-gallery/copywriting/ogilvy_on_advertising.jpg", description: "" },
  { id: 46, title: "The Ultimate Sales Letter", author: "Dan Kennedy", category: "Copywriting", cover: "/images/book-gallery/copywriting/the_ultimate_sales_letter.jpg", description: "" },
  { id: 47, title: "Scientific Advertising", author: "Claude Hopkins", category: "Copywriting", cover: "/images/book-gallery/copywriting/scientific_advertising.jpg", description: "" },
  { id: 48, title: "Collier Letter Book", author: "Robert Collier", category: "Copywriting", cover: "/images/book-gallery/copywriting/collier_letter_book.jpg", description: "" },
  { id: 49, title: "Copywriting Handbook", author: "Robert Bly", category: "Copywriting", cover: "/images/book-gallery/copywriting/copywriting_handbook.jpg", description: "" },
  // Data
  { id: 50, title: "Naked Statistics", author: "Charles Wheelan", category: "Data", cover: "/images/book-gallery/data_science/naked_statistics.jpg", description: "" },
  { id: 51, title: "The Art of Statistics", author: "David Spiegelhalter", category: "Data", cover: "/images/book-gallery/data_science/the_art_of_statistics.jpg", description: "" },
  { id: 52, title: "Becoming a Data Head", author: "Alex J. Gutman & Jordan Goldmeier", category: "Data", cover: "/images/book-gallery/data_science/becoming_a_data_head.jpg", description: "" },
  { id: 53, title: "Thinking in Bets", author: "Annie Duke", category: "Data", cover: "/images/book-gallery/data_science/thinking_in_bets.jpg", description: "" },
  { id: 54, title: "Think Stats", author: "Allen B. Downey", category: "Data", cover: "/images/book-gallery/data_science/think_stats.jpg", description: "" },
  { id: 55, title: "Practical Statistics", author: "Peter Bruce & Andrew Bruce", category: "Data", cover: "/images/book-gallery/data_science/practical_statistics.jpg", description: "" },
  { id: 56, title: "How to Measure Anything", author: "Douglas Hubbard", category: "Data", cover: "/images/book-gallery/data_science/how_to_measure_anything.jpg", description: "" },
  { id: 57, title: "Behind Every Good Decision", author: "Cassie Kozyrkov", category: "Data", cover: "/images/book-gallery/data_science/behind_every_good_decision.jpg", description: "" },
  { id: 58, title: "Data Science for Business", author: "Foster Provost & Tom Fawcett", category: "Data", cover: "/images/book-gallery/data_science/data_science_for_business.jpg", description: "" },
];

const categories = ["All", "Data", "Psychology", "Copywriting", "Self Help", "Miscellaneous", "Leisure"];

const Books = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  // Replace booksData with imageBooksData
  const booksData = imageBooksData;

  const filteredBooks = selectedCategory === "All" 
    ? booksData 
    : booksData.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Library Background */}
      <section className="relative pt-24 pb-16 bg-white">
        <div className="absolute inset-0 bg-gray-100 opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Book size={32} className="text-black" />
            <h1 className="text-4xl md:text-5xl font-light text-black">Books Gallery</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of books that have shaped my thinking in data science, psychology, and beyond.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter size={20} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filter by category:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm rounded transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                {/* Book Cover */}
                <div className="relative bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 aspect-[2/3] overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay with Description */}
                  {hoveredBook === book.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 transition-opacity duration-300">
                      <div className="text-white text-center">
                        <h3 className="font-medium text-sm mb-2">{book.title}</h3>
                        <p className="text-xs text-gray-300 mb-3">by {book.author}</p>
                        <p className="text-xs leading-relaxed">{book.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Book Info */}
                <div className="mt-3 text-center">
                  <h3 className="font-medium text-sm text-black mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-gray-600">{book.author}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">
                    {book.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No books found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Books;
