class Card < ApplicationRecord
  mount_uploaders :images, CardUploader
  validates :question, presence: true
  validates :answer, presence: true
end
