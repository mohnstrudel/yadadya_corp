class Post < ApplicationRecord
  belongs_to :post_category

  mount_uploader :logo, LogoUploader
end
