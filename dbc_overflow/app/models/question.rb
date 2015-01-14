class Question < ActiveRecord::Base
  has_many :answers
  has_many :votes, as: :votable, dependent: :destroy

end
