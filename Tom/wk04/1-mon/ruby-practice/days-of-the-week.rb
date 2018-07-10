require 'pry'

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

days_of_the_week.unshift('Sunday').pop()

weekdays = days_of_the_week.slice(1,5)

weekends = [days_of_the_week.first, days_of_the_week.last].concat

days_of_the_week = [weekdays, weekends]

days_of_the_week.pop()

days_of_the_week[0].sort

binding.pry


