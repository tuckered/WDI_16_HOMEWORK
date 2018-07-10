require 'pry'

# old syntax for hash
# => hashrocket

# movie = {
#   :title => 'sharknado',
#   :year => 2000,
#   :stars => ['shark']
# }



# symbol = :title, :year, :blah

# json - data format
# new syntax inspired by json
# [
#   {
#     title: 'sharknado',
#     year: 2000,
#     stars: ['shark']
#   },
#   {
#     title: 'hocus pocus',
#     year: 2200,
#   },
# ]

db = {
  2 => ['dt'],
  3 => ['inder', 'michael'],
  4 => ['megan', 'axel'],
}

students = ['inder', 'michael', 'megan']

# students.each do |student|
#   puts student
# end


# db is a collection
db.each do |score, students|
  puts "#{score} #{students.join(' ')}"
end



binding.pry