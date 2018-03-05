class Post < ApplicationRecord
  belongs_to :post_category

  mount_uploader :logo, LogoUploader

  scope :active, -> { where(active: true) }

  scope :by_category, -> (category) {where(post_category_id: PostCategory.find_by_title(category))}

  extend FriendlyId
  friendly_id :title, use: :slugged

  include Bootsy::Container

  def next
    Post.where("id > ?", id).order("id ASC").first || Post.first
  end

  def prev
    Post.where("id < ?", id).order("id DESC").first || Post.last
  end
end
