class PostCategory < ApplicationRecord
  has_many :posts

  after_save :set_slug

  extend FriendlyId
  friendly_id :title, use: :slugged

  private

  def set_slug
    unless self.nil?
      # if self.slug.blank?
        begin
          slugged = self.title.parameterize
          self.slug = slugged
        rescue => e
          logger.debug "Error while saving slug for #{self.inspect}. Error message: #{e.message}"
          self.slug = nil
        end
      # end
    end
  end
end
