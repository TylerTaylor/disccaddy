class Disc < ApplicationRecord
  has_many :bags
  has_many :users, through: :bags
end
