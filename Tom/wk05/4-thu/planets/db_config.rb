require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'solarsystem'
}

ActiveRecord::Base.establish_connection(options)