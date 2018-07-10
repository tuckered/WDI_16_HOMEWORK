require 'pry'
require 'fileutils'
=begin
given a list of name s
Joe Black
Mary Jane
Melissa George
Bob Downe


hackers
  |
  |--joe_black
  |       |-README.md
  |
  |--mary_jane
  |       |-README.md
  |
  |--melissa_george
  |       |-README.md
  |
  |--bob_downe
          |-README.md

  useful: fileutils

=end

hackers = ['Joe Black', 'Mary Jane', 'Melissa George', 'Bob Downe']

# FileUtils.touch('abc')
# FileUtils.mkdir('xyz')

# that do end thing??? - ruby blocks. a piece of code for each hacker - scope is local

# hackers.each do |hacker|
#   dir_name = hacker.downcase.gsub(' ', '_')
#   FileUtils.mkdir(dir_name)
#   FileUtils.cd(dir_name)
#   FileUtils.touch('README.md')
#   FileUtils.cd('../')
# end


hackers.each do |hacker|
  dir_name = hacker.downcase.gsub(' ', '_')
  FileUtils.mkdir(dir_name)
  FileUtils.cd(dir_name) do
    FileUtils.touch('README.md') # having do end block means when you end the .touch you end and effectively come out of the directory. 
  end
end



# look for each hackers

# make directory for the hackers name
# cd into dir
# touch a readme.me file
# cd ..


# hackers.each do |name|
#   puts FileUtils.mkdir_p |name|
# end

# FileUtils.mkdir_p 'temp'

# obvs incorrect




binding.pry