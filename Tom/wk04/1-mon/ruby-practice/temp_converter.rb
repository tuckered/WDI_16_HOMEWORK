require 'pry'

puts ('What\'s the starting temperature?')
temp_value = gets().chomp()

puts ('Choose your starting unit: f, C or K')
temp_unit = gets().chomp()

def conversion_temp(temp_value, temp_unit)
  if temp_unit == "f"
    celcius = (temp_value - 32) / 1.8
    kelvin = (temp_value + 459.67) / 1.8
    puts("Celcius =  #{celcius}")
    puts("kelvin = #{kelvin}")

  elsif temp_unit == "C"
    fahrenheit = temp_value * 1.8 + 32
    kelvin = temp_value + 273.15
    puts("Fahrenheit = #{fahrenheit}")
    puts("kelvin = #{kelvin}")

  elsif temp_unit == "K"
    fahrenheit = temp_value * 1.8 - 459.67
    celcius = temp_value - 273.15
    puts("Fahrenheit = #{fahrenheit}")
    puts("Celcius = #{celcius}")
  end
end

conversion_temp(temp_value.to_i, temp_unit)