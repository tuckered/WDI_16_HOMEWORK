class Animal

  def initialize(animal_name, age, gender, species, toys, animal_number)
    @animal_name = animal_name
    @age = age
    @gender = gender
    @species = species
    @toys = []
    @animal_number = animal_number
  end

  def name()
    @animal_name
  end

  def age()
    @age
  end

  def gender()
    @gender
  end

  def species()
    @species
  end

  def toys()
    @toys
  end

  def animal_number()
    @animal_number
  end
end



# def initialize(name, age, gender, species)
#   @name = name
#   @age = age
#   @gender = gender
#   @species = species
#   @toys = []
# end

