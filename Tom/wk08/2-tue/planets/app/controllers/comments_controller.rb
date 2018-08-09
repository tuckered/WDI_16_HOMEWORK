class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new
    @comment.body = Comment = params[:id]

  end




end
