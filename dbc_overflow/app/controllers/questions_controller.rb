class QuestionsController < ApplicationController

  def index
    api = Github::Client.new
    @questions = Question.all
    @response = api.zen(ENV['GIT'])

    respond_to do |format|
      format.html
      format.json
    end
  end

  def new
    @question = Question.new
  end

  def show
    @question = Question.find(params[:id])
    @answers = @question.answers
  end

  def create
    @questions = Question.all
    @question = Question.new(question_params)
    @question.save
    # redirect_to @question
  end

  def edit
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      redirect_to @question
    else
      render 'edit'
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy

    redirect_to questions_path
  end

  def upvote
  @questions = Question.all
   @question = Question.find(params[:id])
   @question.votes.create
   # redirect_to questions_path
  end

  def downvote
    @questions = Question.all
    @question = Question.find(params[:id])
    @question.votes.last.destroy
    # redirect_to questions_path
  end

  private

  def question_params
    params.require(:question).permit(:title, :content)
  end

end
