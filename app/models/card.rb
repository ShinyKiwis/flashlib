class Card < ApplicationRecord
  mount_uploaders :images, CardUploader
end
