class AddReferenceToAttachments < ActiveRecord::Migration[5.1]
  def change
    add_reference :attachments, :request, foreign_key: true
  end
end
