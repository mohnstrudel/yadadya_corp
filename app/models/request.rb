class Request < ApplicationRecord

  mount_uploaders :attachments, AttachmentUploader

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true,
                format: { with: VALID_EMAIL_REGEX }

  validates :full_name, :phone, presence: true
end
