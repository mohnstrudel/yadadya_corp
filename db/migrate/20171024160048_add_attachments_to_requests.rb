class AddAttachmentsToRequests < ActiveRecord::Migration[5.1]
  def change
    add_column :requests, :attachments, :json
  end
end
