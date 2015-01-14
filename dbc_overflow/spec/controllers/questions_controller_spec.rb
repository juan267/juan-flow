require 'rails_helper'

RSpec.describe QuestionsController, :type => :controller do

  describe "index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GE' do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end

    it "list all quesions on the page " do
      get :questions
      expect(last_response.body)
    end
  end

end
