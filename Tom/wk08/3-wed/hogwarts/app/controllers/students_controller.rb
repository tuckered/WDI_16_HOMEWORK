class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find(params[:id])
    @student.name = @student.name
    @student.house = @student.house
  end

end
