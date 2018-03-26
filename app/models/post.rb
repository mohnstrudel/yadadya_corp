class Post < ApplicationRecord
  belongs_to :post_category

  after_save :set_published_date
  before_save :set_slug

  mount_uploader :logo, LogoUploader
  mount_uploader :logo_inner, LogoUploader

  scope :active, -> { where(active: true) }

  scope :by_category, -> (category) {where(post_category_id: PostCategory.find_by_title(category))}

  extend FriendlyId
  friendly_id :title, use: :slugged

  # include Bootsy::Container

  def next
    Post.where("id > ?", id).order("id ASC").first
  end

  def prev
    Post.where("id < ?", id).order("id DESC").first
  end

  private

  def set_published_date
    if self.published_at.blank?
      self.published_at = self.created_at
      self.save!
    end

  end


  def set_slug
    unless self.nil?
      if self.slug.blank?
        begin
          slugged = Russian.translit(self.title).parameterize
          self.slug = slugged
        rescue => e
          logger.debug "Error while saving slug for #{self.inspect}. Error message: #{e.message}"
          self.slug = nil
        end
      end
    end
  end
end
