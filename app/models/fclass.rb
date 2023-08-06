class Fclass < ApplicationRecord
  extend FriendlyId

  friendly_id :slug_candidates, use: :slugged

  def slug_candidates
    [
      [:title, :user_id]
    ]
  end

  mount_uploader :class_img, FclassUploader
  belongs_to :user

  validates :title, presence: true
  has_many :decks
end
