class Client

  def initialize(client_name, num_children, age, list_of_pets, client_number)
    @client_name = client_name
    @num_children = num_children
    @age = age
    @list_of_pets = list_of_pets
    @client_number = client_number
    # @list_of_pets = [list_of_pets]
  end

  def name()
    @client_name
  end

  def children()
    @num_children
  end

  def age()
    @age
  end

  def pets()
    @list_of_pets
  end

  def client_number()
    @client_number
  end
  

end