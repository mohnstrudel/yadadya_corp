class AddMessageToRequests < ActiveRecord::Migration[5.1]
  def change
    add_column :requests, :message, :string
  end
end
