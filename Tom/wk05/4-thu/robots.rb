require 'pry'

class Robot
  

  def initialize
    @name = []
    2.times do 
      @name.push ('A'..'Z').to_a.sample
    end
    3.times do 
      @name.push (0..9).to_a.sample
    end
     @robot = @name.join
  end 

  def name 
    @robot
  end

  def reset 
    @name = []
    2.times do 
      @name.push ('A'..'Z').to_a.sample
    end
    3.times do 
      @name.push (0..9).to_a.sample
    end
     @robot = @name.join
  end
end

robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name
puts "Resetting to factory settings."
robot1.reset
puts robot1.name
puts robot1.name










# def reset
#   if @name != []
#     2.times do 
#       puts @robot
#     end
#     puts "Resetting to factory setting."
#     @name = []
#     2.times do 
#       @name.push ('A'..'Z').to_a.sample
#     end
#     3.times do 
#       @name.push (0..9).to_a.sample
#     end
#     @robot = @name.join
#     2.times do 
#       puts @robot
#     end
#   end
# end

binding.pry