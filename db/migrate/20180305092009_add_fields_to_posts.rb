class AddFieldsToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :active, :boolean
    add_column :posts, :published_at, :datetime
  end
end
