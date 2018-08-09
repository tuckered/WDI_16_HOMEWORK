class HousesController < ApplicationController

  def index
    @houses = House.all
    
  end

  def show
    @houses = House.all
    @houses = House.find(:id)
  end

end
