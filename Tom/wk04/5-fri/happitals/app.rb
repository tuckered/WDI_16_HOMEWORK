require_relative 'client'
require_relative 'animal'

#declare a shelter - array, harsh, custom object
#you have permission to make the shelter a global ($in-front). everyone can see it. 

$shelter = {
  :clients => [],
  :animals => []
}

def add_client()
  puts "Client Name:"
  client_name = gets.chomp
  puts "Number of Children:"
  num_children = gets.chomp.to_i
  puts "Client Age:"
  age = gets.chomp.to_i
  list_of_pets = []
  client_number = ($shelter[:clients].length)
  client = Client.new(client_name, num_children, age, list_of_pets, client_number)
  $shelter[:clients].push(client)
  puts "Added #{ client_name } to the client list."
  puts "---------------------------------------------"
end


def add_animal()
  puts "---------------------------------------------"
  puts "Name of animal:"
  animal_name = gets.chomp
  puts "#{ animal_name }'s age:"
  age = gets.chomp.to_i
  puts "#{ animal_name }'s gender:" 
  gender = gets.chomp
  puts "#{ animal_name }'s species:"
  species = gets.chomp
  toys = []
  # loop do
  #   print "Add a toy:"
  #   answer = (gets.chomp)
  #   toys.push(answer)
  #   print "Add another toy? (y/n)"
  #   if answer == 'n'
  #     break
  #   end
  # end
  animal_number = ($shelter[:animals].length)
  puts "---------------------------------------------"
    
  animal = Animal.new(animal_name, age, gender, species, toys, animal_number)
  
  $shelter[:animals].push(animal)
  puts "
  Added #{ animal_name } to the animal list."
  puts "---------------------------------------------"
end
  


def show_clients()
  puts "---------------------------------------------"
  # i = 0
  if $shelter[:clients].length == 0
    puts "There are no registered clients at this time."
    else
      $shelter[:clients].each do |client|
      # i = i + 1
      # puts "Name: #{client.name}"
      puts "Name: #{client.name} --- Client Number: #{client.client_number}"
    end
  end
  puts "---------------------------------------------"
end



def show_animals()
  puts "--------------------------------------------"
  if $shelter[:animals].length == 0
    puts "There are no animals available at this time."
    else
    $shelter[:animals].each do |animal| 
      puts "Name: #{animal.name} --- Type: #{ animal.species } --- Age: #{ animal.age } --- Sex: #{ animal.gender } --- 
      Registration Number: #{animal.animal_number}"
    end
  end
  puts "--------------------------------------------"
end
  


  
def choose_animal()
  puts "Choose animal by Registration Number: "
  
  $shelter[:animals].each do |animal| 
  puts "Name: #{animal.name} --- Registration Number: #{animal.animal_number}"
  end
  
  selection = gets.chomp.to_i

  if $shelter[:animals].each do |animal| 
    animal.animal_number == selection
    # pushes to client array but hard coded. 
    # $shelter[:clients][0].pets.push($shelter[:animals][0])
    adopt = $shelter[:animals].slice(animal.animal_number)
    
    $shelter[:clients][animal.client_number].pets.push(adopt)
    puts "it's a match"
  else puts "Try again"
  end 

  # $shelter[:animals].slice(0)
  end
  
end

  

loop do
  puts 'Welcome to the Happitails animal shelter.

  --Please select one of the following options--'

  puts "1 = Add Animal"
  puts "2 = Add Client"
  puts "3 = Show All Animals"
  puts "4 = Show All Clients"
  puts "5 = Choose Animal"
  puts "6 = Exit Program"
  
  input = gets.chomp.to_i

  if input == 1
    add_animal()
  elsif input == 2
    add_client()
  elsif input == 3
    show_animals()
  elsif input == 4
    show_clients()
  elsif input == 5
    choose_animal()
  elsif input == 6
    break
  else 
    puts "--------------------------------------------------------"
    puts "That is not a valid selection. Please select options 1-6"
    puts "--------------------------------------------------------"
  end
end  




require 'pry'
binding.pry 