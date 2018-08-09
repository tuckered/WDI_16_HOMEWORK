class SpaceRock < ApplicationRecord
  has_many :comments #dependent :destroy
end
