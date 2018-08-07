class SpaceRocksController < ApplicationController

  def index
    @space_rocks = SpaceRock.all
    @space_rock = SpaceRock.new
  end

  def new
    @space_rock = SpaceRock.new
  end

  def create
    @space_rock = SpaceRock.new
    @space_rock.name = params[:name]
    @space_rock.image_url = params[:image_url]
    if @space_rock.save
      redirect_to '/space_rocks'
    else
      render :new
    end
  end

  def show
    @space_rock = SpaceRock.find( params[:id] )
  end

  def destroy
    @space_rock = SpaceRock.find( params[:id] )
    if @space_rock.destroy
      redirect_to '/space_rocks'
    else
      render :show
    end
  end

  def edit
    @space_rock = SpaceRock.find( params[:id] )
  end

  def update
    @space_rock = SpaceRock.find( params[:id] )
    @space_rock.name = params[:name]
    @space_rock.image_url = params[:image_url]
    if @space_rock.save
      redirect_to "/space_rocks/#{ @space_rock.id }"
    else
      render :edit
    end
  end


end
