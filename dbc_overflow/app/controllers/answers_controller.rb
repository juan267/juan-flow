class AnswersController < ApplicationController

  def index
  end

  def show
    @answer = Answer.find(params[:id])
    @question = @answer.question
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.save

    redirect_to @answer
  end

  def upvote
    @answer = Answer.find(params[:id])
    @answer.votes.create

    redirect_to @answer.question
  end

  def downvote
    @answer = Answer.find(params[:id])
    @answer.votes.last.destroy

    redirect_to @answer.question
  end

  private

  def answer_params
    params.require(:answer).permit(:title, :content, :question_id)
  end
end